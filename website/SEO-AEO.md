# SEO ve AEO içerik bakımı

11 Ekim 2026 içerik güncellemesi. Bu kayıt yerel hazırlığı anlatır; yayın ve indeksleme onayı değildir.

## Tamamlanan yerel çalışma

- Ana sayfanın tüm eski özellik başlıkları, altı SSS konusu, paketleri ve görsel tasarımı korundu; platform bilgileri güncellendi, beş özellik ve altı SSS eklendi.
- Windows önerilen en kapsamlı/verimli deneyim; Android ve web mevcut seçenekler. macOS/iOS uygulamaları gelecek planı olarak anlatılır, tarih veya mağaza yayını vaat edilmez.
- AI Agent'in geçici durumuna ilişkin metin yoktur. Platformlar arasında her özelliğin aynı olduğu iddia edilmez.
- Otomatik Öne Çıkarma Methodu adı korunur. Uygun maliyet ve daha uzun süre hedefi anlatılır; sabit tasarruf veya satış garantisi yoktur. Roket bedeli üyelikten ayrıdır.
- Üç ayrı, statik ve birbirine bağlı rehber: platform seçimi, toplu ürün yükleme, otomatik öne çıkarma. Ana sayfadaki görünür bağlantılardan erişilir.
- Her sayfanın ayrı başlığı, açıklaması, canonical ve Open Graph verisi vardır. Mevcut font, görsel, GA4, robots.txt ve ana sayfa sitemap kaydı korunur.
- Vite, scripts/seo.mjs ile derleme sırasında görünür HTML'den FAQPage ve özellik verisini üretir; WebSite, Organization, WebPage, SoftwareApplication ve rehberlerde Article/BreadcrumbList eklenir. Veriler JavaScript çalıştırılmadan HTML yanıtında bulunur.
- FAQPage işaretlemesi ticari siteye Google FAQ zengin sonucu garantisi vermez. Uydurma değerlendirme, kullanıcı sayısı, puan veya fiyat eklenmez.
- robots.txt tüm tarayıcılara erişim verir; OAI-SearchBot için dosya düzeyinde engel yoktur. Hosting/CDN engelleri ayrıca kontrol edilmelidir. Eğitim botlarına özel yeni bir politika eklenmedi.
- Mevcut GA4'e kişisel veri içermeyen download_windows, download_android, open_web_app, contact_telegram (paket adı) ve read_guide tıklama olayları eklendi.

## Yayın işlemi

1. npm run build çıktısındaki dist klasörünün tamamını mevcut hosting'e yükleyin. Üç rehber dizini, sitemap ve mevcut gizli .htaccess dosyası dahil olmalı.
2. Ana sayfa ve her rehber için HTTPS 200, doğru canonical, schema ve mobil görünümü kontrol edin. CDN/WAF'nin Googlebot, Bingbot ve OAI-SearchBot erişimini engellemediğini doğrulayın.
3. Search Console alan adı mülkünde sitemap.xml gönderin; ana sayfa ve üç rehber için URL Denetimi ile indeksleme isteyin. Generative AI özellikleri ayarını da kontrol edin. Bu görevde hesap erişimi sağlanmadığı için yapılmadı.
4. Bing Webmaster Tools'da alan adını doğrulayın veya mevcut Search Console mülkünü aktarın; sitemap gönderin. Hesap onayı veya indekslendi bildirimi bu çalışma kapsamında alınmadı.
5. GA4 DebugView'da olayları doğrulayın. Uygulamada kayıt/aktivasyon izleme kurulmadan web uygulamasına tıklamayı kayıt dönüşümü olarak raporlamayın.

## Sonraki içerik ve ölçüm

