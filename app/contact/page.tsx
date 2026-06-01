import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion";

export const metadata = { title: "تواصل معنا | المتميزون Distinguished" };

export default function ContactPage() {
  return (
    <main>
      <PageHero eyebrow="تواصل معنا" title="حدثنا عن مشروعك القادم" description="شاركنا احتياجك، وسنساعدك على تحويله إلى خطة رقمية واضحة تناسب شركتك ومرحلة نموها." />
      <section className="bg-white py-24">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-lg bg-brand-navy p-8 text-white shadow-glow">
              <h2 className="text-3xl font-extrabold">المتميزون Distinguished</h2>
              <p className="mt-4 leading-8 text-brand-mist">نعمل مع الشركات في السودان والمنطقة لبناء منتجات رقمية وأنظمة تشغيل أكثر وضوحاً وكفاءة.</p>
              <div className="mt-8 grid gap-5">
                {[[MessageCircle, "WhatsApp", "جاهزون لاستقبال الاستفسارات"], [Mail, "Email", "hello@distinguished.sd"], [Phone, "Phone", "+249 000 000 000"], [MapPin, "Location", "السودان"]].map(([Icon, title, text]) => (
                  <div key={String(title)} className="flex gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-cyan text-brand-navy"><Icon size={20} /></span>
                    <span><span className="block font-extrabold text-white">{String(title)}</span><span className="block text-brand-mist">{String(text)}</span></span>
                  </div>
                ))}
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
