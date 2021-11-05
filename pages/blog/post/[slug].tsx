import { GetStaticPaths, GetStaticProps } from 'next'
import { getLayout } from '@layout/Layout'
import PostBodySection from '@postComponents/PostBodySection'
import PostDetailSection from '@postComponents/PostDetailSection'
// import ReadMoreSection from '@postComponents/ReadMoreSection'
import { fetchAPI } from '@utils/functions'
import { Post, Posts } from '@utils/types'
import { formatPost } from '@utils/functions'
import Seo from '@components/Seo'

interface PostComponentProps {
  post: Post
}

const PostComponent = (props: PostComponentProps) => {
  const { post } = props

  const { postDetails, seo, content } = formatPost(post)

  return (
    <div id="post-page" className="page-spacing">
      <Seo {...seo} />
      <PostDetailSection {...postDetails} />
      <PostBodySection content={content} />
      {/* <ReadMoreSection /> */}
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

  return {
    props: { post: posts[0] },
    revalidate: 1,
  }
}

PostComponent.getLayout = getLayout

export default PostComponent
