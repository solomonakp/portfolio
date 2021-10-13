import React from 'react'
import Head from 'next/head'
import { Logo } from '@svgs'
import useTheme from '@hooks/useTheme'
import Footer from '@layout/Footer'
import { Header } from '@layout/Header'
import Loader from '@layout/Loader'
import { UiProvider, useUi } from '@context/ui/uiContext'

export interface LayoutProps {
  isMain: boolean
}

export const Layout: React.FC<LayoutProps> = ({ children, isMain }) => {
  const {
    colors: { light, secondary, dark },
    effects: { bgTrans, colorTrans },
    size: { sectionHeading, mainHeading, resSectionHeading, resMainHeading },
    media: { maxSm, minXxL },
    spacing: { sectionSpace, headingSpace, resSectionSpace },
  } = useTheme()

  const {
    state: { isLoading },
    dispatch,
  } = useUi()

  if (isLoading) {
    return <Loader fixed={true} dispatch={dispatch} />
  }

  return (
    <div id="layout">
      <Head>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Header theme={true} logo={<Logo width={55} height={43} />} />
      <main>{children}</main>

      <Footer isMain={isMain} />
      <style jsx global>
        {`
          body::-webkit-scrollbar {
            background-color: ${light};
            width: 16px;
            transition: all 300ms ease-in-out;
          }
          body {
            scrollbar-width: thin;
            scrollbar-color: #babac0;
          }
          body::-webkit-scrollbar-track {
            background-color: ${light};
            transition: ${bgTrans};
          }
          body::-webkit-scrollbar-thumb {
            background-color: #babac0;
            border-radius: 16px;
            border: 4px solid ${light};
            transition: ${bgTrans};
          }

          body::-webkit-scrollbar-button {
            display: none;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            letter-spacing: -0.02em;
            font-weight: 500;
            color: ${secondary};
            transition: ${colorTrans};
            min-height: 0vw;
          }
          h1 {
            font-size: ${resMainHeading};
          }

          h2,
          .h2 {
            font-size: ${resSectionHeading};
          }
          p {
            color: ${dark};
            transition: ${colorTrans};
          }
          .left-container {
            width: 100%;
            height: 100%;
            max-width: 540px;
            @media (${maxSm}) {
              margin: 0 auto;
            }
          }

          .page-spacing {
            width: 100%;
            margin: 100px 0;
          }
          .section-space {
            margin-bottom: ${sectionSpace};
            @media (${maxSm}) {
              margin-bottom: ${resSectionSpace};
            }
          }
          .section-heading-space {
            margin-bottom: ${headingSpace};
          }

          @media (${minXxL}) {
            h1 {
              font-size: ${mainHeading};
            }
            h2,
            .h2 {
              font-size: ${sectionHeading};
            }
          }

          @media (${maxSm}) {
            .image-space {
              margin-top: 3rem;
            }
          }
          .trim {
            display: -webkit-box;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}
      </style>
    </div>
  )
}

export const getLayout = (page: React.ReactElement, title: string) => {
  const isMain = title === 'main page' ? true : false

  return (
    <UiProvider>
      <Layout isMain={isMain}>{page}</Layout>
    </UiProvider>
  )
}
