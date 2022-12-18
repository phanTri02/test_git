import React from 'react'
import './course.css'
import image from '../../constants/image'

const SelectedCourse = () => {
  return (
    <div className='app__selected'>
    <div className='app__selected-img'>
        <img src={image.banner} alt="" />
    </div>
    <div className='app__selected-text'>
      <div className='selected__subtitle'>SELECTED COURSE</div>
      <div className='selected__title'>People Taking Courses</div>
      <div className='selected__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
      <div className='selected__testi'>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>6,000</div>
          <div className='testi__item-desc'>People Views</div>
        </div>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>4,000</div>
          <div className='testi__item-desc'>Users</div>
        </div>
        <div className='selected__testi-item'>
          <div className='testi__item-title'>100</div>
          <div className='testi__item-desc'>Courses</div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default SelectedCourse