import { useEffect, useRef, useState } from "react";
import { Play, Pause, Clock, Coffee, CheckCircle2, Loader2, Hourglass, ImagePlus } from "lucide-react";

const tabs = [
  { id: "add", label: "1. Ürün Ekle" },
  { id: "bot", label: "2. Otomasyon Botu" },
  { id: "queue", label: "3. Yükleme Kuyruğu" },
] as const;

type TabId = typeof tabs[number]["id"];

export function Simulator() {
  const [active, setActive] = useState<TabId>("add");

  return (
    <section className="relative py-24" id="simulator">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Canlı Demo"
          title={<>Uygulamayı <span className="text-gradient-violet">İndirmeden Deneyimleyin</span></>}
          subtitle="Aşağıdaki sekmelerle Dolap Asistan'ın nasıl çalıştığını anında simüle edin."
        />

        <div className="relative mt-12">
          <div
            className="pointer-events-none absolute -top-20 left-1/2 h-72 w-[700px] -translate-x-1/2 rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(210,174,108,0.35), transparent 70%)", filter: "blur(80px)" }}
            aria-hidden
          />
          <div className="surface-card relative rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-[260px_1fr]">
              {/* tabs */}
              <div className="border-b lg:border-b-0 lg:border-r border-white/5 p-3 lg:p-4 flex lg:flex-col gap-2 overflow-x-auto">
                {tabs.map((t) => {
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      className={`shrink-0 lg:shrink rounded-xl px-4 py-3 text-sm font-medium text-left transition-all ${
                        isActive
                          ? "text-foreground"
                          : "text-muted-foreground hover:text-foreground hover:bg-white/[0.03]"
                      }`}
                      style={
                        isActive
                          ? { background: "linear-gradient(135deg, rgba(210,174,108,0.18), rgba(174,138,73,0.12))", boxShadow: "inset 0 0 0 1px rgba(210,174,108,0.35)" }
                          : undefined
                      }
                    >
                      {t.label}
                    </button>
                  );
                })}
              </div>

              <div className="p-5 sm:p-8 min-h-[460px]">
                {active === "add" && <TabAdd />}
                {active === "bot" && <TabBot />}
                {active === "queue" && <TabQueue />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TabAdd() {
  const [title, setTitle] = useState("Zara Mom Jean Pantolon");
  const [price, setPrice] = useState("450");
  const [color, setColor] = useState("#4F46E5");

  const swatches = ["#4F46E5", "#0EA5E9", "#10B981", "#F59E0B", "#EF4444", "#111827", "#F3F4F6"];

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      <div>
        <h3 className="font-display text-xl font-semibold">Ürün Bilgileri</h3>
        <p className="text-sm text-muted-foreground mt-1">Şablonlarınızı saniyeler içinde oluşturun.</p>

        <div className="mt-6 space-y-4">
          <Input label="Başlık" value={title} onChange={setTitle} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Fiyat (TL)" value={price} onChange={setPrice} />
            <Input label="Marka" value="Zara" onChange={() => {}} />
          </div>
          <div>
            <label className="text-xs text-muted-foreground">Renk</label>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              {swatches.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-8 w-8 rounded-full border transition-transform ${color === c ? "scale-110 ring-2 ring-offset-2 ring-offset-[#151d29] ring-[#d2ae6c]" : "border-white/10"}`}
                  style={{ background: c }}
                  aria-label={c}
                />
              ))}
            </div>
          </div>
          <button className="btn-violet btn-violet-hover w-full rounded-xl py-3 text-sm font-semibold mt-2">
            Şablonu Kaydet
          </button>
        </div>
      </div>

      {/* Mobile preview */}
      <div className="flex items-start justify-center">
        <div
          className="relative w-[270px] rounded-[2rem] border border-white/10 p-3"
          style={{ background: "linear-gradient(180deg,#0b1017,#151d29)", boxShadow: "0 30px 80px -30px rgba(210,174,108,0.5)" }}
        >
          <div className="rounded-[1.4rem] overflow-hidden surface-card">
            <div
              className="h-48 w-full grid place-items-center"
              style={{ background: `linear-gradient(135deg, ${color}, ${color}55)` }}
            >
              <ImagePlus className="h-10 w-10 text-white/70" />
            </div>
            <div className="p-3 space-y-1.5">
              <div className="text-sm font-medium line-clamp-2">{title || "Ürün başlığı"}</div>
              <div className="font-display text-gradient-emerald font-semibold">{price} TL</div>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="h-3 w-3 rounded-full border border-white/20" style={{ background: color }} />
                <span className="text-[11px] text-muted-foreground">Yeni gibi</span>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-white/20" />
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-xs text-muted-foreground">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-lg bg-white/[0.03] border border-white/10 px-3 py-2.5 text-sm outline-none focus:border-[#d2ae6c]/60 focus:ring-2 focus:ring-[#d2ae6c]/20 transition-all"
      />
    </div>
  );
}

function TabBot() {
  const [running, setRunning] = useState(false);
  const [logs, setLogs] = useState<{ t: string; m: string; ok?: boolean }[]>([]);
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!running) return;
    const samples = [
      "Ürün yükleniyor: Zara Mom Jean Pantolon",
      "Bekleniyor (54sn) — insan davranışı simülasyonu",
      "Ürün başarıyla yüklendi ✓",
      "Ürün yükleniyor: Nike Air Force 1",
      "Bekleniyor (87sn)",
      "Ürün başarıyla yüklendi ✓",
      "5 ürün tamamlandı — 10 dakika mola",
    ];
    let i = 0;
    const id = setInterval(() => {
      const msg = samples[i % samples.length];
      const now = new Date().toLocaleTimeString("tr-TR");
      setLogs((prev) => [...prev.slice(-12), { t: now, m: msg, ok: msg.includes("✓") }]);
      i++;
    }, 900);
    return () => clearInterval(id);
  }, [running]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [logs]);

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      <div>
        <h3 className="font-display text-xl font-semibold">Bot Ayarları</h3>
        <p className="text-sm text-muted-foreground mt-1">Hesabınızın güvenliği için insan davranışını taklit edin.</p>

        <div className="mt-6 space-y-3">
          <Setting icon={<Clock className="h-4 w-4 text-[#e4c991]" />} title="Akıllı Gecikme" value="30 – 120 sn" />
          <Setting icon={<Coffee className="h-4 w-4 text-emerald-300" />} title="Mola Sistemi" value="5 üründe bir 10 dk mola" />
          <Setting icon={<Hourglass className="h-4 w-4 text-amber-300" />} title="Günlük Limit" value="Maks. 60 ürün / gün" />
        </div>

        <button
          onClick={() => {
            setRunning((v) => !v);
            if (running) setLogs([]);
          }}
          className={`mt-6 w-full rounded-xl py-3.5 text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 ${
            running ? "bg-white/5 text-foreground border border-white/10" : "btn-emerald glow-emerald"
          }`}
        >
          {running ? (<><Pause className="h-4 w-4" /> Botu Durdur</>) : (<><Play className="h-4 w-4" /> Botu Başlat</>)}
        </button>
      </div>

      <div className="surface-card rounded-2xl overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/5">
          <div className="flex items-center gap-2 text-xs">
            <span className={`h-2 w-2 rounded-full ${running ? "bg-emerald-400 animate-pulse-glow" : "bg-white/30"}`} />
            <span className="text-muted-foreground">canlı_log.txt</span>
          </div>
          <span className="text-[10px] text-muted-foreground">{running ? "ÇALIŞIYOR" : "DURDURULDU"}</span>
        </div>
        <div ref={logRef} className="p-4 text-[12px] font-mono space-y-1.5 h-[280px] overflow-y-auto">
          {logs.length === 0 && (
            <div className="text-muted-foreground/70">Bot başlatıldığında loglar burada görünecek...</div>
          )}
          {logs.map((l, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-muted-foreground/60">{l.t}</span>
              <span className={l.ok ? "text-emerald-300" : "text-foreground/80"}>{l.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Setting({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-4 py-3">
      <div className="flex items-center gap-3">
        <div className="grid h-8 w-8 place-items-center rounded-lg bg-white/[0.04]">{icon}</div>
        <div className="text-sm">{title}</div>
      </div>
      <div className="text-xs text-muted-foreground">{value}</div>
    </div>
  );
}

function TabQueue() {
  const items = [
    { name: "Zara Mom Jean Pantolon", status: "ok" },
    { name: "Nike Air Force 1 — 38 Numara", status: "ok" },
    { name: "Mango Trençkot — Bej", status: "loading" },
    { name: "H&M Oversize T-shirt", status: "wait" },
    { name: "Levi's 501 Jean — Mavi", status: "wait" },
    { name: "Stradivarius Mini Etek", status: "wait" },
  ] as const;

  const progress = 68;

  return (
    <div className="animate-fade-in">
      <div className="flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-display text-xl font-semibold">Yükleme Kuyruğu</h3>
          <p className="text-sm text-muted-foreground mt-1">Tüm ürünleriniz tek bakışta.</p>
        </div>
        <div className="text-sm text-muted-foreground">2 başarılı • 1 yükleniyor • 3 bekliyor</div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-xs mb-2">
          <span className="text-muted-foreground">Genel ilerleme</span>
          <span className="font-display font-semibold text-gradient-emerald">{progress}%</span>
        </div>
        <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${progress}%`, background: "linear-gradient(90deg,#d2ae6c,#45b889)", boxShadow: "0 0 20px rgba(69,184,137,0.5)" }}
          />
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.name} className="surface-card rounded-xl p-3 flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-white/10 to-white/[0.02] grid place-items-center">
              <ImagePlus className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm truncate">{it.name}</div>
              <div className="text-[11px] text-muted-foreground">Dükkan: stilevi_</div>
            </div>
            <StatusBadge status={it.status} />
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: "ok" | "loading" | "wait" }) {
  if (status === "ok")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-400/15 text-emerald-300 border border-emerald-400/30 px-2 py-1 text-[11px]">
        <CheckCircle2 className="h-3 w-3" /> Başarılı
      </span>
    );
  if (status === "loading")
    return (
      <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 text-amber-200 border border-amber-400/30 px-2 py-1 text-[11px]">
        <Loader2 className="h-3 w-3 animate-spin" /> Yükleniyor
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/15 text-amber-200 border border-amber-400/30 px-2 py-1 text-[11px]">
      <Hourglass className="h-3 w-3" /> Bekliyor
    </span>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] uppercase tracking-wider text-muted-foreground">
          {eyebrow}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