- Haftalık: Search Console gösterim, tıklama, sorgu ve açılış sayfası verileri; GA4 platform ve paket tıklamaları. Yayın öncesi değerleri başlangıç noktası olarak saklayın.
- Aylık: Arama sorgularında cevapsız kalan gerçek kullanıcı sorularını rehberlere ekleyin. Aynı konunun anahtar kelime varyasyonları için tekrar sayfalar üretmeyin.
- Güncel uygulamayla gerçek bir kısa kullanım videosu hazırlayın; video değiştiğinde sayfa açıklamasını da güncelleyin. Kanıtlanmış kullanıcı deneyimleri ancak izin ve doğrulanabilir içerikle eklenmeli.
- Her ürün sürümünde platform durumu, paket koşulları, rehber adımları ve sitemap lastmod tarihini kontrol edin. lastmod yalnızca ilgili içeriğin anlamlı değiştiği günü yansıtmalı.
- Windows indirme adresi önceki proje talimatındaki sabit v1.0.0/app.exe adresi olarak korundu. Yeni sürüm dosyasına taşınacaksa açıkça belirlenmeli; Android bağlantısı yayımlanmış 2.7.2 APK'sıdır.
- AI yanıtlarında görünme veya üst sıralar garanti edilmez. llms.txt Google görünürlüğü için gerekli değildir; bu çalışma okunabilir özgün içerik, taranabilirlik ve tutarlı kaynak bilgisine odaklanır.

## Resmî kaynaklar

- Google: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Yapılandırılmış veri: https://developers.google.com/search/docs/appearance/structured-data/sd-policies
- FAQ sonuçları: https://developers.google.com/search/blog/2023/08/howto-faq-changes
- OpenAI tarayıcıları: https://developers.openai.com/api/docs/bots

## İkinci SEO/AEO geçişi — canlı inceleme ve ekler

Kullanıcı yalnızca Analytics kurduğunu düşündüğünü ve Cloudflare kullandığını belirtti. Search Console/Bing doğrulaması ve Cloudflare hesap ayarları bu oturumdan yönetilmedi.

11 Ekim 2026 HTTP incelemesi: HTTPS ana sayfa eski başlığı taşıyor; robots.txt 200 ve taramaya açık; sitemap yalnızca ana sayfayı içeriyor. Yeni rehber adresi ve rastgele olmayan sayfa eski ana sayfayı 200 ile döndürüyor. HTTP ana sayfa HTTPS adresine 301 dönüyor. www adresine bu ortamdan erişim başarısız oldu; DNS/TLS ve yönlendirme durumu Cloudflare panelinde ayrıca incelenmeli. Arama sonuçları anlık Google sıralaması veya Search Console indeks kapsamı raporu değildir.

Hazırlanan düzeltmeler:

- Rehberler merkezi (/rehberler/) ve Hakkında/iletişim sayfası (/hakkinda/) eklendi; toplam altı indekslenebilir sayfa var. Var olan içerikler korunuyor.
- Kök 404.html eklendi. Cloudflare Pages bu dosya bulunduğunda varsayılan SPA ana sayfa geri dönüşünü uygulamaz. Cloudflare yalnızca proxy ise veya özel Worker/yönlendirme varsa aynı 404 kuralı gerçek origin/Worker üzerinde de doğrulanmalı. Henüz canlıya uygulanmış sayılmaz.
- Yerel Vite preview çok sayfalı uygulama moduna alındı; eksik URL HTTP 404 dönüyor.
- Rehberler görünür hazırlayan bağlantısı, son kontrol tarihi ve üç seviyeli BreadcrumbList içeriyor. Article tarihi görünür time öğesinden üretiliyor. Yeni rehber merkezi CollectionPage/ItemList, ürün hakkında sayfası AboutPage olarak işaretleniyor. Gerçek iletişim e-postası Organization verisine eklendi.
- CSV alanları ve hata açıklamaları gerçek importProductsFromCsv kodundan doğrulandı; rehberdeki örnek iki ürün olarak hatasız ayrıştırıldı. Rastgele kategori/marka kimliği ve otomatik fotoğraf aktarımı vaat edilmiyor.
- npm run build sonrasında otomatik SEO denetimi çalışıyor: altı sayfa, 119 site içi bağlantı, benzersiz başlık/açıklama, canonical, H1, JSON-LD, SSS sayısı ve 404/sitemap ayrımı doğrulandı.
- E-posta tıklaması contact_email adıyla ölçülür; e-posta adresi ve mesaj içeriği olay parametresi olarak gönderilmez.

