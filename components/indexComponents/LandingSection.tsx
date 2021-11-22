import React from 'react'
import LandingImage from '@indexComponents/LandingImage'
import LandingText from '@indexComponents/LandingText'

const LandingSection = () => {
  return (
    <section id="landing-section" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <LandingText />
          <div className="d-none d-lg-block col-1"></div>
          <LandingImage />
        </div>
      </div>
      <style jsx>{`
        #landing-section {
          min-height: 100vh;
        }
      `}</style>
    </section>
  )
}

export default LandingSection
