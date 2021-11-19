import React from 'react'
import Button from '@layout/Button'

const LandingText = () => {
  return (
    <div className="col-12 col-lg-6">
      <div className="left-container d-flex flex-column justify-content-center">
        <h1>Hire Freelancers With better reviews</h1>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud ametnostrud amet.
        </p>
        <div className="d-flex">
          <div className="contact-btn-container">
            <Button bgColor="primary">Contact me</Button>
          </div>
          <div className="download-btn-btn-container">
            <Button outline={true}>Download Cv</Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        h1 {
          margin-bottom: 1rem;
        }
        p {
          margin-bottom: 1.5rem;
        }
        .contact-btn-container {
          margin-right: 1.5rem;
        }
      `}</style>
    </div>
  )
}

export default LandingText
