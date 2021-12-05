import useTheme from '@hooks/useTheme'

const AboutText = () => {
  const {
    media: { maxSm },
  } = useTheme()
  return (
    <div className="col-12 col-md-6 col-lg-5">
      <div className="about-text">
        <h2>About Me</h2>
        <p>
          Hello again! I&apos;m Solomon Chokor. A Software Engineer with a Focus
          on Front-end Engineering. I got into software engineering after
          various failed attempts at building my own product with limited coding
          experience. These days I enjoy building user interfaces which are
          accessible, usable, performant and scalable.
        </p>
        <p>
          Asides anything code, I enjoy cooking, reading, movies and meaningful
          conversations. I know I said asides &#128579;, but I also enjoy
          talking about the web and helping those around me become better
          developers whilst learning from them.
        </p>
        <p>
          Some of the tools in my toolkit are but not limited to:{' '}
          <b>
            HTML, CSS/SASS, JavaScript/TypeScript, React,Next.js, Redux,
            CSS-in-JS, Anime.js, jest, React testing library, Webpack, Strapi,
            Wordpress, Command line and Vercel
          </b>{' '}
        </p>
      </div>

      <style jsx>{`
        .col-12 {
          @media (${maxSm}) {
            margin: 0 auto;
          }
          .about-text {
            overflow: hidden;
          }

          h2 {
            text-align: left !important;
          }
        }
      `}</style>
    </div>
  )
}

export default AboutText
