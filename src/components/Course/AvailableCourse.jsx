import React from 'react'
import './course.css'
import CourseCard from './CourseCard'

const AvailableCourse = () => {
  return (
    <div className='app__available'>
      <div className='app__available-courses'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
      <div className='app__available-desc'>
        <div className='available__subtitle'>AVAILABLE FOR YOU</div>
              <div className='available__title'>Available Courses</div>
              <div className='available__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
              <button className='available__registerbutton'>See all</button>
        </div>
    </div>
  )
}

export default AvailableCourse