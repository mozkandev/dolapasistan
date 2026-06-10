import { ShieldCheck, Smartphone, Clock3, Lock } from "lucide-react";

export function Security() {
  return (
    <section id="security" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative surface-card rounded-3xl overflow-hidden p-8 sm:p-12">
          <div
            className="pointer-events-none absolute -top-32 -left-20 h-72 w-[500px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(0,184,148,0.35), transparent 70%)", filter: "blur(100px)" }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-[500px] rounded-full"
            style={{ background: "radial-gradient(closest-side, rgba(108,92,231,0.35), transparent 70%)", filter: "blur(100px)" }}
            aria-hidden
          />

          <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
            <div>
              <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-300" />
                Anti-ban Mimari
              </div>
              <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold tracking-tight">
                Hesabınız Güvende: <span className="text-gradient-emerald">Mobil API Protokolü</span>
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed max-w-xl">
                Dolap Asistan, Selenium veya Puppeteer gibi tespit edilmesi kolay tarayıcı otomasyonlarını kullanmaz.
                Dolap mobil uygulamasının resmi Android istek protokollerini taklit ederek işlem yapar.
                Akıllı gecikme ve mola sistemleriyle hesabınızın güvenliğini en üst düzeyde tutar.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-3">
                <Pill icon={<Smartphone className="h-4 w-4" />} text="Mobil API taklidi" />
                <Pill icon={<Clock3 className="h-4 w-4" />} text="İnsan benzeri gecikme" />
                <Pill icon={<Lock className="h-4 w-4" />} text="OTP ile güvenli giriş" />
              </div>
            </div>

            <div className="relative">
              <div className="relative mx-auto h-56 w-56">
                <div className="absolute inset-0 rounded-full" style={{ background: "radial-gradient(closest-side, rgba(0,184,148,0.5), transparent 70%)", filter: "blur(40px)" }} />
                <div
                  className="relative h-full w-full rounded-full grid place-items-center"
                  style={{ background: "linear-gradient(135deg,#00B894,#55EFC4)", boxShadow: "0 30px 80px -20px rgba(0,184,148,0.6)" }}
                >
                  <ShieldCheck className="h-24 w-24 text-[#052e25]" strokeWidth={2.2} />
                </div>
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
    <div className="glass rounded-xl px-3 py-2.5 flex items-center gap-2 text-sm">
      <span className="text-emerald-300">{icon}</span> {text}
    </div>
  );
}
