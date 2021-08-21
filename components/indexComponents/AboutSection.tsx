import AboutImage from '@indexComponents/AboutImage'
import AboutText from '@indexComponents/AboutText'
import useReveal from '@hooks/useReveal'

const AboutSection = () => {
  useReveal({
    ref: '#about-section',
  })

  return (
    <section id="about-section" className="section-space">
      <div className="container">
        <div className="row">
          <AboutImage />
          <div className="d-none d-lg-block col-1"></div>
          <AboutText />
        </div>
      </div>
      <style jsx>{`
        #about-section {
          padding-top: 20px;
        }
      `}</style>
    </section>
  )
}

export default AboutSection
