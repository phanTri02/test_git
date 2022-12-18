import React from 'react'
import './course.css'

const CourseCard = () => {
  return (
    <div className='course__card'>
        <div className='course__card-img'>
            <div className='course__card-label'>
                Best Course
            </div>
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="" />
            <div className='course__card-price'>
                $20 USD
            </div>
        </div>
        <div className='course__card-content'>
            <div className='course__card-title'>JavaScript</div>
            <div className='course__card-info'>120 videos - 2 Teachers</div>
        </div>
    </div>
  )
}

export default CourseCard