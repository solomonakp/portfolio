import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { getLayout } from '@layout/Layout'
import PostBodySection from '@postComponents/PostBodySection'
import PostDetailSection from '@postComponents/PostDetailSection'
import ReadMoreSection from '@postComponents/ReadMoreSection'
import { fetchAPI } from '@utils/functions'
import { Posts } from '@utils/types'
import { formatPost } from '@utils/functions'
import Seo from '@components/Seo'

const PostComponent = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { post, morePosts } = props

  const { postDetails, seo, content } = formatPost(post)

  return (
    <div id="post-page" className="page-spacing">
      <Seo {...seo} />
      <PostDetailSection {...postDetails} />
      <PostBodySection content={content} />
      {morePosts.length && <ReadMoreSection posts={morePosts} />}
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const articles: Posts = await fetchAPI('/articles')

  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts: Posts = await fetchAPI(`/articles?slug=${params.slug}`)

  const post = posts[0]

  const morePosts: Posts = await fetchAPI(
    `/articles?slug_ne=${post.slug}&_limit=${3}&_sort=published_at:DESC`
  )

  return {
    props: { post, morePosts },
    revalidate: 1,
  }
}

PostComponent.getLayout = getLayout

export default PostComponent
