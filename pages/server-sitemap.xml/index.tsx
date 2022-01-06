import { getServerSideSitemap } from 'next-sitemap'
import { GetServerSideProps } from 'next'

const EXTERNAL_DATA_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL

const url = process.env.SITE_URL

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')
  const request = await fetch(EXTERNAL_DATA_URL + '/articles')
  const posts = await request.json()

  const fields = posts.map(({ slug }) => {
    return {
      loc: `${url}/blog/post/${slug}`, // Absolute url
      lastmod: new Date().toISOString(),
    }
  })

  return getServerSideSitemap(ctx, fields)
}
