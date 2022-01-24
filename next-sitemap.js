// next-sitemap.js

module.exports = {
  siteUrl: process.env.SITE_URL,
  changefreq: 'daily',
  generateRobotsTxt: true,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
}
