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
    <section className="relative py-24 border-b border-[#23272C]" id="simulator">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Canlı Demo"
          title={<>Uygulamayı indirmeden deneyimleyin.</>}
          subtitle="Aşağıdaki sekmelerle Dolap Asistan'ın nasıl çalıştığını anında simüle edin."
        />

        <div className="relative mt-12">
          <div className="surface-card relative rounded-lg overflow-hidden">
            <div className="grid lg:grid-cols-[240px_1fr]">
              {/* tabs */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#23272C] p-2 lg:p-3 flex lg:flex-col gap-1 overflow-x-auto">
                {tabs.map((t) => {
                  const isActive = active === t.id;
                  return (
                    <button
                      key={t.id}
                      onClick={() => setActive(t.id)}
                      className={`shrink-0 lg:shrink rounded-md px-3 py-2.5 text-[13px] font-medium text-left transition-colors ${
                        isActive
                          ? "bg-[#1B1D21] text-foreground border-l-2 border-[#FF7E36] pl-[10px]"
                          : "text-muted-foreground hover:text-foreground hover:bg-[#1B1D21]/50"
                      }`}
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
  const [color, setColor] = useState("#3B4D8B");

  const swatches = ["#3B4D8B", "#0E7C66", "#B45309", "#9B2C2C", "#1F2937", "#E5E7EB", "#FF7E36"];

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-fade-in">
      <div>
        <h3 className="font-display text-lg font-semibold">Ürün Bilgileri</h3>
        <p className="text-sm text-muted-foreground mt-1">Şablonlarınızı saniyeler içinde oluşturun.</p>

        <div className="mt-5 space-y-3">
          <Input label="Başlık" value={title} onChange={setTitle} />
          <div className="grid grid-cols-2 gap-3">
            <Input label="Fiyat (TL)" value={price} onChange={setPrice} />
            <Input label="Marka" value="Zara" onChange={() => {}} />
          </div>
          <div>
            <label className="text-[11px] text-muted-foreground uppercase tracking-wider">Renk</label>
            <div className="mt-2 flex items-center gap-2 flex-wrap">
              {swatches.map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`h-7 w-7 rounded-sm border border-[#23272C] transition-all ${color === c ? "ring-1 ring-[#FF7E36] ring-offset-2 ring-offset-[#141619]" : ""}`}
                  style={{ background: c }}
                  aria-label={c}
                />
              ))}
            </div>
          </div>
          <button className="btn-dolap btn-dolap-hover w-full rounded-md py-2.5 text-sm font-semibold mt-2">
            Şablonu Kaydet
          </button>
        </div>
      </div>

      {/* Mobile preview */}
      <div className="flex items-start justify-center">
        <div className="relative w-[260px] rounded-xl border border-[#23272C] bg-[#0B0C0E] p-2.5">
          <div className="rounded-md overflow-hidden surface-card">
            <div
              className="h-44 w-full grid place-items-center"
              style={{ background: color }}
            >
              <ImagePlus className="h-9 w-9 text-white/70" />
            </div>
            <div className="p-3 space-y-1.5">
              <div className="text-sm font-medium line-clamp-2">{title || "Ürün başlığı"}</div>
              <div className="font-display text-base font-semibold text-dolap">{price} TL</div>
              <div className="flex items-center gap-1.5 pt-1">
                <span className="h-3 w-3 rounded-sm border border-[#23272C]" style={{ background: color }} />
                <span className="text-[11px] text-muted-foreground">Yeni gibi</span>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-2 h-1 w-12 rounded-full bg-[#23272C]" />
        </div>
      </div>
    </div>
  );
}

function Input({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <label className="text-[11px] text-muted-foreground uppercase tracking-wider">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-1.5 w-full rounded-md bg-[#0B0C0E] border border-[#23272C] px-3 py-2 text-sm outline-none focus:border-[#FF7E36] transition-colors"
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
        <h3 className="font-display text-lg font-semibold">Bot Ayarları</h3>
        <p className="text-sm text-muted-foreground mt-1">Hesabınızın güvenliği için insan davranışını taklit edin.</p>

        <div className="mt-5 space-y-2">
          <Setting icon={<Clock className="h-4 w-4" />} title="Akıllı Gecikme" value="30 – 120 sn" />
          <Setting icon={<Coffee className="h-4 w-4" />} title="Mola Sistemi" value="5 üründe bir 10 dk mola" />
          <Setting icon={<Hourglass className="h-4 w-4" />} title="Günlük Limit" value="Maks. 60 ürün / gün" />
        </div>

        <button
          onClick={() => {
            setRunning((v) => !v);
            if (running) setLogs([]);
          }}
          className={`mt-6 w-full rounded-md py-3 text-sm font-semibold transition-colors inline-flex items-center justify-center gap-2 ${
            running ? "btn-ghost btn-ghost-hover" : "btn-dolap btn-dolap-hover"
          }`}
        >
          {running ? (<><Pause className="h-4 w-4" /> Botu Durdur</>) : (<><Play className="h-4 w-4" /> Botu Başlat</>)}
        </button>
      </div>

      <div className="surface-card rounded-md overflow-hidden flex flex-col">
        <div className="flex items-center justify-between px-3 py-2 border-b border-[#23272C]">
          <div className="flex items-center gap-2 text-[11px] font-mono">
            <span className={`h-2 w-2 rounded-full ${running ? "bg-[#FF7E36]" : "bg-[#3F4248]"}`} />
            <span className="text-muted-foreground">canli_log.txt</span>
          </div>
          <span className="text-[10px] text-muted-foreground font-mono">{running ? "ÇALIŞIYOR" : "DURDU"}</span>
        </div>
        <div ref={logRef} className="p-3 text-[12px] font-mono space-y-1 h-[280px] overflow-y-auto bg-[#0B0C0E]">
          {logs.length === 0 && (
            <div className="text-muted-foreground/60">$ Bot başlatıldığında loglar burada görünecek...</div>
          )}
          {logs.map((l, i) => (
            <div key={i} className="flex gap-2">
              <span className="text-muted-foreground/60">{l.t}</span>
              <span className={l.ok ? "text-[#FF7E36]" : "text-foreground/85"}>{l.m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Setting({ icon, title, value }: { icon: React.ReactNode; title: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-md border border-[#23272C] bg-[#0B0C0E] px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <div className="text-muted-foreground">{icon}</div>
        <div className="text-sm">{title}</div>
      </div>
      <div className="text-xs text-muted-foreground font-mono">{value}</div>
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
          <h3 className="font-display text-lg font-semibold">Yükleme Kuyruğu</h3>
          <p className="text-sm text-muted-foreground mt-1">Tüm ürünleriniz tek bakışta.</p>
        </div>
        <div className="text-xs text-muted-foreground font-mono">2 başarılı · 1 yükleniyor · 3 bekliyor</div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between text-[11px] mb-2 font-mono">
          <span className="text-muted-foreground uppercase tracking-wider">Genel ilerleme</span>
          <span className="text-foreground">{progress}%</span>
        </div>
        <div className="h-1.5 w-full bg-[#1B1D21] overflow-hidden">
          <div className="h-full bg-[#FF7E36]" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 gap-2.5">
        {items.map((it) => (
          <div key={it.name} className="surface-card rounded-md p-2.5 flex items-center gap-3">
            <div className="h-10 w-10 rounded-sm bg-[#0B0C0E] border border-[#23272C] grid place-items-center">
              <ImagePlus className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-sm truncate">{it.name}</div>
              <div className="text-[11px] text-muted-foreground font-mono">stilevi_</div>
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
      <span className="inline-flex items-center gap-1 rounded-sm bg-[#0B0C0E] text-foreground border border-[#23272C] px-2 py-0.5 text-[10px] font-mono uppercase">
        <CheckCircle2 className="h-3 w-3" /> Başarılı
      </span>
    );
  if (status === "loading")
    return (
      <span className="inline-flex items-center gap-1 rounded-sm bg-[#FF7E36] text-[#0B0C0E] px-2 py-0.5 text-[10px] font-mono uppercase font-semibold">
        <Loader2 className="h-3 w-3 animate-spin" /> Yükleniyor
      </span>
    );
  return (
    <span className="inline-flex items-center gap-1 rounded-sm bg-[#0B0C0E] text-muted-foreground border border-[#23272C] px-2 py-0.5 text-[10px] font-mono uppercase">
      <Hourglass className="h-3 w-3" /> Bekliyor
    </span>
  );
}

export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto">
      {eyebrow && (
        <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#FF7E36] font-medium">
          <span className="h-px w-6 bg-[#FF7E36]" /> {eyebrow}
        </div>
      )}
      <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold tracking-tight leading-[1.1]">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
