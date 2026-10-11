# Dolap Asistan — dolapasistan.net

Dolap Asistan'ın Windows, Android ve web seçenekleri için Türkçe tanıtım ve satış sitesi. Windows önerilen deneyimdir. Ana uygulamadan bağımsızdır; bu klasör tek başına taşınabilir. HTML, CSS ve JavaScript kullanır, Vite ile ana sayfa ve üç rehberin statik yayın dosyaları üretilir.

11 Ekim 2026: mevcut ana sayfa tasarımı ve eski özellikler korundu; platform bilgileri, Öne Çıkarma Methodu açıklaması, yeni özellikler ve SSS genişletildi. SEO/AEO kapsamı, yayın sonrası adımlar ve kaynaklar `SEO-AEO.md` içinde belgelenir. `rehberler/` altındaki sayfalar `src/guide.css` ile mevcut görsel dili kullanır. `scripts/seo.mjs`, Vite derlemesinde görünür içerikten yapılandırılmış veri üretir; SSS veya özellik değişiklikleri ayrıca JSON kopyası düzenlemeyi gerektirmez. Her içerik değişikliğinde yeniden build alın.

## Çalıştırma

Node.js 22.12 veya üzeri kullanın.

```powershell
cd website
npm ci
npm run dev
```

Yerel adres: http://127.0.0.1:5180

## Yayına hazırlama

```powershell
npm run build
npm run preview
```

Üretilen `dist` klasörünün **içeriğini**, dolapasistan.net alan adının web köküne yükleyin. Apache/cPanel için `.htaccess`, Netlify/Cloudflare Pages için `_headers` dosyaları çıktıya dahildir. Statik hosting yeterlidir; sunucu uygulaması, veritabanı veya gizli API anahtarı gerekmez. HTTPS ve alan adı yönlendirmesi hosting panelinden ayarlanır. 11 Ekim 2026’da bu çalışma alanından mevcut Cloudflare Pages projesine doğrudan üretim yayını yapıldı. DNS değişmedi; dağıtım kaydı aşağıdadır.

## İçerik ve davranış

- Ürün ekleme, AI ile hazırlama ve kuyruk adımları arasında geçiş yapılabilen, açıkça örnek olarak etiketlenmiş vitrin. Gerçek hesap bağlantısı veya ürün yayını yapmaz.
- Özellikler, tanıtım videosu, üç adımlı başlangıç, aylık/yıllık paketler ve erişilebilir açılır sorular.
- Satın alma ve Telegram iletişim adresi: `https://web.telegram.org/k/#@dolapasistan`. Son çağrı alanında ayrıca `mailto:admin@dolapasistan.net` e-posta butonu bulunur; kullanıcının e-posta uygulamasında ileti oluşturmayı açar.
- Free paketinde ve masaüstü/mobil gezinmede “Uygulamayı indir” bağlantısı bulunur. Kullanıcı tarafından sabitlenen indirme adresi her zaman `https://github.com/mozkandev/dolapasistan/releases/download/v1.0.0/app.exe` olarak kalır; latest veya başka bir sürüme otomatik çevrilmez.
- Free üyelik 0 TL, 10 ürün/ay, 10 AI kredisi/ay, tek hesap ve tek cihaz hakkı içerir. Paket kartındaki güncel özellik açıklamaları esas alınır. Aylık/yıllık seçiminde fiyatı ve ücretsiz kullanım açıklaması değişmez. Ücretli paketlerin satış süreci Telegram üzerinden devam eder.
- Tanıtım videosu: `https://www.youtube.com/watch?v=dMzvtosRDNU`. YouTube iframe yalnızca oynat düğmesine basılınca yüklenir. Gömülü video platform tarafından kısıtlanırsa görünür YouTube bağlantısı kullanılabilir.
- Fiyat kaynağı: ana projedeki `src/components/PurchaseModal.tsx`. Starter 149/1.490 TL, Pro 399/3.990 TL, Business 899/8.990 TL (aylık/yıllık). Ürün, AI, hesap ve cihaz kotaları `server/src/db/migrations/002_seed_plans.sql` ile karşılaştırılmıştır. Sunucuda yönetici tarafından değiştirilen değerlerle otomatik senkron yoktur; sayfada güncel koşulların Telegram üzerinden teyit edileceği belirtilir.
- Ödeme ve paket aktivasyonu Telegram görüşmesi sonrası manuel yürür; sitede ödeme tahsil edilmez.
- Fontlar, ürün fotoğrafları ve video kapağı yereldir. Google Analytics 4 (`G-2978T1PDM8`) etiketi `index.html` içinde yer alır; sayfa açılışında Google'a ölçüm istekleri gönderir ve analitik çerezleri kullanabilir.
- `robots.txt`, `sitemap.xml`, canonical adres, Open Graph paylaşım görseli ve SoftwareApplication yapılandırılmış verisi bulunur.

