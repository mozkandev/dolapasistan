import { Download, Star, ArrowRight, Image as ImageIcon, Tag, Palette, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 border-b border-[#23272C]">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-md border border-[#23272C] bg-[#141619] px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF7E36]" />
              Yapay Zeka Destekli Dolap Otomasyonu
            </div>

            <h1 className="mt-5 font-display text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.05] tracking-tight">
              Dolap'ta satışlarınızı <span className="text-dolap">otomatize</span> edin, ürünlerinizi zirvede tutun.
            </h1>

            <p className="mt-5 text-[15px] sm:text-base text-muted-foreground leading-relaxed max-w-lg">
              Saatlerce el ile ürün yüklemeye son. Akıllı gecikme algoritmalarıyla ban riski olmadan dükkanınızı 7/24 otomatik yönetin.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-2.5">
              <a href="#pricing" className="btn-dolap btn-dolap-hover inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-semibold">
                <Download className="h-4 w-4" /> Ücretsiz İndirin
              </a>
              <a href="#features" className="btn-ghost btn-ghost-hover inline-flex items-center gap-1.5 rounded-md px-4 py-2.5 text-sm font-medium">
                Özellikleri Keşfedin <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["#3F4248", "#54585F", "#2A2D33", "#FF7E36"].map((c) => (
                  <div key={c} className="h-7 w-7 rounded-full border-2 border-[#0B0C0E]" style={{ background: c }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#FF7E36]">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-[#FF7E36]" />)}
                  <span className="ml-1.5 text-foreground/80 font-medium">4.9/5</span>
                </div>
                <div className="text-xs">1,200+ aktif satıcı tarafından kullanılıyor</div>
              </div>
            </div>
          </div>

          {/* App mockup */}
          <div className="relative">
            <div className="relative mx-auto max-w-xl">
              <div className="surface-card relative rounded-lg overflow-hidden">
                {/* titlebar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#23272C]">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3F4248]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3F4248]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#3F4248]" />
                  </div>
                  <span className="text-[11px] text-muted-foreground font-mono">dolap-asistan v2.4.1</span>
                  <div className="w-12" />
                </div>
                <div className="grid grid-cols-[160px_1fr]">
                  {/* sidebar */}
                  <div className="border-r border-[#23272C] p-2 space-y-0.5 text-[12px]">
                    {["Ürünler", "Otomasyon", "Kuyruk", "Raporlar", "Ayarlar"].map((s, i) => (
                      <div
                        key={s}
                        className={`rounded-md px-2.5 py-1.5 ${
                          i === 1 ? "bg-[#1B1D21] text-foreground border-l-2 border-[#FF7E36] pl-2" : "text-muted-foreground"
                        }`}
                      >
                        {s}
                      </div>
                    ))}
                  </div>
                  {/* main */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display text-sm font-semibold">Yeni Ürün</div>
                      <span className="text-[10px] rounded-sm px-1.5 py-0.5 bg-[#1B1D21] text-[#FF7E36] border border-[#23272C] font-mono">CANLI</span>
                    </div>
                    <div className="space-y-2">
                      <Field icon={<Tag className="h-3.5 w-3.5" />} label="Başlık" value="Zara Mom Jean Pantolon" />
                      <Field icon={<Tag className="h-3.5 w-3.5" />} label="Fiyat" value="450 TL" />
                      <div className="grid grid-cols-2 gap-2">
                        <Field icon={<Palette className="h-3.5 w-3.5" />} label="Renk" value="Mavi" />
                        <Field icon={<ImageIcon className="h-3.5 w-3.5" />} label="Foto" value="4 görsel" />
                      </div>
                    </div>
                    <div className="rounded-md p-3 border border-[#23272C] bg-[#0B0C0E]">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="h-4 w-4 text-[#FF7E36]" />
                        <span>Otomasyon hazır — şablon kaydedildi</span>
                      </div>
                      <div className="mt-3 h-1 w-full bg-[#1B1D21] overflow-hidden">
                        <div className="h-full w-3/4 bg-[#FF7E36]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating mini card */}
              <div className="surface-card absolute -bottom-6 -left-6 w-52 rounded-md p-3 hidden sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="h-8 w-8 rounded-md bg-[#FF7E36] grid place-items-center text-[#0B0C0E] text-xs font-bold">+</div>
                  <div>
                    <div className="text-[11px] text-muted-foreground">Bugün</div>
                    <div className="text-lg font-display font-semibold">+38 satış</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="rounded-md border border-[#23272C] bg-[#0B0C0E] px-3 py-2">
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground uppercase tracking-wider">{icon} {label}</div>
      <div className="text-xs mt-1 text-foreground/90">{value}</div>
    </div>
  );
}
