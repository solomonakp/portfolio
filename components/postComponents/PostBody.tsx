import React from 'react'
import useTheme from '@hooks/useTheme'
import ReactMarkdown from 'react-markdown'
export interface PostBodyProps {
  content?: string
}

const PostBody = (props: PostBodyProps) => {
  const { content } = props

  const {
    colors: { dark },
    media: { maxSm },
  } = useTheme()

  return (
    <article className="post">
      <ReactMarkdown className="post-content">{content}</ReactMarkdown>
      <style jsx>{`
        .post {
          max-width: 90%;
          @media (${maxSm}) {
            max-width: 100%;
          }
        }
        :global(.post-content p) {
          margin-bottom: 1.5rem;
        }
        :global(.post-content ul) {
          list-style-type: none;
          color: ${dark};
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
            background-color: ${dark};
          }
        }
      `}</style>
    </article>
  )
}

export default PostBody
