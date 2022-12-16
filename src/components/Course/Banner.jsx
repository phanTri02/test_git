import React from 'react'
import './course.css'
import image from '../../constants/image'

const Banner = () => {
  return (
    <div className='app__banner'>
        <div className='app__banner-text'>
            <div className='banner__subtitle'>Let's <span>Begins</span></div>
            <div className='banner__title'>Let's Find The Right <span>Course</span> For you</div>
            <div className='banner__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
            <button className='banner__registerbutton'>Register</button>
        </div>
        <div className='app__banner-img'>
            <img src={image.banner} alt="" />
        </div>
    </div>
  )
}

export default Banner