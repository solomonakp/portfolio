import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getLayout } from '@layout/Layout'
import PostDetailSection from '@postComponents/PostDetailSection'
import ReadMoreSection from '@postComponents/ReadMoreSection'
import { fetchAPI, formatPost } from '@utils/functions'
import { Posts } from '@utils/types'
import Seo from '@components/Seo'
import useTheme from '@hooks/useTheme'
import { mdxOptions } from '@utils/markdown'

const PostComponent = (
  props: InferGetStaticPropsType<typeof getStaticProps>
) => {
  const { post, morePosts } = props

  const {
    colors: { dark: darkColor },
    media: { maxSm },
  } = useTheme()

  const { postDetails, seo, content } = formatPost(post)

  console.log(post, 'post')

  return (
    <div id="post-page" className="page-spacing">
      <Seo {...seo} slug={`/blog/post/${post.slug}`} />
      <PostDetailSection {...postDetails} />
      <section id="post-body" className="section-space">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10">
              <article className="post-content" role="article">
                <MDXRemote {...content} />
              </article>
            </div>
          </div>
        </div>
      </section>
      {Boolean(morePosts.length) && <ReadMoreSection posts={morePosts} />}
      <style jsx>{`
        .post-content {
          max-width: 90%;
          @media (${maxSm}) {
            max-width: 100%;
          }
        }

        :global(.post-content h4, ) {
          font-size: 2rem;
        }

        :global(.post-content img) {
          width: 100%;
        }
        :global(.post-content ul) {
          list-style-type: none;
          color: ${darkColor};
          padding-left: 0;
        }
        :global(.post-content li) {
          margin-left: 1.5rem;
          position: relative;
          &:before {
            content: '';
            position: absolute;
            display: block;
            border-radius: 50%;
            width: 0.5em;
            height: 0.5em;
            left: -1.5em;
            top: 8px;
            background-color: ${darkColor};
          }
        }
        :global(iframe) {
          width: 100%;
        }
      `}</style>
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
  const posts = await fetchAPI<Posts>(`/articles?slug=${params.slug}`)

  const post = posts[0]

  const morePosts = await fetchAPI<Posts>(
    `/articles?slug_ne=${post.slug}&_limit=${3}&_sort=published_at:DESC`
  )

  const { content, ...rest } = post

  const mdSource = await serialize(content, { mdxOptions: mdxOptions })

  const newPost = {
    ...rest,
    content: mdSource,
  }

  return {
    props: { post: newPost, morePosts },
    revalidate: 5,
  }
}

PostComponent.getLayout = getLayout

export default PostComponent
