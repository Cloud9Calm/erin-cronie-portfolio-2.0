const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/projects', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://www.erincronie.me/' });

streamToPromise(sitemap).then((data) => {
  createWriteStream('./public/sitemap.xml').end(data); 
  console.log('Sitemap generated!');
});

links.forEach(link => sitemap.write(link));

sitemap.end();