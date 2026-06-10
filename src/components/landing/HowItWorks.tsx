import { Download, FileText, Rocket } from "lucide-react";
import { SectionTitle } from "./Simulator";

const steps = [
  { icon: Download, title: "Uygulamayı İndirin", desc: "Windows uyumlu masaüstü uygulamasını kurun ve Dolap hesabınızı OTP korumasıyla güvenle bağlayın." },
  { icon: FileText, title: "Şablonları Belirleyin", desc: "Ürün bilgilerini şablonlara kaydederek her yüklemede zaman kazanın." },
  { icon: Rocket, title: "Otomasyonu Başlatın", desc: "Süreleri ayarlayın, başlat butonuna basın ve satışların keyfini çıkarın." },
];

export function HowItWorks() {
  return (
    <section id="how" className="relative py-24 border-b border-[#23272C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Nasıl Çalışır?"
          title={<>Üç adımda otomasyon.</>}
          subtitle="Birkaç dakikada kurun, dakikalar içinde otomatik satışa başlayın."
        />

        <div className="mt-14 grid md:grid-cols-3 border-l border-t border-[#23272C]">
          {steps.map((s, i) => (
            <div key={s.title} className="p-8 border-r border-b border-[#23272C] bg-[#0B0C0E]">
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-md border border-[#23272C] bg-[#141619]">
                  <s.icon className="h-[18px] w-[18px] text-[#FF7E36]" />
                </div>
                <span className="font-display text-3xl font-semibold text-[#23272C]">0{i + 1}</span>
              </div>
              <h3 className="mt-6 font-display text-base font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
