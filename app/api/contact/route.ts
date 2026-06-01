import { NextResponse } from "next/server";

const nodemailer = require("nodemailer") as {
  createTransport: (options: Record<string, unknown>) => {
    sendMail: (options: Record<string, unknown>) => Promise<unknown>;
  };
};

const websiteUrl = "https://www.dds-sd.com";
const senderEmail = "info@dds-sd.com";
const senderName = "المتميزون للحلول الرقمية";
const emailFontStack = "'Tajawal','Geeza Pro','SF Arabic','Helvetica Neue',Arial,Tahoma,sans-serif";
const requiredFields = ["name", "email", "phone", "service", "message"] as const;

type ContactPayload = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

function cleanValue(value: unknown) {
  return String(value ?? "").trim();
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getSubmittedAt() {
  return new Intl.DateTimeFormat("ar-SD", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Africa/Khartoum"
  }).format(new Date());
}

function getTransporter() {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !port || !user || !pass) {
    throw new Error("SMTP environment variables are not configured.");
  }

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass }
  });
}

function buildVisitorEmail(data: ContactPayload) {
  const name = escapeHtml(data.name);
  const email = escapeHtml(data.email);
  const phone = escapeHtml(data.phone);
  const service = escapeHtml(data.service);

  return `<!doctype html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <meta name="supported-color-schemes" content="light" />
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800&display=swap');
      body, table, td, div, h1, p, a {
        font-family: ${emailFontStack} !important;
      }
    </style>
    <title>شكراً لتواصلكم مع المتميزون للحلول الرقمية</title>
  </head>
  <body style="margin:0;background:#f4f7fb;direction:rtl;font-family:${emailFontStack};color:#0B1020;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" dir="rtl" style="background:#f4f7fb;padding:24px 12px;font-family:${emailFontStack};">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" dir="rtl" style="max-width:640px;background:#ffffff;border-radius:18px;overflow:hidden;border:1px solid #e2e8f0;font-family:${emailFontStack};">
            <tr>
              <td style="background:#0B1020;padding:28px 22px;text-align:center;font-family:${emailFontStack};">
                <div style="display:inline-block;border:1px solid rgba(0,200,203,0.55);border-radius:999px;padding:9px 20px;color:#00C8CB;font-size:15px;font-weight:800;letter-spacing:0;font-family:${emailFontStack};">
                  المتميزون Distinguished
                </div>
                <div style="height:14px;"></div>
                <div style="color:#ffffff;font-size:23px;font-weight:800;line-height:1.7;font-family:${emailFontStack};">المتميزون للحلول الرقمية</div>
                <div style="color:#00C8CB;font-size:15px;font-weight:700;line-height:1.8;font-family:${emailFontStack};">Distinguished Digital Solutions</div>
              </td>
            </tr>
            <tr>
              <td dir="rtl" style="padding:32px 26px 10px;text-align:right;font-family:${emailFontStack};">
                <h1 style="margin:0 0 16px;font-size:25px;line-height:1.7;color:#0B1020;font-family:${emailFontStack};font-weight:800;">السلام عليكم، ${name}</h1>
                <p style="margin:0 0 14px;font-size:17px;line-height:2;color:#334155;font-family:${emailFontStack};">شكراً لتواصلكم مع المتميزون للحلول الرقمية.</p>
                <p style="margin:0 0 22px;font-size:17px;line-height:2;color:#334155;font-family:${emailFontStack};">تم استلام طلبكم بنجاح، وسيقوم أحد أعضاء فريقنا بمراجعة المعلومات والتواصل معكم في أقرب وقت ممكن.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:0 26px 22px;font-family:${emailFontStack};">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" dir="rtl" style="background:#f8fbfd;border:1px solid #e2e8f0;border-radius:14px;overflow:hidden;font-family:${emailFontStack};">
                  <tr>
                    <td colspan="2" style="padding:16px 18px;background:#00C8CB;color:#0B1020;font-size:18px;font-weight:800;font-family:${emailFontStack};">ملخص الطلب</td>
                  </tr>
                  <tr><td style="padding:14px 18px;color:#334155;font-weight:700;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">الاسم:</td><td style="padding:14px 18px;color:#0B1020;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">${name}</td></tr>
                  <tr><td style="padding:14px 18px;color:#334155;font-weight:700;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">البريد الإلكتروني:</td><td style="padding:14px 18px;color:#0B1020;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">${email}</td></tr>
                  <tr><td style="padding:14px 18px;color:#334155;font-weight:700;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">رقم الهاتف:</td><td style="padding:14px 18px;color:#0B1020;border-bottom:1px solid #e2e8f0;font-family:${emailFontStack};">${phone}</td></tr>
                  <tr><td style="padding:14px 18px;color:#334155;font-weight:700;font-family:${emailFontStack};">الخدمة المطلوبة:</td><td style="padding:14px 18px;color:#0B1020;font-family:${emailFontStack};">${service}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td dir="rtl" style="padding:0 26px 32px;text-align:right;font-family:${emailFontStack};">
                <p style="margin:0 0 22px;font-size:17px;line-height:2;color:#334155;font-family:${emailFontStack};">نقدر اهتمامكم بخدماتنا ونتطلع إلى مساعدتكم في تحقيق أهدافكم الرقمية.</p>
                <p style="margin:0;font-size:17px;line-height:2;color:#0B1020;font-weight:700;font-family:${emailFontStack};">مع خالص التحية،</p>
                <p style="margin:0;font-size:17px;line-height:2;color:#0B1020;font-weight:700;font-family:${emailFontStack};">فريق المتميزون للحلول الرقمية<br />Distinguished Digital Solutions</p>
                <p style="margin:16px 0 0;font-family:${emailFontStack};"><a href="${websiteUrl}" style="color:#00A3B0;font-size:16px;font-weight:700;text-decoration:none;font-family:${emailFontStack};">www.dds-sd.com</a></p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

function buildVisitorTextEmail(data: ContactPayload) {
  return `السلام عليكم ${data.name}،

شكراً لتواصلكم مع المتميزون للحلول الرقمية.

تم استلام طلبكم بنجاح، وسيقوم أحد أعضاء فريقنا بمراجعة المعلومات والتواصل معكم في أقرب وقت ممكن.

ملخص الطلب:

الاسم: ${data.name}
البريد الإلكتروني: ${data.email}
رقم الهاتف: ${data.phone}
الخدمة المطلوبة: ${data.service}

نقدر اهتمامكم بخدماتنا ونتطلع إلى مساعدتكم في تحقيق أهدافكم الرقمية.

مع خالص التحية،

فريق المتميزون للحلول الرقمية
Distinguished Digital Solutions

www.dds-sd.com`;
}

function buildInternalEmail(data: ContactPayload, submittedAt: string) {
  return `
الاسم:
${data.name}

البريد الإلكتروني:
${data.email}

الهاتف:
${data.phone}

الخدمة:
${data.service}

الرسالة:
${data.message}

تاريخ الإرسال:
${submittedAt}
`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = {
      name: cleanValue(body.name),
      email: cleanValue(body.email),
      phone: cleanValue(body.phone),
      service: cleanValue(body.service),
      message: cleanValue(body.message)
    };

    const missingField = requiredFields.find((field) => !data[field]);
    if (missingField) {
      return NextResponse.json({ message: "All required fields must be provided." }, { status: 400 });
    }

    if (!isValidEmail(data.email)) {
      return NextResponse.json({ message: "A valid email address is required." }, { status: 400 });
    }

    const notifyEmail = process.env.CONTACT_NOTIFY_EMAIL;
    if (!notifyEmail) {
      return NextResponse.json({ message: "Notification email is not configured." }, { status: 500 });
    }

    const submittedAt = getSubmittedAt();
    const transporter = getTransporter();
    const smtpUser = process.env.SMTP_USER || senderEmail;
    const visitorFrom = `"${senderName}" <${smtpUser}>`;

    await Promise.all([
      transporter.sendMail({
        from: visitorFrom,
        sender: smtpUser,
        to: data.email,
        replyTo: senderEmail,
        subject: "شكراً لتواصلكم مع المتميزون للحلول الرقمية",
        headers: {
          "X-Mailer": "Distinguished Digital Solutions Website",
          "List-Unsubscribe": `<mailto:${senderEmail}>`
        },
        text: buildVisitorTextEmail(data),
        html: buildVisitorEmail(data),
        envelope: {
          from: smtpUser,
          to: data.email
        }
      }),
      transporter.sendMail({
        from: smtpUser,
        sender: smtpUser,
        to: notifyEmail,
        replyTo: data.email,
        subject: "طلب جديد من موقع المتميزون",
        text: buildInternalEmail(data, submittedAt),
        envelope: {
          from: smtpUser,
          to: notifyEmail
        }
      })
    ]);

    return NextResponse.json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Contact form email error:", error);
    return NextResponse.json({ message: "Unable to send message at this time." }, { status: 500 });
  }
}
