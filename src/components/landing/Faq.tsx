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
    a: "Pro ve Elite paketlerimizde dilediğiniz kadar hesap ekleyebilir ve tek tıkla hesaplar arasında geçiş yapabilirsiniz.",
  },
  {
    q: "Ödeme altyapısı güvenli mi?",
    a: "Ödemeleriniz BDDK onaylı güvenli ödeme geçitleri aracılığıyla 256-bit SSL korumasıyla yasal olarak faturalandırılır.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 border-b border-[#23272C]">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionTitle eyebrow="SSS" title={<>Sıkça sorulan sorular.</>} />

        <div className="mt-12 border-t border-[#23272C]">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="border-b border-[#23272C]">
                <button
                  className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="font-display text-[15px] font-medium group-hover:text-[#FF7E36] transition-colors">{it.q}</span>
                  <span className={`grid h-6 w-6 place-items-center rounded-sm border border-[#23272C] ${isOpen ? "bg-[#FF7E36] border-[#FF7E36] text-[#0B0C0E]" : "text-muted-foreground"}`}>
                    {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                  </span>
                </button>
                <div
                  className="grid transition-all duration-200 ease-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
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