## Cloudflare ve Search Console için sıradaki adımlar

1. Cloudflare Workers & Pages içinde tanıtım sitesinin projesini açın. Pages Direct Upload kullanılıyorsa bu sürümün dist içeriğini yeni dağıtım olarak yükleyin. Git bağlantısı varsa kök dizin website, build komutu npm run build ve çıktı dist olmalı; mevcut proje yapısına göre ayarlayın. Bu işlem için uygulama API projesini değiştirmeyin.
2. Yayın sonrası /, /rehberler/, /hakkinda/ ve üç rehber URL’si 200 dönmeli; her birinin canonical adresi kendisini göstermeli. /bu-sayfa-yok gibi bir adres 404 dönmeli. sitemap.xml altı sayfa içermeli. 404 sayfası sitemap’e eklenmemeli.
3. https://search.google.com/search-console adresinde Mülk ekle > Alan adı seçin. Sadece dolapasistan.net yazın (https veya yol eklemeyin). Google’ın verdiği gerçek TXT doğrulama değerini kopyalayın; örnek veya tahmini değer kullanmayın.
4. Cloudflare > dolapasistan.net > DNS > Records > Add record: tür TXT, ad @, içerik Google’ın verdiği google-site-verification=... değeri, TTL Auto. Mevcut DNS kayıtlarını değiştirmeyin. Search Console’a dönüp Doğrula’yı seçin. Doğrulama gecikirse DNS kaydının yayılmasını bekleyin; kaydı sonradan silmeyin.
5. Yeni sürüm canlı olduktan sonra Search Console Site Haritaları ekranına https://dolapasistan.net/sitemap.xml gönderin. URL Denetimi ile altı sayfanın canlı testini ve indeksleme isteğini yapın. Google’ın değerlendirmesi tamamlanmadan indekslendi veya sıralama yükseldi sonucu çıkarmayın.
6. https://www.bing.com/webmasters üzerinden doğrulanmış Search Console mülkünü içe aktarın. Aktarım sırasında istenen hesap erişimini kullanıcı kendi hesabından onaylamalıdır. Sitemap ve URL Denetimi sonuçlarını kontrol edin.
7. Cloudflare’da www alan adının DNS/TLS durumunu düzeltip www’den https://dolapasistan.net adresine yol ve sorgu korunarak kalıcı yönlendirme uygulayın. Googlebot/Bingbot/OAI-SearchBot için WAF engeli olup olmadığını güvenlik olaylarından kontrol edin; bütün güvenlik veya eğitim botu ayarlarını topluca kapatmayın.

## İlk 30 gün için ölçülebilir içerik planı

| Dönem | İş | Kontrol |
| --- | --- | --- |
| Yayın günü | Dağıtım, gerçek 404, sahiplik doğrulaması, sitemap | Altı doğru canonical sayfa; canlı testler |
| İlk hafta | Search Console Sayfalar ve Performans raporları | İndeksleme gerekçeleri, marka/markasız sorgular |
| İkinci hafta | Gerçek uygulamadan kısa ürün hazırlama/CSV videosu ve ekran görüntüleri | Görseller doğru sürüme ait, açıklamalar gerçek adımları anlatıyor |
| Üçüncü hafta | Gelen destek sorularına göre mevcut rehberleri geliştirme | Kullanıcının sorusu aynı sayfada açıkça cevaplanıyor |
| Dördüncü hafta | Önceki dönemle sorgu ve dönüşüm karşılaştırması | Organik gösterim/tıklama, Windows indirme, web geçişi, Telegram/e-posta tıklaması |

Öncelikli arama niyetleri: Dolap toplu ürün yükleme, Dolap Excel/CSV ürün aktarma, Dolap ilan yönetimi, Dolap otomatik öne çıkarma, Dolap Asistan Windows/Android/web. Bunlar içerik eşleştirmeleridir; doğrulanmış arama hacmi veya sıralama tahmini değildir. Yeni yazı kararı gerçek sorgu ve destek verisine göre verilmelidir. Gerçek kullanım videosu, ürünün yayınlanmış sürüm kayıtları ve izinli müşteri deneyimleri dış kaynaklarda tutarlı marka bilgisi oluşturabilir; uydurma yorum ve bağlantı satın alma uygulanmaz.

