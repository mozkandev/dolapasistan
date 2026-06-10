import { ShieldCheck, Smartphone, Clock3, Lock } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="relative py-24 border-b border-[#23272C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="surface-card rounded-lg p-8 sm:p-12">
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-[#FF7E36] font-medium">
                <span className="h-px w-6 bg-[#FF7E36]" /> Anti-ban Mimari
              </div>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1]">
                Hesabınız güvende: <span className="text-dolap">Mobil API Protokolü</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                Dolap Asistan, Selenium veya Puppeteer gibi tespit edilmesi kolay tarayıcı otomasyonlarını kullanmaz.
                Dolap mobil uygulamasının resmi Android istek protokollerini taklit ederek işlem yapar.
                Akıllı gecikme ve mola sistemleriyle hesabınızın güvenliğini en üst düzeyde tutar.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-2">
                <Pill icon={<Smartphone className="h-4 w-4" />} text="Mobil API taklidi" />
                <Pill icon={<Clock3 className="h-4 w-4" />} text="İnsan benzeri gecikme" />
                <Pill icon={<Lock className="h-4 w-4" />} text="OTP ile giriş" />
              </div>
            </div>

            <div className="relative flex justify-center">
              <div className="relative h-44 w-44 grid place-items-center border border-[#23272C] rounded-md bg-[#0B0C0E]">
                <ShieldCheck className="h-20 w-20 text-[#FF7E36]" strokeWidth={1.5} />
                <span className="absolute -top-2 -right-2 text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 bg-[#FF7E36] text-[#0B0C0E] font-semibold rounded-sm">Aktif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="rounded-md border border-[#23272C] bg-[#0B0C0E] px-3 py-2.5 flex items-center gap-2 text-sm">
      <span className="text-[#FF7E36]">{icon}</span> {text}
    </div>
  );
}
