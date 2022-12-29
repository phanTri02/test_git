import React from 'react'
import './home.css'
import image from '../../constants/image'

const Hero = () => {
  return (
    <div className='home__banner'>
        <div className='home__banner-text'>
            <div className='homebn__subtitle'>Online training</div>
            <div className='homebn__title'>COURSES OF EXCELLENT QUALITY</div>
            <div className='homebn__desc'>We know how large objects will act, 
            but things on a small scale</div>
            <div>
                <button className='homebn__getquotebtn'>Get Quote Now</button>
                <button className='homebn__learnmorebtn'>Learn More</button>
            </div>
        </div>
        <div className='home__banner-img'>
            <img src={image.hero} alt="" />
        </div>
    </div>
  )
}

export default Hero