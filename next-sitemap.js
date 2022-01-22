// next-sitemap.js

module.exports = {
  siteUrl: process.env.SITE_URL,
  generateRobotsTxt: true,

  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.SITE_URL}/server-sitemap.xml`, // <==== Add here
    ],
  },
}
