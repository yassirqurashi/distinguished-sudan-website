import { Mail, MessageCircle, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export const metadata = { title: "تواصل معنا | المتميزون Distinguished" };

const contactDetails: { icon: LucideIcon; title: string; text: string; href?: string }[] = [
  { icon: MessageCircle, title: "WhatsApp", text: "+249 91238703", href: "https://wa.me/24991238703" },
  { icon: Phone, title: "Phone", text: "+249 91238703", href: "tel:+24991238703" }
];

const emails = ["info@dds-sd.com", "ashraf@dds-sd.com"];

export default function ContactPage() {
  return (
    <main>
      <PageHero title="حدثنا عن مشروعك القادم" description="شاركنا احتياجك، وسنساعدك على تحويله إلى خطة رقمية واضحة تناسب شركتك ومرحلة نموها." />
      <section className="bg-white py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white shadow-glow">
              <h2 className="text-3xl font-extrabold">المتميزون Distinguished</h2>
              <p className="mt-4 leading-8 text-brand-mist">نعمل مع الشركات في السودان والمنطقة لبناء منتجات رقمية وأنظمة تشغيل أكثر وضوحاً وكفاءة.</p>
              <div className="mt-8 grid gap-5">
                {contactDetails.map(({ icon: Icon, title, text, href }) => (
                  <div key={`${title}-${text}`} className="flex gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan text-brand-navy"><Icon size={20} /></span>
                    <span>
                      <span className="block font-extrabold text-white">{title}</span>
                      {href ? (
                        <a href={href} dir="ltr" className="block text-left text-brand-mist transition hover:text-brand-cyan">{text}</a>
                      ) : (
                        <span className="block text-brand-mist">{text}</span>
                      )}
                    </span>
                  </div>
                ))}
                <div className="flex gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan text-brand-navy"><Mail size={20} /></span>
                  <span>
                    <span className="block font-extrabold text-white">Email</span>
                    {emails.map((email) => (
                      <a key={email} href={`mailto:${email}`} dir="ltr" className="block text-left text-brand-mist transition hover:text-brand-cyan">{email}</a>
                    ))}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </main>
  );
}
