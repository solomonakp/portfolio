import Head from 'next/head'
import { getStrapiMedia } from '@utils/functions'
import { SeoType } from '@utils/types'
import { FC } from 'react'

interface SeoProps extends SeoType {
  article?: boolean
  isMain?: boolean
}

const Seo: FC<SeoProps> = (props) => {
  const { isMain = false, ...rest } = props
  const fullSeo = {
    ...rest,
    // Add title suffix
    metaTitle: `${props.metaTitle} | ${props.siteName ? props.siteName : ''}`,
    // Get full image URL
    shareImage: props.shareImage ? getStrapiMedia(props.shareImage) : null,
  }

  return (
    <Head>
      {fullSeo.metaTitle && (
        <>
          <title>{fullSeo.metaTitle}</title>
          <meta property="og:title" content={fullSeo.metaTitle} />
          <meta name="twitter:title" content={fullSeo.metaTitle} />
        </>
      )}
      {fullSeo.metaDescription && (
        <>
          <meta name="description" content={fullSeo.metaDescription} />
          <meta property="og:description" content={fullSeo.metaDescription} />
          <meta name="twitter:description" content={fullSeo.metaDescription} />
        </>
      )}
      {fullSeo.shareImage && (
        <>
          <meta property="og:image" content={fullSeo.shareImage} />
          <meta name="twitter:image" content={fullSeo.shareImage} />
          <meta name="image" content={fullSeo.shareImage} />
        </>
      )}
      {fullSeo.article && <meta property="og:type" content="article" />}
      <meta name="twitter:card" content="summary_large_image" />
      {isMain && (
        <meta
          name="google-site-verification"
          content="UN2UO4pdGF1mseZ3lZrWs0h__SONkKO1fgO3nkh1ZGk"
        />
      )}
    </Head>
  )
}

export default Seo
