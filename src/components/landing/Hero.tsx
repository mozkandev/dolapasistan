import { Download, Sparkles, Star, ArrowRight, Image as ImageIcon, Tag, Palette, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 sm:pt-40">
      {/* background effects */}
      <div className="absolute inset-0 bg-grid opacity-60" aria-hidden />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(108,92,231,0.45), transparent 70%)", filter: "blur(60px)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute top-40 right-0 h-[300px] w-[400px] rounded-full"
        style={{ background: "radial-gradient(closest-side, rgba(0,184,148,0.35), transparent 70%)", filter: "blur(100px)" }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="max-w-xl">
            <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
              <Sparkles className="h-3.5 w-3.5 text-[#B8AEFF]" />
              🔥 Yapay Zeka Destekli Yeni Nesil Dolap Otomasyonu
            </div>

            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
              Dolap'ta Satışlarınızı{" "}
              <span className="text-gradient-violet">Otomatize</span> Edin, Ürünlerinizi{" "}
              <span className="text-gradient-emerald">Zirvede</span> Tutun
            </h1>

            <p className="mt-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
              Saatlerce el ile ürün yüklemeye ve güncellemeye son. Akıllı gecikme algoritmalarıyla ban riski olmadan dükkanınızı 7/24 otomatik yönetin.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="btn-violet btn-violet-hover inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold">
                <Download className="h-4 w-4" /> Ücretsiz İndirin
              </a>
              <a href="#features" className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:bg-white/5 transition-colors">
                Özellikleri Keşfedin <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-3 text-sm text-muted-foreground">
              <div className="flex -space-x-2">
                {["#6C5CE7", "#00B894", "#F59E0B", "#EC4899"].map((c) => (
                  <div key={c} className="h-7 w-7 rounded-full border-2 border-[#090A0F]" style={{ background: c }} />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-amber-300" />)}
                  <span className="ml-1.5 text-foreground/80 font-medium">4.9/5</span>
                </div>
                <div className="text-xs">1,200+ aktif satıcı tarafından kullanılıyor</div>
              </div>
            </div>
          </div>

          {/* App mockup */}
          <div className="relative">
            <div
              className="relative mx-auto max-w-xl"
              style={{ transform: "perspective(1800px) rotateY(-14deg) rotateX(6deg)" }}
            >
              <div
                className="absolute -inset-10 rounded-[2rem] opacity-70"
                style={{ background: "radial-gradient(closest-side, rgba(108,92,231,0.5), transparent 70%)", filter: "blur(50px)" }}
                aria-hidden
              />
              <div className="surface-card relative rounded-2xl overflow-hidden shadow-2xl">
                {/* titlebar */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-red-400/80" />
                    <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="text-xs text-muted-foreground">Dolap Asistan • v2.4.1</span>
                  <div className="w-12" />
                </div>
                <div className="grid grid-cols-[180px_1fr]">
                  {/* sidebar */}
                  <div className="border-r border-white/5 p-3 space-y-1 text-xs">
                    {["Ürünler", "Otomasyon", "Kuyruk", "Raporlar", "Ayarlar"].map((s, i) => (
                      <div key={s} className={`rounded-lg px-3 py-2 ${i === 1 ? "bg-white/5 text-foreground" : "text-muted-foreground"}`}>
                        {s}
                      </div>
                    ))}
                  </div>
                  {/* main */}
                  <div className="p-4 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display text-sm font-semibold">Yeni Ürün</div>
                      <span className="text-[10px] rounded-full px-2 py-0.5 bg-emerald-400/15 text-emerald-300 border border-emerald-400/30">Çevrimiçi</span>
                    </div>
                    <div className="space-y-2">
                      <Field icon={<Tag className="h-3.5 w-3.5" />} label="Başlık" value="Zara Mom Jean Pantolon" />
                      <Field icon={<Tag className="h-3.5 w-3.5" />} label="Fiyat" value="450 TL" />
                      <div className="grid grid-cols-2 gap-2">
                        <Field icon={<Palette className="h-3.5 w-3.5" />} label="Renk" value="Mavi" />
                        <Field icon={<ImageIcon className="h-3.5 w-3.5" />} label="Foto" value="4 görsel" />
                      </div>
                    </div>
                    <div className="rounded-xl p-3 border border-white/5 bg-white/[0.02]">
                      <div className="flex items-center gap-2 text-xs">
                        <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                        <span>Otomasyon hazır — şablon kaydedildi</span>
                      </div>
                      <div className="mt-3 h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
                        <div className="h-full w-3/4 rounded-full" style={{ background: "linear-gradient(90deg,#6C5CE7,#00B894)" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating mini card */}
              <div className="surface-card absolute -bottom-8 -left-8 w-56 rounded-2xl p-3 shadow-xl animate-float hidden sm:block">
                <div className="flex items-center gap-2">
                  <div className="h-9 w-9 rounded-lg" style={{ background: "linear-gradient(135deg,#00B894,#55EFC4)" }} />
                  <div>
                    <div className="text-xs font-medium">Bugün</div>
                    <div className="text-lg font-display font-semibold text-gradient-emerald">+38 satış</div>
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
    <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
      <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">{icon} {label}</div>
      <div className="text-xs mt-0.5">{value}</div>
    </div>
  );
}
