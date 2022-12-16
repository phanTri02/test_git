import React from 'react'
import {AvailableCourse, Banner, SelectedCourse, Testimonials, WhatWeGive} from '../../components'

const Course = () => {
  return (
    <div>
        <Banner />
        <WhatWeGive />
        <SelectedCourse />
        <AvailableCourse />
        <Testimonials />
    </div>
  )
}

export default Course