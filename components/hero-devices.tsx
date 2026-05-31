import Image from "next/image";
import type { CSSProperties } from "react";

const erpStats = [
  { label: "المبيعات", value: "124,580 SDG", change: "+18%" },
  { label: "المخزون", value: "3,240 صنف", change: "92%" },
  { label: "الفواتير", value: "486", change: "+31%" },
  { label: "التحصيل", value: "78,900 SDG", change: "+12%" }
];

const erpRows = [
  ["فاتورة #1048", "شركة النيل", "مدفوعة"],
  ["طلب شراء #381", "المورد العام", "قيد المراجعة"],
  ["تحويل مخزون", "فرع بحري", "مكتمل"]
];

const foodCategories = [
  ["🍔", "برجر"],
  ["🍕", "بيتزا"],
  ["🍗", "مشاوي"],
  ["🥤", "مشروبات"]
];

const restaurants = [
  ["مطعم النيل", "25 د", "4.8"],
  ["بيتزا الخرطوم", "32 د", "4.6"],
  ["مشاوي أم درمان", "28 د", "4.7"]
];

const laptopScreenStyle: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "5.6%",
  left: "5.1%",
  width: "63.4%",
  height: "56.2%",
  overflow: "hidden",
  borderRadius: "0.72rem",
  color: "#ffffff",
  background:
    "radial-gradient(circle at 20% 18%, rgba(0, 200, 203, 0.16), transparent 30%), linear-gradient(145deg, #071a31 0%, #0B1020 100%)",
  boxShadow: "inset 0 0 0 1px rgba(226, 232, 240, 0.08)",
  clipPath: "polygon(2.6% 5.2%, 98.6% 0%, 96.7% 99%, 5.7% 95.8%)",
  transform: "rotate(-2.45deg)",
  transformOrigin: "center",
  fontSize: "clamp(3.9px, 0.44vw, 7px)"
};

const phoneScreenStyle: CSSProperties = {
  position: "absolute",
  zIndex: 2,
  top: "24.9%",
  left: "66.6%",
  width: "18.1%",
  height: "52.5%",
  overflow: "hidden",
  borderRadius: "1.55rem",
  color: "#ffffff",
  background:
    "radial-gradient(circle at 50% 0%, rgba(0, 200, 203, 0.18), transparent 30%), linear-gradient(160deg, #06162b 0%, #0B1020 100%)",
  boxShadow: "inset 0 0 0 1px rgba(226, 232, 240, 0.08)",
  transform: "rotate(7.1deg)",
  transformOrigin: "center",
  fontSize: "clamp(3.4px, 0.39vw, 6px)"
};

