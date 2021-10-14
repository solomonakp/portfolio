import { createContext, useContext, ReactNode, FC } from 'react'
import { PostSections } from '@utils/types'

export const BlogContext = createContext<PostSections | Record<string, never>>(
  {}
)

type ProviderProps = {
  children: ReactNode
  value: PostSections
}

export const BlogProvider: FC<ProviderProps> = ({ children, value }) => {
  return (
    <>
      <BlogContext.Provider value={value}>{children}</BlogContext.Provider>
    </>
  )
}

export const useBlog = () => {
  const context = useContext(BlogContext)
  return context
}
