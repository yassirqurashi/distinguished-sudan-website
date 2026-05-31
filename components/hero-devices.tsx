import Image from "next/image";

export function HeroDevices() {
  return (
    <div className="relative mx-auto w-full max-w-2xl lg:-ml-4">
      <div className="absolute inset-8 bg-brand-cyan/20 blur-3xl" />
      <Image
        src="/hero-real-devices-with-screens.png"
        alt="لابتوب يعرض نظام ERP عربي وهاتف يعرض تطبيقاً طبياً عربياً"
        width={1346}
        height={761}
        priority
        className="relative z-10 h-auto w-full object-contain drop-shadow-[0_34px_70px_rgba(0,0,0,0.38)]"
      />
    </div>
  );
}