export function HeroDevices() {
  return (
    <div className="relative isolate mx-auto w-full max-w-3xl lg:-ml-8">
      <div className="absolute inset-8 bg-brand-cyan/20 blur-3xl" />
      <div className="relative overflow-visible sm:scale-110">
        <Image
          src="/hero-finance-food-cutout.png"
          alt="حاسوب محمول يعرض نظاماً مالياً وهاتف يعرض تطبيق توصيل طعام"
          width={1536}
          height={1024}
          priority
          className="h-auto w-full object-contain drop-shadow-[0_34px_70px_rgba(0,0,0,0.38)]"
        />

        <div style={laptopScreenStyle} dir="rtl">
          <div className="flex h-full" dir="ltr">
            <aside className="w-[17%] border-r border-white/10 bg-black/20 p-[2.4%]" dir="rtl">
              <p className="mb-[14%] text-[1.05em] font-extrabold text-brand-cyan">ERP</p>
              {["الرئيسية", "المبيعات", "المخزون", "الفواتير", "الموارد", "التقارير"].map((item, index) => (
                <div key={item} className={`mb-[9%] rounded-md px-[10%] py-[8%] text-[0.82em] font-bold ${index === 0 ? "bg-brand-cyan/18 text-brand-cyan" : "text-brand-mist/85"}`}>
                  {item}
                </div>
              ))}
            </aside>

            <div className="flex-1 p-[2.8%]" dir="rtl">
              <div className="mb-[2.6%] flex items-center justify-between">
                <div>
                  <p className="text-[0.82em] font-bold text-brand-cyan">نظام تشغيل الشركات</p>
                  <h3 className="text-[1.35em] font-extrabold text-white">لوحة ERP الموحدة</h3>
                </div>
                <span className="rounded-full bg-brand-cyan/15 px-[3%] py-[1.2%] text-[0.76em] font-extrabold text-brand-cyan">مايو 2026</span>
              </div>

              <div className="grid grid-cols-4 gap-[1.8%]">
                {erpStats.map((stat) => (
                  <div key={stat.label} className="rounded-lg border border-white/10 bg-white/[0.055] p-[7%]">
                    <p className="text-[0.74em] font-bold text-brand-mist">{stat.label}</p>
                    <p className="mt-[5%] text-[1.08em] font-extrabold text-white">{stat.value}</p>
                    <p className="mt-[4%] text-[0.72em] font-extrabold text-brand-cyan">{stat.change}</p>
                  </div>
                ))}
              </div>

              <div className="mt-[2.5%] grid grid-cols-[1.15fr_0.85fr] gap-[2%]">
                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-[3%]">
                  <div className="mb-[3%] flex items-center justify-between">
                    <span className="text-[0.92em] font-extrabold text-white">المبيعات الشهرية</span>
                    <span className="text-[0.7em] font-bold text-brand-cyan">SDG</span>
                  </div>
                  <div className="flex h-[7.6em] items-end gap-[1.2%]">
                    {[34, 58, 44, 70, 52, 78, 61, 92, 76, 85, 68, 96].map((height, index) => (
                      <span key={index} className="flex-1 rounded-t-sm bg-brand-cyan/80" style={{ height: `${height}%` }} />
                    ))}
                  </div>
                </div>

                <div className="rounded-lg border border-white/10 bg-white/[0.045] p-[3%]">
                  <span className="text-[0.92em] font-extrabold text-white">حالة المخزون</span>
                  {["مواد خام", "منتجات جاهزة", "حد إعادة الطلب"].map((item, index) => (
                    <div key={item} className="mt-[7%]">
                      <div className="mb-[2%] flex justify-between text-[0.72em] font-bold text-brand-mist">
                        <span>{item}</span>
                        <span>{[82, 64, 28][index]}%</span>
                      </div>
                      <div className="h-[0.45em] rounded-full bg-white/10">
                        <div className="h-full rounded-full bg-brand-cyan" style={{ width: `${[82, 64, 28][index]}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-[2.5%] rounded-lg border border-white/10 bg-white/[0.045] p-[2.7%]">
                <div className="grid grid-cols-[0.9fr_1fr_0.8fr] gap-2 text-[0.72em] font-bold text-brand-mist">
                  <span>العملية</span>
                  <span>الجهة</span>
                  <span>الحالة</span>
                </div>
                {erpRows.map(([type, party, status]) => (
                  <div key={type} className="grid grid-cols-[0.9fr_1fr_0.8fr] gap-2 border-t border-white/10 py-[1.5%] text-[0.76em] font-bold text-white">
                    <span>{type}</span>
                    <span>{party}</span>
                    <span className="text-brand-cyan">{status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={phoneScreenStyle} dir="rtl">
          <div className="h-full p-[8%] pt-[15%]">
            <div className="mb-[8%] flex items-start justify-between">
              <div>
                <p className="text-[0.82em] font-bold text-brand-mist">التوصيل إلى</p>
                <h3 className="text-[1.12em] font-extrabold text-white">الخرطوم، شارع النيل</h3>
              </div>
              <span className="grid size-[2.2em] place-items-center rounded-full bg-brand-cyan text-[0.9em] text-brand-navy">⌕</span>
            </div>

            <div className="mb-[8%] rounded-full border border-white/10 bg-white/[0.07] px-[8%] py-[4%] text-[0.88em] font-bold text-brand-mist">
              ابحث عن مطعم أو وجبة
            </div>

            <div className="grid grid-cols-4 gap-[5%]">
              {foodCategories.map(([icon, label]) => (
                <div key={label} className="rounded-lg border border-white/10 bg-white/[0.06] py-[10%] text-center">
                  <span className="block text-[1.55em] leading-none">{icon}</span>
                  <span className="mt-[12%] block text-[0.75em] font-bold text-white">{label}</span>
                </div>
              ))}
            </div>

            <div className="mt-[9%]">
              <div className="mb-[5%] flex items-center justify-between">
                <h4 className="text-[1em] font-extrabold text-white">مطاعم قريبة</h4>
                <span className="text-[0.72em] font-bold text-brand-cyan">عرض الكل</span>
              </div>
              <div className="space-y-[4%]">
                {restaurants.map(([name, time, rate], index) => (
                  <div key={name} className="flex items-center gap-[5%] rounded-lg border border-white/10 bg-white/[0.06] p-[4%]">
                    <div className="grid size-[3.4em] shrink-0 place-items-center rounded-lg bg-brand-cyan/15 text-[1.7em]">
                      {["🍲", "🍕", "🍖"][index]}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[0.9em] font-extrabold text-white">{name}</p>
                      <p className="mt-[2%] text-[0.72em] font-bold text-brand-mist">{time} • ⭐ {rate}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-[8%] rounded-lg border border-brand-cyan/25 bg-brand-cyan/10 p-[5%]">
              <div className="flex items-center justify-between">
                <span className="text-[0.86em] font-extrabold text-white">طلبك في الطريق</span>
                <span className="text-[0.72em] font-bold text-brand-cyan">18 دقيقة</span>
              </div>
              <div className="mt-[8%] h-[0.5em] rounded-full bg-white/10">
                <div className="h-full w-2/3 rounded-full bg-brand-cyan" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
