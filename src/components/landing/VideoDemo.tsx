import { PlayCircle } from "lucide-react";
import { SectionTitle } from "./Simulator";

const YOUTUBE_ID = "dMzvtosRDNU";

export function VideoDemo() {
  return (
    <section id="video" className="relative py-24">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Tanıtım Videosu"
          title={<>Uygulamayı <span className="text-gradient-violet">iş başında</span> izleyin</>}
          subtitle="Kurulumdan otomatik yüklemeye kadar her adımı anlattığımız videoyu izleyin, gözünüzde canlandırın."
        />

        <div className="mt-12 relative">
          {/* Arkadaki altın ışıma */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-x-10 -top-10 bottom-0 -z-10"
            style={{ background: "radial-gradient(closest-side, rgba(210,174,108,0.25), transparent 70%)", filter: "blur(80px)" }}
          />

          <div
            className="surface-card relative overflow-hidden rounded-2xl p-2 sm:p-3"
            style={{ boxShadow: "0 40px 100px -40px rgba(210,174,108,0.45), inset 0 0 0 1px rgba(210,174,108,0.18)" }}
          >
            <div className="relative w-full overflow-hidden rounded-xl" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube-nocookie.com/embed/${YOUTUBE_ID}?rel=0&modestbranding=1`}
                title="Dolap Asistan — Tanıtım ve Kullanım Videosu"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="mt-5 flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <PlayCircle className="h-4 w-4 text-[#d2ae6c]" />
            <span>2 dakikada Dolap Asistan'ın tüm gücünü keşfedin.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
