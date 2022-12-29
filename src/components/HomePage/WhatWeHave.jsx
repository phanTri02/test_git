import React from 'react'
import image from '../../constants/image'

const WhatWeHave = () => {
  return (
    <div className='home__whatwehave'>
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>Lifetime access</h4>
            <div className='whatwehave-line'></div>
            <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>Certified Teacher</h4>
            <div className='whatwehave-line'></div>
            <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
        <div className='whatwehave-item'>
            <img src={image.whatwehave} alt="" />
            <h4>Training Courses</h4>
            <div className='whatwehave-line'></div>
            <p>The gradual accumulation of information about atomic and small-scale behaviour...</p>
        </div>
    </div>
  )
}

export default WhatWeHave