import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/container";
import { navLinks, services } from "@/lib/data";

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61587642862529&mibextid=wwXIfr&rdid=S9oaqFMwzemsEBLq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18rPexuLG5%2F%3Fmibextid%3DwwXIfr%26ref%3D1",
    icon: (
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
        <path d="M14 8.6V6.9c0-.8.2-1.3 1.3-1.3H17V2.3c-.8-.1-1.6-.2-2.4-.2-2.5 0-4.2 1.5-4.2 4.3v2.2H7.5V12h2.9v9.9H14V12h2.8l.4-3.4H14Z" />
      </svg>
    )
  }
];

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
        <div className="mt-12 flex flex-col items-center gap-4 border-t border-brand-mist/15 pt-6 text-center text-sm text-brand-mist">
          <p>© 2026 المتميزون Distinguished. جميع الحقوق محفوظة.</p>
          <div className="flex items-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-mist/20 text-brand-mist transition hover:-translate-y-0.5 hover:border-brand-cyan hover:bg-brand-cyan hover:text-brand-navy"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
