import { readFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";
import { DISTINGUISHED_CHATBOT_SYSTEM_PROMPT } from "@/lib/ai/system-prompt";
import { contactInfo } from "@/lib/contact-info";

export const runtime = "nodejs";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

function cleanText(value: unknown, maxLength = 1600) {
  return String(value ?? "").trim().slice(0, maxLength);
}

function isChatMessage(value: unknown): value is ChatMessage {
  if (!value || typeof value !== "object") return false;
  const item = value as Record<string, unknown>;
  return (item.role === "user" || item.role === "assistant") && typeof item.content === "string";
}

async function getKnowledgeBase() {
  const filePath = path.join(process.cwd(), "lib", "knowledge", "company-knowledge.md");
  return readFile(filePath, "utf8");
}

function buildConversationContext(history: ChatMessage[], message: string) {
  const recentHistory = history
    .filter(isChatMessage)
    .slice(-8)
    .map((item) => `${item.role === "user" ? "الزائر" : "المساعد"}: ${cleanText(item.content, 900)}`)
    .join("\n");

  return `
بيانات التواصل الرسمية من الموقع:
- صفحة التواصل: ${contactInfo.contactPath}
- WhatsApp: ‎${contactInfo.whatsapp.label}‎
- Phone: ‎${contactInfo.phone.label}‎
- Email: ${contactInfo.emails.join(" / ")}

تعليمات مهمة لهذه المحادثة:
- إذا بدأ الزائر بتحية مثل "السلام عليكم" أو "مساء الخير"، رد بتحية مناسبة أولاً ثم اسأله عن اسمه.
- مثال: "وعليكم السلام، ما اسمك الكريم؟" أو "مساء النور، ما اسمك الكريم؟"
- إذا لم يذكر الزائر اسمه بعد، اسأله عن اسمه أولاً فقط.
- إذا ذكر الزائر اسمه للتو، رحّب به باسمه واسأله: كيف يمكنني مساعدتك؟
- اجعل الرد مختصراً جداً.
- عند طلب المزيد من المعلومات، وجّه الزائر إلى info@dds-sd.com أو الرقم المكتوب من اليسار إلى اليمين: ‎${contactInfo.whatsapp.label}‎.

المحادثة السابقة:
${recentHistory || "لا توجد محادثة سابقة."}

رسالة الزائر الحالية:
${message}
`.trim();
}

function extractReply(data: Record<string, unknown>) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const output = Array.isArray(data.output) ? data.output : [];
  for (const item of output) {
    if (!item || typeof item !== "object") continue;
    const itemContent = (item as Record<string, unknown>).content;
    const content = Array.isArray(itemContent) ? itemContent : [];
    for (const part of content) {
      if (!part || typeof part !== "object") continue;
      const text = (part as Record<string, unknown>).text;
      if (typeof text === "string" && text.trim()) return text.trim();
    }
  }

  return "";
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return NextResponse.json({ message: "OpenAI API key is not configured." }, { status: 500 });
    }

    const body = await request.json();
    const message = cleanText(body.message);
    const history = Array.isArray(body.history) ? body.history.filter(isChatMessage) : [];

    if (!message) {
      return NextResponse.json({ message: "Message is required." }, { status: 400 });
    }

    const knowledgeBase = await getKnowledgeBase();
    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model,
        instructions: `${DISTINGUISHED_CHATBOT_SYSTEM_PROMPT}\n\nقاعدة المعرفة:\n${knowledgeBase}`,
        input: buildConversationContext(history, message),
        max_output_tokens: 520
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("OpenAI chatbot API error:", errorText);
      return NextResponse.json({ message: "Chat service is currently unavailable." }, { status: 502 });
    }

    const data = (await response.json()) as Record<string, unknown>;
    const reply = extractReply(data);

    if (!reply) {
      return NextResponse.json({ message: "No assistant reply returned." }, { status: 502 });
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Chatbot route error:", error);
    return NextResponse.json({ message: "Unable to process chat request." }, { status: 500 });
  }
}
