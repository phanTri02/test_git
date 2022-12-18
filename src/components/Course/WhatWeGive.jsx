import React from 'react'
import './course.css'
import {BsPerson} from 'react-icons/bs'

const WhatWeGive = () => {
  return (
    <div className='app__whatwegive'>
        <div className='app__whatwegive__content'>
            <div className='banner__subtitle'>WHAT WE GIVE</div>
            <div className='whatwegive__title'>What do You Get From Us</div>
            <div className='whatwegive__desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
        </div>
        <div className='app__whatwegive__item'>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><BsPerson /></div>
                <div className='whatwegive__item-title'>Professional Teacher</div>
                <div className='whatwegive__item-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
            </div>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><BsPerson /></div>
                <div className='whatwegive__item-title'>Professional Teacher</div>
                <div className='whatwegive__item-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
            </div>
            <div className='whatwegive__item'>
                <div className='whatwegive__item-icon'><BsPerson /></div>
                <div className='whatwegive__item-title'>Professional Teacher</div>
                <div className='whatwegive__item-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam dignissim, sem non convallis molestie.</div>
            </div>
        </div>
    </div>
  )
}

export default WhatWeGive