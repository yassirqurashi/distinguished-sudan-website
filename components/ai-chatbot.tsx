"use client";

import { FormEvent, useRef, useState } from "react";
import Image from "next/image";
import { Loader2, Send, X } from "lucide-react";
import { contactInfo } from "@/lib/contact-info";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const welcomeMessage = "مرحباً، أنا ياسر، موظف المتميزون الذكي. ما اسمك الكريم؟";

const quickQuestions = [
  "ما هي خدماتكم؟",
  "هل تطورون تطبيقات هاتف؟",
  "هل تقدمون أنظمة ERP؟",
  "كيف يمكنني طلب عرض سعر؟",
  "كيف أتواصل معكم؟"
];

function RobotAssistant({ small = false }: { small?: boolean }) {
  return (
    <div className={small ? "ai-robot ai-robot-small" : "ai-robot"} aria-hidden="true">
      <Image
        src="/chatbot-assistant.png"
        alt=""
        width={1254}
        height={1254}
        priority={false}
        className="ai-robot-image"
      />
    </div>
  );
}

export function AiChatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([{ role: "assistant", content: welcomeMessage }]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  async function sendMessage(messageText: string) {
    const cleanMessage = messageText.trim();
    if (!cleanMessage || loading) return;

    const nextMessages: Message[] = [...messages, { role: "user", content: cleanMessage }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: cleanMessage,
          history: messages.slice(-8)
        })
      });

      if (!response.ok) {
        throw new Error("Chat request failed");
      }

      const data = (await response.json()) as { reply?: string };
      if (!data.reply) throw new Error("Missing reply");
      setMessages((current) => [...current, { role: "assistant", content: data.reply as string }]);
    } catch {
      setError("تعذر الاتصال بالمساعد حالياً. يمكنك التواصل معنا مباشرة عبر النموذج أو WhatsApp.");
      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: `تعذر الاتصال بالمساعد حالياً.

يمكنك التواصل معنا مباشرة عبر:
WhatsApp: ‎${contactInfo.whatsapp.label}‎
Phone: ‎${contactInfo.phone.label}‎
Email: ${contactInfo.emails.join(" / ")}
صفحة التواصل: ${contactInfo.contactPath}`
        }
      ]);
    } finally {
      setLoading(false);
      window.setTimeout(() => inputRef.current?.focus(), 50);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    void sendMessage(input);
  }

  return (
    <div className="fixed bottom-5 left-5 z-[70] font-tajawal sm:bottom-7 sm:left-7" dir="rtl">
      {open ? (
        <section className="mb-4 flex max-h-[min(680px,calc(100vh-7rem))] w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-[1.75rem] border border-brand-mist/70 bg-white/95 shadow-[0_24px_80px_rgba(11,16,32,0.22)] backdrop-blur-2xl sm:w-[410px]">
          <header className="flex items-center justify-between gap-4 border-b border-brand-mist bg-brand-navy px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-14 w-14 items-end justify-center overflow-hidden rounded-full bg-white/10 ring-1 ring-white/15">
                <RobotAssistant small />
              </div>
              <div>
                <h2 className="text-base font-extrabold">ياسر</h2>
                <p className="text-xs font-bold text-brand-mist">موظف المتميزون الذكي</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-brand-mist transition hover:bg-white/10 hover:text-white" aria-label="إغلاق المحادثة">
              <X size={20} />
            </button>
          </header>

          <div className="flex-1 space-y-4 overflow-y-auto bg-gradient-to-b from-white to-brand-mist/30 px-5 py-5">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`flex ${message.role === "user" ? "justify-start" : "justify-end"}`}>
                <div className={`max-w-[86%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm font-bold leading-7 shadow-sm [overflow-wrap:anywhere] ${message.role === "user" ? "bg-brand-navy text-white" : "border border-brand-mist bg-white text-brand-slate"}`}>
                  {message.content}
                </div>
              </div>
            ))}
            {loading ? (
              <div className="flex justify-end">
                <div className="inline-flex items-center gap-1.5 rounded-2xl border border-brand-mist bg-white px-4 py-3 shadow-sm" aria-label="المساعد يكتب">
                  <span className="ai-typing-dot" />
                  <span className="ai-typing-dot" />
                  <span className="ai-typing-dot" />
                </div>
              </div>
            ) : null}
          </div>

          <div className="border-t border-brand-mist bg-white px-5 py-4">
            <div className="mb-3 flex gap-2 overflow-x-auto pb-1">
              {quickQuestions.map((question) => (
                <button key={question} type="button" disabled={loading} onClick={() => void sendMessage(question)} className="shrink-0 rounded-full border border-brand-mist px-3 py-2 text-xs font-extrabold text-brand-slate transition hover:border-brand-cyan hover:text-brand-navy disabled:opacity-50">
                  {question}
                </button>
              ))}
            </div>
            {error ? <p className="mb-3 text-sm font-bold text-brand-slate">{error}</p> : null}
            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <input
                ref={inputRef}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                disabled={loading}
                className="min-w-0 flex-1 rounded-full border border-brand-mist px-4 py-3 text-sm font-bold text-brand-navy outline-none transition placeholder:text-brand-slate/60 focus:border-brand-cyan disabled:opacity-60"
                placeholder="اكتب رسالتك..."
                aria-label="رسالة للمساعد الذكي"
              />
              <button type="submit" disabled={loading || !input.trim()} className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-cyan text-brand-navy shadow-glow transition hover:-translate-y-0.5 hover:bg-brand-teal hover:text-white disabled:cursor-not-allowed disabled:opacity-50" aria-label="إرسال الرسالة">
                {loading ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
              </button>
            </form>
          </div>
        </section>
      ) : null}

      {!open ? (
        <button type="button" onClick={() => setOpen(true)} className="ai-chatbot-button group" aria-label="فتح ياسر موظف المتميزون الذكي">
          <RobotAssistant />
          <span className="sr-only">ياسر موظف المتميزون الذكي</span>
        </button>
      ) : null}
    </div>
  );
}
