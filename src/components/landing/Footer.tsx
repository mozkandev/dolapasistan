const cols = [
  { title: "Ürün", links: ["Özellikler", "Fiyatlandırma", "İndir"] },
  { title: "Güvenlik", links: ["Mobil API Protokolü", "Veri Güvenliği", "OTP Koruması"] },
  { title: "Sözleşmeler", links: ["KVKK Aydınlatma", "Kullanım Şartları", "Gizlilik Politikası"] },
  { title: "İletişim", links: ["destek@dolapasistan.com", "Yardım Merkezi", "Twitter / X"] },
];

export function Footer() {
  return (
    <footer className="relative pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.4fr_repeat(4,1fr)] gap-10">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="grid h-7 w-7 place-items-center rounded-md bg-[#FF7E36] text-[#0B0C0E] font-bold text-sm">
                D
              </div>
              <span className="font-display text-[15px] font-semibold">Dolap Asistan</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Dolap'ta satışlarınızı otomatikleştiren kurumsal masaüstü asistan.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="font-display text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-foreground/85 hover:text-[#FF7E36] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-[#23272C] text-xs text-muted-foreground/80 leading-relaxed">
          © 2026 Dolap Asistan. Tüm hakları saklıdır. Bu uygulama bağımsız olarak geliştirilmiştir ve Dolap.com ile resmi bir bağı yoktur.
        </div>
      </div>
    </footer>
  );
}
