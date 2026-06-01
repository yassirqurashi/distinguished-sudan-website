import { Bolt, Bot, Building2, Compass, Globe2, MessageCircle, Rocket, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/contact", label: "تواصل معنا" }
];

export const services = [
  { title: "تطوير تطبيقات الهاتف المحمول", description: "تطبيقات iOS وAndroid حديثة وسريعة ومصممة لتجربة استخدام واضحة.", icon: Smartphone, visual: "mobile", href: "/services/mobile-app-development" },
  { title: "أنظمة ERP", description: "أنظمة تشغيل داخلية تربط المبيعات والمخزون والموارد والمالية في مكان واحد.", icon: Building2, visual: "erp", href: "/services/erp-systems" },
  { title: "وكلاء الذكاء الاصطناعي والأتمتة", description: "وكلاء ذكيون وسير عمل آلي يقللان الأعمال المتكررة ويرفعان سرعة التنفيذ.", icon: Bot, visual: "ai", href: "/services/ai-agents-automation" },
  { title: "المواقع الإلكترونية", description: "مواقع تعريفية وتجارية أنيقة، متجاوبة، وسهلة النشر على Vercel.", icon: Globe2, visual: "web", href: "/services/websites" },
  { title: "WhatsApp Business API", description: "حلول محادثات وتنبيهات وربط مبيعات ودعم عبر WhatsApp Business API.", icon: MessageCircle, visual: "whatsapp", href: "/services/whatsapp-business-api" },
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
  }
];
