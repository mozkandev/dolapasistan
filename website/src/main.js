const menuButton = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('#mobile-nav');
function closeMenu({ restoreFocus = false } = {}) {
  mobileNav.hidden = true;
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Menüyü aç');
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const opening = menuButton.getAttribute('aria-expanded') !== 'true';
  mobileNav.hidden = !opening;
  menuButton.setAttribute('aria-expanded', String(opening));
  menuButton.setAttribute('aria-label', opening ? 'Menüyü kapat' : 'Menüyü aç');
});
mobileNav.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && !mobileNav.hidden) closeMenu({ restoreFocus: true });
});
document.addEventListener('click', event => {
  if (!mobileNav.hidden && !event.target.closest('.site-header')) closeMenu();
});
window.matchMedia('(min-width: 1151px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

const demoStates = [
  { title: 'Ürünlerim', toolbar: 'Tüm ürünler', badge: 'Taslak', heading: 'Güzel bir başlangıç.', description: 'Ürünlerin eklendi. Sırada ilanlarını hazırlamak var.' },
  { title: 'AI Asistan', toolbar: 'İlan önerileri', badge: 'Hazır', heading: 'Kelimeler de hazır.', description: 'Başlık ve açıklama önerilerini kontrol et, kendi dokunuşunu ekle.' },
  { title: 'Yükleme kuyruğu', toolbar: 'Seçili ürünler', badge: 'Sırada', heading: 'Sıra dolabını büyütmekte.', description: 'İlanlarını kontrol edip yüklemeyi başlatmak senin elinde.' },
];
document.querySelectorAll('[data-step]').forEach(button => {
  button.addEventListener('click', () => {
    const step = Number(button.dataset.step);
    const state = demoStates[step];
    document.querySelectorAll('[data-step]').forEach(item => {
      const selected = Number(item.dataset.step) === step;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-demo-nav]').forEach(item => item.classList.toggle('active', Number(item.dataset.demoNav) === step));
    const title = document.querySelector('#demo-title');
    title.replaceChildren(document.createTextNode(`${state.title} `));
    const count = document.createElement('span');
    count.textContent = '3';
    title.append(count);
    const toolbar = document.querySelector('#demo-toolbar-label');
    toolbar.replaceChildren(document.createTextNode(`${state.toolbar} `));
    const total = document.createElement('b');
    total.textContent = '3';
    toolbar.append(total);
    document.querySelectorAll('.product-status').forEach(item => { item.textContent = state.badge; });
    document.querySelector('#demo-feedback-title').textContent = state.heading;
    document.querySelector('#demo-feedback-text').textContent = state.description;
    document.querySelector('.workspace').dataset.stage = String(step);
  });
});

const planPrices = {
  monthly: { free: 0, starter: 149, pro: 399, business: 899 },
  yearly: { free: 0, starter: 1490, pro: 3990, business: 8990 },
};
const numberFormat = new Intl.NumberFormat('tr-TR');
document.querySelectorAll('[data-billing]').forEach(button => {
  button.addEventListener('click', () => {
    const billing = button.dataset.billing;
    document.querySelectorAll('[data-billing]').forEach(item => {
      const selected = item.dataset.billing === billing;
      item.classList.toggle('is-active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    document.querySelectorAll('[data-price]').forEach(item => { item.textContent = numberFormat.format(planPrices[billing][item.dataset.price]); });
    document.querySelectorAll('.price-period').forEach(item => { item.textContent = billing === 'yearly' ? '/ yıl' : '/ ay'; });
    document.querySelectorAll('.price-card:not(.price-card-free) .billing-note').forEach(item => { item.textContent = billing === 'yearly' ? 'Yıllık toplam ödeme · kotalar aylıktır' : 'Aylık ödeme'; });
    document.querySelector('#pricing-status').textContent = `Free üyelik ücretsizdir. ${billing === 'yearly' ? 'Ücretli paketlerin yıllık toplam fiyatları gösteriliyor; kullanım kotaları aylık kalır.' : 'Ücretli paketlerin aylık fiyatları gösteriliyor.'} Fiyatlar uygulamadaki paket bilgilerine dayanır. Güncel fiyat ve koşullar Telegram üzerinden teyit edilir. Ücretli paketler ödeme sonrası etkinleştirilir.`;
  });
});

document.querySelector('#play-video')?.addEventListener('click', () => {
  const iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube-nocookie.com/embed/dMzvtosRDNU?autoplay=1&rel=0';
  iframe.title = 'Dolap Asistan tanıtım videosu';
  iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
  iframe.allowFullscreen = true;
  iframe.referrerPolicy = 'strict-origin-when-cross-origin';
  document.querySelector('#video-player').replaceChildren(iframe);
  iframe.focus();
});

document.querySelector('#current-year').textContent = String(new Date().getFullYear());

// Measure useful actions without recording account, product or contact details.
document.addEventListener('click', event => {
  const link = event.target.closest('a[href]');
  if (!link || typeof window.gtag !== 'function') return;
  const url = new URL(link.href);
  let action;
  if (url.hostname === 'github.com' && url.pathname.endsWith('.exe')) action = 'download_windows';
  else if (url.hostname === 'github.com' && url.pathname.endsWith('.apk')) action = 'download_android';
  else if (url.hostname === 'app.dolapasistan.net') action = 'open_web_app';
  else if (url.hostname === 'web.telegram.org') action = 'contact_telegram';
  else if (url.protocol === 'mailto:') action = 'contact_email';
  else if (url.origin === window.location.origin && url.pathname.startsWith('/rehberler/')) action = 'read_guide';
  else if (url.origin === window.location.origin && url.pathname === '/' && /^#paket(?:ler|-free|-starter|-pro|-business)$/.test(url.hash)) action = 'view_plans';
  if (action) window.gtag('event', action, {
    page_path: window.location.pathname,
    ...(action === 'view_plans' || action === 'read_guide' ? { destination: url.pathname + url.hash } : {}),
    ...(action === 'contact_telegram' ? { plan: link.closest('.price-card')?.querySelector('h3')?.textContent || 'general' } : {}),
  });
});
