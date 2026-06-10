import { Rocket, Clock, Layers, Shuffle, Users, BarChart3 } from "lucide-react";
import { SectionTitle } from "./Simulator";

const features = [
  { icon: Rocket, title: "Otomatik Yükleme", desc: "Ürünlerinizi Dolap kurallarına uygun şekilde otomatik olarak tekrar yükleyin, aramalarda hep üstte kalın." },
  { icon: Clock, title: "Akıllı Gecikme & Mola", desc: "Bot korumasına yakalanmamak için insan davranışını taklit eden süreler ve periyodik molalar tanımlayın." },
  { icon: Layers, title: "Dinamik Kategori & Özellikler", desc: "Kategoriye özel dinamik alanlar (beden, renk, kumaş vb.) doğrudan Dolap sunucularından anlık çekilir." },
  { icon: Shuffle, title: "Fotoğraf & Fiyat Varyasyonları", desc: "Her yüklemede fotoğrafların sırasını karıştırın ve fiyatları rastgele aralıklarda güncelleyerek spamı engelleyin." },
  { icon: Users, title: "Çoklu Hesap Desteği", desc: "Tüm dükkanlarınızı tek bir panelden yönetin. Şifre girmeden hesaplar arasında anında geçiş yapın." },
  { icon: BarChart3, title: "Detaylı Raporlama", desc: "Hangi ürünün ne zaman yüklendiğini, başarı durumunu ve günlük limitlerinizi anlık takip edin." },
];

export function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Özellikler"
          title={<>Satışlarınızı <span className="text-gradient-violet">otomatikleştirecek</span> her şey</>}
          subtitle="Tek bir uygulamada, premium düzeyde tasarlanmış araç seti."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group surface-card rounded-2xl p-6 relative overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: "radial-gradient(closest-side, rgba(108,92,231,0.35), transparent 70%)", filter: "blur(40px)" }}
                aria-hidden
              />
              <div
                className="relative grid h-12 w-12 place-items-center rounded-xl"
                style={{ background: "linear-gradient(135deg, rgba(108,92,231,0.25), rgba(72,52,212,0.15))", boxShadow: "inset 0 0 0 1px rgba(108,92,231,0.35)" }}
              >
                <f.icon className="h-5 w-5 text-[#B8AEFF]" />
              </div>
              <h3 className="relative mt-5 font-display text-lg font-semibold">{f.title}</h3>
              <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
