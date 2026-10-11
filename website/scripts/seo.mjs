const origin = 'https://dolapasistan.net';
const text = value => value.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/g, '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').replace(/&amp;/g, '&').trim();

// Visible HTML is the source of truth: FAQ answers and feature names cannot drift.
export function enrichSeo(html) {
  if (/<meta name="robots" content="noindex/.test(html)) return html;
  const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
  if (!canonical) throw new Error('SEO: canonical URL is required');
  const title = text(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] || '');
  const description = html.match(/name="description" content="([^"]+)"/)?.[1];
  const organization = { '@type': 'Organization', '@id': origin + '/#organization', name: 'Dolap Asistan', url: origin + '/', logo: origin + '/favicon.svg', email: 'admin@dolapasistan.net', sameAs: ['https://github.com/mozkandev/dolapasistan', 'https://t.me/dolapasistan'] };
  const website = { '@type': 'WebSite', '@id': origin + '/#website', name: 'Dolap Asistan', url: origin + '/', inLanguage: 'tr-TR', publisher: { '@id': organization['@id'] } };
  const page = { '@type': 'WebPage', '@id': canonical + '#webpage', url: canonical, name: title, description, inLanguage: 'tr-TR', isPartOf: { '@id': website['@id'] }, about: { '@id': origin + '/#software' } };
  const graph = [organization, website, page];
  const original = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (canonical === origin + '/') {
    const app = JSON.parse(original[1]);
    Object.assign(app, { '@id': origin + '/#software', operatingSystem: ['Windows', 'Android'], availableOnDevice: ['Windows bilgisayar', 'Android cihaz', 'Web tarayıcısı'], inLanguage: 'tr-TR', publisher: { '@id': organization['@id'] }, description, offers: { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'TRY', url: origin + '/#paketler' }, featureList: [...html.matchAll(/class="feature-catalog-item"[^>]*><h3>([\s\S]*?)<\/h3>/g)].map(m => text(m[1])) });
    delete app['@context'];
    graph.push(app);
  } else if (canonical === origin + '/rehberler/') {
    page['@type'] = 'CollectionPage';
    const links = [...html.matchAll(/class="guide-entry" href="([^"]+)">([\s\S]*?)<\/a>/g)];
    page.mainEntity = { '@type': 'ItemList', itemListElement: links.map((match, i) => ({ '@type': 'ListItem', position: i + 1, name: text(match[2]), url: new URL(match[1], origin).href })) };
  } else if (canonical === origin + '/hakkinda/') {
    page['@type'] = 'AboutPage';
    page.mainEntity = { '@id': organization['@id'] };
  } else {
    const headline = text(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]);
    const modified = html.match(/<time datetime="([^"]+)"/i)?.[1];
    graph.push({ '@type': 'Article', '@id': canonical + '#article', headline, description, inLanguage: 'tr-TR', ...(modified ? { dateModified: modified } : {}), mainEntityOfPage: { '@id': page['@id'] }, author: { '@type': 'Organization', '@id': organization['@id'], name: organization.name, url: origin + '/hakkinda/' }, publisher: { '@id': organization['@id'] } });
    graph.push({ '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Ana sayfa', item: origin + '/' }, { '@type': 'ListItem', position: 2, name: 'Rehberler', item: origin + '/rehberler/' }, { '@type': 'ListItem', position: 3, name: headline, item: canonical }] });
  }
  const questions = [...html.matchAll(/<details\b[^>]*><summary>([\s\S]*?)<\/summary><div><p>([\s\S]*?)<\/p><\/div><\/details>/g)].map(m => ({ '@type': 'Question', name: text(m[1]), acceptedAnswer: { '@type': 'Answer', text: text(m[2]) } }));
  if (questions.length) graph.push({ '@type': 'FAQPage', '@id': canonical + '#faq', mainEntity: questions });
  const markup = '<script type="application/ld+json">' + JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c') + '</script>';
  return original ? html.replace(original[0], markup) : html.replace('</head>', markup + '\n</head>');
}
