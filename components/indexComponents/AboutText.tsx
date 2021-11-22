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
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit. Exercitation veniam Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim velit mollit. Exercitation veniam consequat sunt
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit.
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
