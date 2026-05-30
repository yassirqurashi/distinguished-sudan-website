import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { navLinks, services } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-brand-navy py-14 text-white">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-5 inline-flex rounded-lg bg-white/95 px-4 py-3">
              <Image src="/logo-transparent.png" alt="المتميزون Distinguished" width={280} height={86} className="h-14 w-auto object-contain" />
            </div>
            <p className="mb-2 text-sm text-brand-mist">حلول رقمية للشركات في السودان</p>
            <p className="max-w-xl text-base leading-8 text-brand-mist">نبني تجارب رقمية عملية وأنيقة تساعد الشركات على تحديث عملياتها، خدمة عملائها، والنمو بثقة.</p>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-extrabold text-brand-cyan">الصفحات</h3>
            <div className="grid gap-3">
              {navLinks.map((link) => <Link key={link.href} href={link.href} className="text-brand-mist transition hover:text-brand-cyan">{link.label}</Link>)}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-extrabold text-brand-cyan">الخدمات</h3>
            <div className="grid gap-3">
              {services.slice(0, 4).map((service) => <span key={service.title} className="text-brand-mist">{service.title}</span>)}
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-brand-mist/15 pt-6 text-sm text-brand-mist">© 2026 المتميزون Distinguished. جميع الحقوق محفوظة.</div>
      </Container>
    </footer>
  );
}
