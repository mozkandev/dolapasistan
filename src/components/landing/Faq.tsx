import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionTitle } from "./Simulator";

const items = [
  {
    q: "Dolap hesabım askıya alınır mı?",
    a: "Dolap Asistan resmi mobil uygulamayı taklit ettiği ve insan davranışına benzer rastgele gecikmeler kullandığı için kurallara uyduğunuz sürece son derece güvenlidir.",
  },
  {
    q: "Aynı anda kaç hesap yönetebilirim?",
    a: "Pro ve Business paketlerimizde birden fazla hesap ekleyebilir ve tek tıkla hesaplar arasında geçiş yapabilirsiniz.",
  },
  {
    q: "Uygulama hangi işletim sistemlerinde çalışır?",
    a: "Dolap Asistan şu anda Windows 10 ve Windows 11 ile tam uyumlu çalışmaktadır. Kurulumu birkaç dakika sürer ve teknik bilgi gerektirmez.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="SSS"
          title={<>Sıkça sorulan <span className="text-gradient-violet">sorular</span></>}
        />

        <div className="mt-12 space-y-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="surface-card rounded-2xl overflow-hidden">
                <button
                  className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-base font-medium">{it.q}</span>
                  <span
                    className="grid h-8 w-8 place-items-center rounded-full transition-transform"
                    style={
                      isOpen
                        ? { background: "linear-gradient(135deg,#d2ae6c,#ae8a49)" }
                        : { background: "rgba(255,255,255,0.05)" }
                    }
                  >
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-300 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
