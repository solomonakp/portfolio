import React from 'react'
import '@styles/globals.css'

const MyApp = ({ Component, pageProps }) => {
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps}></Component>, Component.title)
}

export default MyApp
