import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { SectionTitle } from "./Simulator";

const TELEGRAM_URL = "https://t.me/dolapasistan";
const DOWNLOAD_URL = "/app.exe";

const plans = [
  {
    name: "Free",
    monthly: 0,
    yearly: 0,
    desc: "Paneli denemek için.",
    cta: "Ücretsiz Başla",
    features: [
      "10 ürün / ay",
      "10 AI kredisi / ay",
      "Tek hesap • tek cihaz",
      "Manuel ürün yükleme",
    ],
  },
  {
    name: "Starter",
    monthly: 149,
    yearly: 1490,
    desc: "Hobi satıcı için ilk yükseltme.",
    cta: "Hemen Satın Al",
    features: [
      "100 ürün / ay",
      "100 AI kredisi / ay",
      "Zamanlanmış yükleme",
      "Akıllı gecikme (rastgele aralık)",
    ],
  },
  {
    name: "Pro",
    monthly: 399,
    yearly: 3990,
    desc: "Profesyonel satıcı & reseller.",
    cta: "Hemen Satın Al",
    popular: true,
    features: [
      "1.000 ürün / ay",
      "2 hesap • çoklu hesap desteği",
      "Otomatik relist & teklif",
      "Pazarlık botu + mesaj şablonları",
      "Rakip analizi & gelişmiş raporlar",
    ],
  },
  {
    name: "Business",
    monthly: 899,
    yearly: 8990,
    desc: "Butik & ekip operasyonları.",
    cta: "Hemen Satın Al",
    features: [
      "5.000 ürün / ay",
      "5 hesap • 5 cihaz",
      "Çapraz listeleme & stok senkronu",
      "Ekip üyeleri",
      "Tüm özellikler açık",
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
                  yearly === opt.id ? "text-[#1a1205]" : "text-muted-foreground"
                }`}
                style={
                  yearly === opt.id
                    ? { background: "linear-gradient(135deg,#d2ae6c,#ae8a49)", boxShadow: "0 8px 24px -10px rgba(210,174,108,0.7)" }
                    : undefined
                }
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {plans.map((p) => {
            const price = yearly ? p.yearly : p.monthly;
            return (
              <div
                key={p.name}
                className={`relative rounded-2xl p-6 sm:p-8 flex flex-col ${
                  p.popular ? "surface-card border-amber-500/30" : "surface-card"
                }`}
                style={p.popular ? { boxShadow: "0 30px 80px -30px rgba(210,174,108,0.6), inset 0 0 0 1px rgba(210,174,108,0.35)" } : undefined}
              >
                {p.popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full px-3 py-1 text-[11px] font-semibold text-[#1a1205]"
                    style={{ background: "linear-gradient(135deg,#d2ae6c,#ae8a49)", boxShadow: "0 10px 24px -10px rgba(210,174,108,0.7)" }}
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
                        style={{ background: "linear-gradient(135deg,#45b889,#74d0a9)" }}
                      >
                        <Check className="h-3 w-3 text-[#052e25]" strokeWidth={3} />
                      </span>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>
                {p.monthly > 0 ? (
                  <a
                    href={TELEGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${
                      p.popular
                        ? "btn-violet btn-violet-hover"
                        : "glass hover:bg-white/[0.06]"
                    }`}
                  >
                    {p.cta}
                  </a>
                ) : (
                  <a
                    href={DOWNLOAD_URL}
                    download
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-xl py-3 text-sm font-semibold transition-all ${
                      p.popular
                        ? "btn-violet btn-violet-hover"
                        : "glass hover:bg-white/[0.06]"
                    }`}
                  >
                    {p.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
