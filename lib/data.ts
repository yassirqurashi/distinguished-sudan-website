import { Bolt, Bot, Building2, Compass, Globe2, MessageCircle, Rocket, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/contact", label: "تواصل معنا" }
];

export const services = [
  { title: "تطوير تطبيقات الهاتف المحمول", description: "تطوير تطبيقات وفق أحدث المعايير باستخدام لغات برمجة متقدمة لتقديم أفضل تجربة للعملاء.", icon: Smartphone, visual: "mobile", href: "/services/mobile-app-development" },
  { title: "أنظمة ERP", description: "أفضل وحدات ERP مثل المبيعات، المالية، المخزون، المشتريات، وأي وحدات مخصصة يحتاجها عملك.", icon: Building2, visual: "erp", href: "/services/erp-systems" },
  { title: "وكلاء الذكاء الاصطناعي والأتمتة", description: "وكلاء ذكيون وسير عمل آلي يقللان الأعمال المتكررة ويرفعان سرعة التنفيذ.", icon: Bot, visual: "ai", href: "/services/ai-agents-automation" },
  { title: "المواقع الإلكترونية", description: "مواقع تعريفية وتجارية أنيقة وسريعة تساعد عملك على الظهور باحترافية وبناء حضور رقمي واضح.", icon: Globe2, visual: "web", href: "/services/websites" },
  { title: "WhatsApp Business API", description: "حملات WhatsApp رسمية بدون حظر، أتمتة الفواتير عبر WhatsApp، ووكلاء ذكاء اصطناعي يردون على عملائك.", icon: MessageCircle, visual: "whatsapp", href: "/services/whatsapp-business-api" },
  { title: "الاستشارات التقنية", description: "خارطة طريق تقنية تساعد الإدارة على اختيار الأنظمة والاستثمار بثقة.", icon: Compass, visual: "consulting", href: "/services/technical-consulting" }
] as const;

export const reasons = [
  { title: "تفكير تجاري قبل التقنية", description: "نبدأ من أهداف الشركة والعمليات اليومية، ثم نبني التقنية التي تخدم النمو.", icon: Rocket },
  { title: "تصميم واضح وقابل للتوسع", description: "واجهات هادئة، بنية قابلة للتطوير، وتجربة مناسبة لفرق العمل والعملاء.", icon: Sparkles },
  { title: "تنفيذ موثوق", description: "نهتم بالأداء، الأمان، الاستجابة، وسهولة الصيانة.", icon: ShieldCheck },
  { title: "أتمتة ذكية", description: "نحوّل المهام المتكررة إلى تدفقات عمل أسرع وأكثر دقة.", icon: Bolt }
];

export const projects = [
  {
    title: "تطبيق حاضرين",
    description: "تطبيق طوره فريقنا لعميل في السعودية لإدارة طلبات المغاسل والاستلام والتوصيل، غسيل السيارات المتنقل، تنظيف المكيفات، وتنظيف الكنب.",
    image: "/hadreen-services-app.png",
    href: "/portfolio/hadreen-services-app"
  },
  {
    title: "تطبيق سعّرها",
    description: "تطبيق ذكاء اصطناعي طوره فريقنا في السعودية يساعد المستخدم على تصوير أي غرض، التعرف عليه، ومعرفة لمحة عن متوسط سعره في السوق المحلي.",
    image: "/sarha-app.png",
    href: "/portfolio/sarha-app"
  },
  {
    title: "تطبيق مرتاد",
    description: "منصة مملوكة بالكامل لشركة المتميزون عمان، تجمع مكاتب تأجير السيارات في تطبيق واحد مع ERP لإدارة العمليات اليومية والأسطول.",
    image: "/mortad-app.png",
    href: "/portfolio/mortad-app"
  },
  {
    title: "تطبيق الفا قولد",
    description: "منصة تداول ذهب طورها فريقنا لعميل في الإمارات، تتيح شراء الذهب الحقيقي من متاجر معتمدة بأسعار عالمية محدثة على مدار الساعة.",
    image: "/alpha-gold-app.png",
    href: "/portfolio/alpha-gold-app"
  },
  {
    title: "تطبيق كلينيكال",
    description: "منصة طبية تربط المرضى بالأطباء والمستشفيات، وتدعم الاستشارات الافتراضية ومشاركة نتائج المختبر والوصفات الطبية.",
    image: "/clinical-app.png",
    href: "/portfolio/clinical-app"
  },
  {
    title: "Prime Trucks ERP",
    description: "نظام ERP متكامل طوره فريقنا لعميل في الإمارات، ويشمل وحدات رئيسية مثل المبيعات، المالية، المخزون، والمشتريات.",
    image: "/prime-trucks-erp.png",
    href: "/portfolio/prime-trucks-erp"
  },
  {
    title: "Housemaid Management ERP",
    description: "نظام ERP طوره فريقنا لعميل في عُمان لإدارة مكاتب استقدام العاملات من الإجراءات الخارجية وحتى الوصول، مع عقود وتنبيهات WhatsApp آلية.",
    image: "/housemaid-erp.png",
    href: "/portfolio/housemaid-management-erp"
  },
  {
    title: "موقع جانيكا للعطور",
    description: "موقع سوق إلكتروني طوره فريقنا لعميل في عُمان لعرض وبيع تشكيلة واسعة من العطور في عدة دول.",
    image: "/jankia-perfumes-website.png",
    href: "/portfolio/jankia-perfumes-website"
  }
];
