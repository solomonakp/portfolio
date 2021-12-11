import useTheme from '@hooks/useTheme'
import { FC } from 'react'

interface NoPostProps {
  height?: string
}

const NoPost: FC<NoPostProps> = (props) => {
  const { children, height } = props

  const {
    colors: { dark },
    effects: { colorTrans },
  } = useTheme()

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="no-content">{children}</div>
      </div>
      <style jsx>{`
        .row {
          min-height: ${height ? height : '50vh'};
        }
        .no-content {
          font-size: 2.5rem;
          text-align: center;
          color: ${dark};
          transition: ${colorTrans};
        }
      `}</style>
    </div>
  )
}

export default NoPost
