import React from 'react'
import useTheme from '@hooks/useTheme'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
export interface PostBodyProps {
  content?: string
}

const PostBody = (props: PostBodyProps) => {
  const { content } = props

  const {
    colors: { dark: darkColor },
    media: { maxSm },
  } = useTheme()

  return (
    <article className="post" role="article">
      {/* <ReactMarkdown className="post-content">{content}</ReactMarkdown> */}
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                style={atomDark}
                language={match[1]}
                PreTag="div"
                wrapLongLines
                {...props}
              >
                {String(children).replace(/\n$/, '')}
              </SyntaxHighlighter>
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          },
        }}
      >
        {content}
      </ReactMarkdown>
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
          margin-bottom: 1rem;
        }
      `}</style>
    </article>
  )
}

export default PostBody
