const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");

async function generateSitemap() {
  const sitemap = new SitemapStream({
    hostname: "https://www.quick-publish.com",
  });

  const urls = [
    { url: "/", changefreq: "daily", priority: 1.0 },
    { url: "/services", changefreq: "weekly", priority: 0.8 },
    { url: "/showcase", changefreq: "weekly", priority: 0.8 },
    { url: "/contact", changefreq: "monthly", priority: 0.6 },
  ];

  urls.forEach((url) => sitemap.write(url));
  sitemap.end();

  const sitemapData = await streamToPromise(sitemap);
  const writeStream = createWriteStream("public/sitemap.xml");
  writeStream.write(sitemapData.toString());
}

generateSitemap();
