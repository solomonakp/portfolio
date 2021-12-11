import React from 'react'
import useTheme from '@hooks/useTheme'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism'

import css from 'react-syntax-highlighter/dist/esm/languages/prism/css'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx'
import git from 'react-syntax-highlighter/dist/esm/languages/prism/git'
import go from 'react-syntax-highlighter/dist/esm/languages/prism/go'
import graphql from 'react-syntax-highlighter/dist/esm/languages/prism/graphql'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import markup from 'react-syntax-highlighter/dist/esm/languages/prism/markup'
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss'
import typescript from 'react-syntax-highlighter/dist/esm/languages/prism/typescript'

export interface PostBodyProps {
  content?: string
}

SyntaxHighlighter.supportedLanguages
SyntaxHighlighter.registerLanguage('css', css)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('jsx', jsx)
SyntaxHighlighter.registerLanguage('git', git)
SyntaxHighlighter.registerLanguage('go', go)
SyntaxHighlighter.registerLanguage('graphql', graphql)
SyntaxHighlighter.registerLanguage('json', json)
SyntaxHighlighter.registerLanguage('markup', markup)
SyntaxHighlighter.registerLanguage('scss', scss)
SyntaxHighlighter.registerLanguage('typescript', typescript)

const PostBody = (props: PostBodyProps) => {
  const { content } = props

  const {
    colors: { dark: darkColor },
    media: { maxSm },
  } = useTheme()

  return (
    <article className="post" role="article">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          code({ inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')

            return !inline && match ? (
              <SyntaxHighlighter
                style={coldarkDark}
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
