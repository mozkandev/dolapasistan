import { useState } from "react";
import { Check } from "lucide-react";
import { SectionTitle } from "./Simulator";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "Yeni başlayanlar için.",
    cta: "Ücretsiz Başla",
    features: ["Ayda 3 ürün yükleme", "Tek hesap desteği", "Temel form özellikleri"],
  },
  {
    name: "Pro",
    monthly: 199,
    yearly: Math.round(199 * 10),
    desc: "Profesyonel satıcılar için.",
    cta: "Hemen Satın Al",
    popular: true,
    features: [
      "Sınırsız ürün yükleme",
      "Çoklu hesap desteği",
      "Akıllı gecikme & mola",
      "Fotoğraf sıralama karıştırma",
      "Başlık & açıklama varyasyonları",
      "Öncelikli destek",
    ],
  },
  {
    name: "Elite",
    monthly: 399,
    yearly: Math.round(399 * 10),
    desc: "Kurumsal ve ajanslar için.",
    cta: "Bizimle İletişime Geçin",
    features: [
      "Pro özelliklerin tamamı",
      "Zamanlanmış yüklemeler",
      "AI destekli açıklama üretici",
      "Özel proxy desteği",
      "7/24 canlı destek",
    ],
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="relative py-24 border-b border-[#23272C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Fiyatlandırma"
          title={<>Size uygun bir plan.</>}
          subtitle="İstediğiniz zaman iptal edebilirsiniz. Yıllık planda 2 ay hediye."
        />

        <div className="mt-8 flex justify-center">
          <div className="inline-flex p-0.5 rounded-md text-[13px] border border-[#23272C] bg-[#0B0C0E]">
            {[
              { id: false, label: "Aylık" },
              { id: true, label: "Yıllık (2 Ay Hediye)" },
            ].map((opt) => (
              <button
                key={String(opt.id)}
                onClick={() => setYearly(opt.id)}
                className={`rounded-[5px] px-4 py-1.5 transition-colors font-medium ${
                  yearly === opt.id ? "bg-[#FF7E36] text-[#0B0C0E]" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-0 border-l border-t border-[#23272C]">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative p-7 sm:p-8 flex flex-col border-r border-b border-[#23272C] bg-[#0B0C0E] ${
                  p.popular ? "bg-[#141619]" : ""
                }`}
              >
                {p.popular && (
                  <div className="absolute top-0 right-0 inline-flex items-center px-2 py-0.5 text-[10px] font-mono uppercase tracking-wider font-semibold bg-[#FF7E36] text-[#0B0C0E]">
                    Popüler
                  </div>
                )}
                <div>
                  <div className="font-display text-base font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
                <div className="mt-6 flex items-end gap-1.5">
                  <div className="font-display text-4xl font-semibold tracking-tight">{price}</div>
                  <div className="text-sm text-muted-foreground pb-1.5">TL / {yearly ? "yıl" : "ay"}</div>
                </div>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check className="h-4 w-4 text-[#FF7E36] mt-0.5 shrink-0" strokeWidth={2.5} />
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-md py-2.5 text-sm font-semibold transition-colors ${
                    p.popular ? "btn-dolap btn-dolap-hover" : "btn-ghost btn-ghost-hover"
                  }`}
                >
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