## Düzenleme

| Dosya | İçerik |
| --- | --- |
| `index.html` | Türkçe metinler, bağlantılar, paket özellikleri ve ilk görünen aylık fiyatlar |
| `src/style.css` | Tasarım, mobil düzenler ve hareket azaltma tercihi |
| `src/main.js` | Menü, örnek akış, aylık/yıllık fiyatlar, video oynatıcı |
| `public/images/` | Yerel görseller ve kaynak kayıtları |
| `public/fonts/` | Sora ve Manrope fontları ile OFL lisansları |
| `scripts/social-cover.html` | Paylaşım görselinin HTML kaynağı |
| `DESIGN.md` | Sitenin tasarım kararları |

Fiyat değişikliğinde hem `index.html` içindeki ilk aylık değerleri hem `src/main.js` içindeki `planPrices` değerlerini güncelleyin. Alan adı değişirse `index.html`, `public/robots.txt` ve `public/sitemap.xml` adreslerini değiştirin. Değişiklikten sonra yeniden build alın.

Paylaşım görseli hazır olarak gelir; build için tarayıcı otomasyonu gerekmez. Yeniden üretmek için Playwright kurulu bir ortamda geliştirme sunucusu açıkken `node scripts/render-social.cjs` çalıştırılabilir.

## Doğrulama

1440, 768, 390 ve 320 piksel genişliklerde tarayıcı kontrolü yapılmıştır. Yatay taşma, görsel yüklemeleri, bölüm bağlantıları, JavaScript hataları, Telegram adresleri, örnek akış, fiyat geçişleri, SSS ve mobil menü davranışı kontrol edilmiştir. Video iframe bağlantısı testte ağ isteği taklit edilerek doğrulanmıştır; YouTube yayın erişilebilirliği garanti edilmez.

Free ve indirme bağlantısı güncellemesi ayrıca 1440, 1151, 1024, 901, 768, 390 ve 320 pikselde kontrol edildi. Dört/iki/tek sütun düzenleri, menü elemanlarının çakışmaması, Free paketinin dönem değişiminden etkilenmemesi ve üç indirme bağlantısı doğrulandı. İndirme davranışı taklit dosya yanıtıyla test edildi; uzak EXE indirilmedi veya çalıştırılmadı.

## 11 Ekim 2026 içerik doğrulaması

Üretim derlemesindeki ana sayfa ve üç rehber 320, 390, 768, 1024 ve 1440 piksel genişlikte kontrol edildi (20 sayfa/genişlik birleşimi). Yatay taşma görülmedi. Örnek akış, aylık/yıllık fiyatlar ve Free fiyatı, açılır SSS, mobil menü/Escape, taklit video iframe ve kişisel veri içermeyen web tıklama olayı doğrulandı. Tüm yerel bağlantılar ve bölüm hedefleri bulundu; 12 SSS yanıtı yapılandırılmış veriyle birebir eşleşti ve eski 19 özellik başlığının korunduğu denetlendi. Tarayıcı JavaScript hatası yoktu. Ana sayfanın src/style.css dosyası değişmedi. İndirme dosyaları çalıştırılmadı, gerçek Google/Bing indekslemesi veya GA4 sunucu alımı bu yerel kontrolle doğrulanmadı.

