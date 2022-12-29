import React from 'react'
import image from '../../constants/image'

const Education = () => {
  return (
    <div className='home__education'>
      <div className='home__education-img'>
        <img src={image.education} alt="" />
      </div>
      <div className='home__education-text'>
        <div className='homeedu__subtitle'></div>
        <div className='homeedu__title'>Make online seducation</div>
        <div className='homeedu__desc'>Problems trying to resolve the conflict between the two major realms of Newtonian mechanics.</div>
        <span>Learn More &gt;</span>
      </div>
    </div>
  )
}

export default Education