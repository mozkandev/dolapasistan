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
    <section id="features" className="relative py-24 border-b border-[#23272C]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Özellikler"
          title={<>Satışlarınızı otomatikleştirecek her şey.</>}
          subtitle="Tek bir uygulamada, kurumsal düzeyde tasarlanmış araç seti."
        />

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 border-l border-t border-[#23272C]">
          {features.map((f) => (
            <div
              key={f.title}
              className="group p-7 border-r border-b border-[#23272C] bg-[#0B0C0E] hover:bg-[#141619] transition-colors"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md border border-[#23272C] bg-[#141619] group-hover:border-[#FF7E36] transition-colors">
                <f.icon className="h-[18px] w-[18px] text-foreground group-hover:text-[#FF7E36] transition-colors" />
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
