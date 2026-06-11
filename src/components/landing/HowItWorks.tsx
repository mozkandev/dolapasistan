import { Download, FileText, Rocket } from "lucide-react";
import { SectionTitle } from "./Simulator";

const steps = [
  { icon: Download, title: "Uygulamayı İndirin", desc: "Windows uyumlu masaüstü uygulamasını kurun ve Dolap hesabınızı OTP korumasıyla güvenle bağlayın." },
  { icon: FileText, title: "Şablonları Belirleyin", desc: "Ürün bilgilerini şablonlara kaydederek her yüklemede zaman kazanın." },
  { icon: Rocket, title: "Otomasyonu Başlatın", desc: "Süreleri ayarlayın, başlat butonuna basın ve satışların keyfini çıkarın." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nasıl Çalışır?"
          title={<>3 adımda <span className="text-gradient-violet">otomasyon</span></>}
          subtitle="Birkaç dakikada kurun, dakikalar içinde otomatik satışa başlayın."
        />

        <div className="mt-14 grid md:grid-cols-3 gap-5 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
               style={{ background: "linear-gradient(90deg, transparent, rgba(210,174,108,0.6), rgba(69,184,137,0.6), transparent)" }} />
          {steps.map((s, i) => (
            <div key={s.title} className="surface-card relative rounded-2xl p-6 text-center">
              <div className="mx-auto relative grid h-14 w-14 place-items-center rounded-2xl"
                   style={{ background: "linear-gradient(135deg,#d2ae6c,#ae8a49)", boxShadow: "0 16px 40px -16px rgba(210,174,108,0.7)" }}>
                <s.icon className="h-6 w-6 text-[#1a1205]" />
                <span className="absolute -top-2 -right-2 h-6 w-6 rounded-full bg-[#0b1017] border border-white/10 text-[11px] grid place-items-center font-display font-semibold">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