## SEO/AEO ikinci geçişi

İndekslenebilir sayfalar artık ana sayfa, üç rehber, /rehberler/ merkezi ve /hakkinda/ sayfasıdır. 404.html indekslenmez; Cloudflare Pages için gerçek eksik-sayfa davranışını etkinleştirir. npm run build otomatik SEO kontrolü de çalıştırır; yalnızca kontrolü tekrarlamak için npm run check:seo kullanılır. Cloudflare yayını ve Google/Bing hesap adımları SEO-AEO.md dosyasının ikinci geçiş bölümündedir.


## Arama niyeti içerik geçişi — 11 Ekim 2026

Dolap otomasyonu/ürün yükleme botu açıklamaları, üç yeni SSS, rehberlerde kullanım ve maliyet karşılaştırması, paket bölüm hedefleri ve view_plans analitik olayı eklendi. Önceki 12 SSS artık 15 sorudur. Tasarım/CSS, fiyatlar ve indirme hedefleri korundu. Build + SEO kontrolü (6 sayfa, 126 iç bağlantı) geçti. Değişen dört sayfa 320/390/1440 genişlikte, yeni rehber/paket bağlantıları ve analitik olayı Edge ile kontrol edildi. Yeni dağıtım için website/dist içeriğini kullanın; yerel build canlı yayını değiştirmez.


## Canlı dağıtım — 11 Ekim 2026

- Cloudflare Pages projesi: dolapasistan; alan adı: https://dolapasistan.net/
- Üretim dalı: landing-duzenleme; doğrudan Wrangler ile website/dist yayımlandı.
- Dağıtım adresi: https://8e54b1ff.dolapasistan.pages.dev
- Önceki üretim dağıtımı: 1708e74b-4b8e-4a08-a952-fbcd71ff00dd (Cloudflare dağıtım geçmişinde geri dönüş için).
- Canlı kontrolde altı sitemap adresi HTTP 200 ve doğru canonical ile açıldı. Ana sayfada yeni SEO başlığı ve 15 SSS şeması doğrulandı; robots.txt erişilebilir, olmayan adres 404. Canlı tarayıcıda görseller, fontlar, mobil menü ve web bağlantısı çalıştı; 390/1440 pikselde taşma ve JavaScript hatası yok.
- İlk doğrudan yayının ardından Git kaynağı da eşitlendi; güncel otomatik yayın ayarları aşağıdadır.


## Git üzerinden otomatik yayın

Canlı kaynak deposu https://github.com/mozkandev/dolapasistan, üretim dalı landing-duzenleme, site dizini website/ şeklindedir. Yerel ana uygulamanın origin adresi (leongrphc/dolap) farklıdır; uygulama deposuna push yapmak tanıtım sitesini güncellemez.

Cloudflare Pages dolapasistan projesinde Root directory: website, Build command: npm run build, Build output directory: dist kullanılır. Node sürümü website/.node-version ile belirtilir. package-lock.json bağımlılıkları sabitler ve build SEO denetimini çalıştırır.

Sonraki site güncellemelerini bu dalın website/ dizinine aktarın, website içinde npm ci ve npm run build çalıştırın, ardından commit/push yapın. dist/, node_modules/, .wrangler/ ve dağıtım ZIP dosyalarını Git’e eklemeyin. Cloudflare üretim dağıtımının commit kimliğini ve başarılı durumunu doğrulayın. Eski kök uygulamanın dosyaları tarihçe için korunur; canlı site bu dosyalardan derlenmez.
