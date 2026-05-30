import { Bot, Building2, Compass, Globe2, MessageCircle, Rocket, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";

export const navLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن الشركة" },
  { href: "/services", label: "الخدمات" },
  { href: "/portfolio", label: "الأعمال" },
  { href: "/contact", label: "تواصل معنا" }
];

export const services = [
  { title: "تطوير تطبيقات الجوال", description: "تطبيقات iOS وAndroid حديثة وسريعة ومصممة لتجربة استخدام واضحة.", icon: Smartphone },
  { title: "أنظمة ERP", description: "أنظمة تشغيل داخلية تربط المبيعات والمخزون والموارد والمالية في مكان واحد.", icon: Building2 },
  { title: "وكلاء الذكاء الاصطناعي والأتمتة", description: "وكلاء ذكيون وسير عمل آلي يقللان الأعمال المتكررة ويرفعان سرعة التنفيذ.", icon: Bot },
  { title: "المواقع الإلكترونية", description: "مواقع تعريفية وتجارية أنيقة، متجاوبة، وسهلة النشر على Vercel.", icon: Globe2 },
  { title: "WhatsApp Business API", description: "حلول محادثات وتنبيهات وربط مبيعات ودعم عبر WhatsApp Business API.", icon: MessageCircle },
  { title: "الاستشارات التقنية", description: "خارطة طريق تقنية تساعد الإدارة على اختيار الأنظمة والاستثمار بثقة.", icon: Compass }
];

export const reasons = [
  { title: "تفكير تجاري قبل التقنية", description: "نبدأ من أهداف الشركة والعمليات اليومية، ثم نبني التقنية التي تخدم النمو.", icon: Rocket },
  { title: "تصميم واضح وقابل للتوسع", description: "واجهات هادئة، بنية قابلة للتطوير، وتجربة مناسبة لفرق العمل والعملاء.", icon: Sparkles },
  { title: "تنفيذ موثوق", description: "نهتم بالأداء، الأمان، الاستجابة، وسهولة الصيانة.", icon: ShieldCheck },
  { title: "أتمتة ذكية", description: "نحوّل المهام المتكررة إلى تدفقات عمل أسرع وأكثر دقة.", icon: Zap }
];

export const projects = [
  { title: "منصة إدارة عمليات لشركة توزيع", category: "ERP", description: "لوحات تشغيل للمخزون والطلبات والمندوبين مع مؤشرات أداء تنفيذية." },
  { title: "تجربة جوال لخدمات ميدانية", category: "Mobile App", description: "تطبيق يساعد الفرق على استلام المهام وتحديث الحالات وتوثيق الزيارات." },
  { title: "وكيل ذكاء اصطناعي لخدمة العملاء", category: "AI Automation", description: "مساعد يفرز الاستفسارات ويرد على الأسئلة المتكررة ويحوّل الحالات المهمة." }
];
