import React from 'react'

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL

const createSitemap = (posts) => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts
          .map(({ slug }) => {
            return `
                <url>
                    <loc>${`https://devchuck.me/blog/post/${slug}`}</loc>
                </url>
            `
          })
          .join('')}
    </urlset>
    `

class Sitemap extends React.Component {
  static async getInitialProps({ res }) {
    const request = await fetch(EXTERNAL_DATA_URL + '/articles')
    const posts = await request.json()

    res.setHeader('Content-Type', 'text/xml')
    res.write(createSitemap(posts))
    res.end()
  }
}

export default Sitemap
