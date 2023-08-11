"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const testimonials = [
  {
    name: "عبد الرحمن الخليفي",
    avatar: "ع",
    title: "مدير تكنولوجيا المعلومات",
    description: "لا غنى عن هذا التطبيق في عملي اليومي، إنه فعلاً ثورة في مجال الذكاء الصنعي!"
  },
  {
    name: "فاطمة الحسيني",
    avatar: "ف",
    title: "رئيسة قسم البحث والتطوير",
    description: "منصة رائعة لتوليد الصور باستخدام النصوص، أنا معجبة جدًا بإمكاناتها!"
  },
  {
    name: "محمد سليمان",
    avatar: "م",
    title: "نائب الرئيس لشؤون الهندسة",
    description: "هذا التطبيق قد غير طريقة عملنا، فهو سريع وفعال ويوفر نتائج مدهشة!"
  },
  {
    name: "ليلى عبد الرحيم",
    avatar: "ل",
    title: "مديرة تسويق",
    description: "الاشتراك في النسخة المميزة من هذا التطبيق كان استثمارًا رائعًا، أنصح به بشدة!"
  }
];

export const LandingContent = () => {
  return (
    <div className="px-10 pb-20">
      <h2 className="text-center text-4xl text-white font-extrabold mb-10">الشهادات - التوصيات</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {testimonials.map((item) => (
          <Card key={item.description} className="bg-[#2a1939] border-none text-white">
            <CardHeader>
              <CardTitle className="flex items-center gap-x-2">
                <div>
                  <p className="text-lg">{item.name}</p>
                  <p className="text-zinc-400 text-sm">{item.title}</p>
                </div>
              </CardTitle>
              <CardContent className="pt-4 px-0">
                {item.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}