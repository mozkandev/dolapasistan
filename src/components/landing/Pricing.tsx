import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
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
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Fiyatlandırma"
          title={<>Size <span className="text-gradient-violet">uygun</span> bir plan</>}
          subtitle="İstediğiniz zaman iptal edebilirsiniz. Yıllık planda 2 ay hediye."
        />

        <div className="mt-8 flex justify-center">
          <div className="glass inline-flex p-1 rounded-full text-sm">
            {[
              { id: false, label: "Aylık" },
              { id: true, label: "Yıllık (2 Ay Hediye)" },
            ].map((opt) => (
              <button
                key={String(opt.id)}
                onClick={() => setYearly(opt.id)}
                className={`rounded-full px-4 py-1.5 transition-all ${
                  yearly === opt.id ? "text-foreground" : "text-muted-foreground"
                }`}
                style={
                  yearly === opt.id
                    ? { background: "linear-gradient(135deg,#6C5CE7,#4834D4)", boxShadow: "0 8px 24px -10px rgba(108,92,231,0.7)" }
                    : undefined
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-5 items-stretch">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                  p.popular ? "surface-card border-violet-500/30" : "surface-card"
                }`}
                style={p.popular ? { boxShadow: "0 30px 80px -30px rgba(108,92,231,0.6), inset 0 0 0 1px rgba(108,92,231,0.35)" } : undefined}
              >
                {p.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-white"
                    style={{ background: "linear-gradient(135deg,#6C5CE7,#4834D4)", boxShadow: "0 10px 24px -10px rgba(108,92,231,0.7)" }}
                  >
                    <Sparkles className="h-3 w-3" /> Popüler
                  </div>
                )}
                <div>
                  <div className="font-display text-lg font-semibold">{p.name}</div>
                  <div className="text-sm text-muted-foreground mt-1">{p.desc}</div>
                </div>
                <div className="mt-6 flex items-end gap-1">
                  <div className="font-display text-4xl font-semibold">{price}</div>
                  <div className="text-sm text-muted-foreground pb-1">TL / {yearly ? "yıl" : "ay"}</div>
                </div>
                <ul className="mt-6 space-y-3 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span
                        className="mt-0.5 grid h-4 w-4 place-items-center rounded-full"
                        style={{ background: "linear-gradient(135deg,#00B894,#55EFC4)" }}
                      >
                        <Check className="h-3 w-3 text-[#052e25]" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full rounded-xl py-3 text-sm font-semibold transition-all ${
                    p.popular
                      ? "btn-violet btn-violet-hover"
                      : "glass hover:bg-white/[0.06]"
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