Ek resmî kaynaklar:
- https://developers.cloudflare.com/pages/configuration/serving-pages/
- https://support.google.com/webmasters/answer/9008080
- https://www2.bing.com/webmasters/help/add-and-verify-site-12184f8b
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls


## 11 Ekim 2026 — Arama niyeti ve başlama akışı

- Ana sayfa başlığı, açıklaması ve görünür giriş metni Dolap otomasyonu ve toplu ürün yükleme odağıyla güncellendi. Mevcut özellikler ve tasarım korundu.
- Dolap botu, ücretsiz otomasyon ve Excel/CSV aktarımı soruları eklendi. Toplam 15 görünür SSS yanıtı build sırasında FAQPage verisine aktarılıyor; Google veya AI görünürlüğü garantisi değildir.
- Mevcut yükleme rehberine botun çalışma şekli ve gerçek kullanım senaryoları eklendi. Kopya anahtar kelime sayfaları oluşturulmadı; rehberin URL’si korundu.
- Free, Starter, Pro ve Business için kalıcı bölüm hedefleri eklendi. Rehberden ihtiyaçla eşleşen pakete ve web uygulamasına geçiş sağlandı.
- Öne çıkarma rehberine roket/süre maliyet karşılaştırması ve ilk kullanım adımları eklendi. Paket fiyatları, limitler ve indirme bağlantıları değiştirilmedi.
- GA4 tıklama olaylarına view_plans eklendi. read_guide ve view_plans yalnızca site içi hedef yolunu/bölümünü içerir; satın alma veya satış gerçekleştiği varsayılmaz.

Doğrulama: üretim build’i ve SEO kontrolü başarılı (6 indekslenebilir sayfa, 126 iç bağlantı). Değişen dört sayfa 320, 390 ve 1440 pikselde taşma olmadan açıldı; FAQ → rehber → Business bağlantıları, 15 SSS şeması ve view_plans olayı tarayıcıda doğrulandı. JavaScript hatası yok. GA4 sunucu alımı ve gerçek arama sıralaması bu testlerin kapsamında değildir. Tasarım taraması mevcut küçük yazı/kontrast uyarıları üretmeye devam ediyor; bu geçişte CSS değiştirilmedi.

Yayın sonrası Search Console Performans bölümünde “dolap botu”, “dolap ürün yükleme botu”, “dolap otomasyonu”, “dolap toplu ürün yükleme” ve “dolap otomatik öne çıkarma” sorgularının gösterim/tıklamalarını izleyin. Analytics’te rehber okumadan paket incelemeye, indirmeye, web uygulamasına ve iletişime geçişleri değerlendirin. Bunlar hedef sorgulardır; ölçülmüş arama hacmi veya mevcut sıralama değildir.


## Canlı yayın durumu — 11 Ekim 2026

Yeni sürüm https://dolapasistan.net/ üzerinde yayımlandı (Cloudflare dağıtımı 8e54b1ff). Altı URL’lik sitemap ve tüm sayfalar canlı HTTP yanıtlarıyla doğrulandı. Bu erişim kontrolü Google/Bing indekslemesinin veya AI kaynak gösteriminin gerçekleştiği anlamına gelmez. Search Console’da aynı sitemap adresi yeniden gönderilip işlenme durumu takip edilebilir. Git entegrasyonuyla sonraki yayınlar için README’deki dağıtım notuna bakın.


Git kaynağı eşitlemesi: güncel site kaynakları mozkandev/dolapasistan deposunun landing-duzenleme dalındaki website/ dizininde tutulur. Cloudflare derleme kökü website olarak ayarlanır; npm run build üretim derlemesi ve SEO kontrolünü birlikte çalıştırır. Ayrıntılar README.md dosyasındadır.
