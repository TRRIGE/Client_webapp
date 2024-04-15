import React from 'react'
import Image from 'next/image'
import hero from '../public/hero.jpg'
import heroPage from '../public/heropage.svg'

const page = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col text-center" style={{ marginTop: '100px' }}>
          <p id="heroTitle">Designer, Frontend Developer & Mentor</p>
          <p className="fs-4">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col text-center mt-4">
          <Image src={hero} height={205} width={205} alt="hero image" style={{ borderRadius: '100%' }} />
        </div>
      </div>
      <div className="row">
        <div className="col text-center" id="heroPage">
          <Image src={heroPage} height={350} width={860} alt="heroPage image" />
        </div>
      </div>
    </div>
  )
}

export default page