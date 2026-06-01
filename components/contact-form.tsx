"use client";

import { useState } from "react";

const services = [
  "تطوير تطبيقات الهاتف المحمول",
  "أنظمة ERP",
  "وكلاء الذكاء الاصطناعي والأتمتة",
  "المواقع الإلكترونية",
  "WhatsApp Business API",
  "الاستشارات التقنية"
];

const inputClass = "rounded-lg border border-brand-mist px-4 py-4 outline-none transition focus:border-brand-cyan";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim()
    };

    if (!payload.name || !payload.email || !payload.phone || !payload.service || !payload.message) {
      setStatus("error");
      setMessage("تعذر إرسال الرسالة حالياً. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setStatus("error");
      setMessage("تعذر إرسال الرسالة حالياً. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.");
      return;
    }

    setStatus("sending");
    setMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      form.reset();
      setStatus("success");
      setMessage("تم إرسال رسالتكم بنجاح. سيقوم فريق المتميزون بالتواصل معكم قريباً.");
    } catch {
      setStatus("error");
      setMessage("تعذر إرسال الرسالة حالياً. يرجى المحاولة مرة أخرى أو التواصل معنا مباشرة.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg border border-brand-cyan/35 bg-white p-8 text-center shadow-soft md:p-12">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-brand-cyan text-2xl font-extrabold text-brand-navy">
          ✓
        </div>
        <h2 className="text-3xl font-extrabold leading-tight text-brand-navy">شكراً لتواصلكم معنا</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-9 text-brand-slate">
          تم إرسال رسالتكم بنجاح. سيقوم فريق المتميزون بالتواصل معكم قريباً.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-brand-mist bg-white p-6 shadow-soft md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <input name="name" required className={inputClass} placeholder="الاسم" />
        <input name="company" className={inputClass} placeholder="الشركة" />
        <input name="phone" required className={inputClass} placeholder="رقم الهاتف" />
        <input name="email" required type="email" className={inputClass} placeholder="البريد الإلكتروني" />
        <select name="service" required className="rounded-lg border border-brand-mist bg-white px-4 py-4 outline-none transition focus:border-brand-cyan md:col-span-2">
          {services.map((service) => (
            <option key={service}>{service}</option>
          ))}
        </select>
      </div>
      <textarea name="message" required className="mt-5 min-h-40 w-full rounded-lg border border-brand-mist px-4 py-4 outline-none transition focus:border-brand-cyan" placeholder="تفاصيل المشروع" />
      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-6 w-full rounded-full bg-brand-cyan px-7 py-4 text-base font-extrabold text-brand-navy shadow-glow transition hover:-translate-y-1 hover:bg-brand-teal hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "جاري الإرسال..." : "إرسال الطلب"}
      </button>
      {message ? (
        <p className="mt-4 text-center text-sm font-bold text-brand-slate">
          {message}
        </p>
      ) : null}
    </form>
  );
}
