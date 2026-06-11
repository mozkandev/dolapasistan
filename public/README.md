# public/ klasörü

Buradaki dosyalar sitenin köküne (`/`) servis edilir.

## app.exe ekleme
Uygulamanın kurulum dosyasını **bu klasöre** `app.exe` adıyla koy:

    public/app.exe

Site yayına girince `https://siten.com/app.exe` adresinden inilebilir olur.
Fiyatlandırma bölümündeki **"Ücretsiz Başla"** butonu bu dosyayı indirir
(`<a href="/app.exe" download>`).

> Not: Dosya adını değiştirirsen `src/components/landing/Pricing.tsx`
> içindeki `DOWNLOAD_URL` sabitini de güncelle.
