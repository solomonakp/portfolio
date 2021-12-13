import useProgress from '@hooks/useProgress'
import '@styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  useProgress()

  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps}></Component>, Component.title)
}

export default MyApp
