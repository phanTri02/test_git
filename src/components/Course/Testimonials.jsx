import React from 'react'
import './course.css'
import {AiFillStar} from 'react-icons/ai';

const Testimonials = () => {
  return (
    <div className='app__testimonials'>
      <div className='app__testi-title'>Testimonials</div>
      <div className='app__testi-items'>
        <div className='app__testi-item'>
          <div className='customer__info'>
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="" />
            <div className='customer__basicinfo'>
              <h4 className='customer__name'>Harry Truong</h4>
              <p className='customer__role'>Client</p>
            </div>
          </div>
          <div className='customer__stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className='customer__comment'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."</div>
        </div>
        <div className='app__testi-item'>
          <div className='customer__info'>
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="" />
            <div className='customer__basicinfo'>
              <h4 className='customer__name'>Harry Truong</h4>
              <p className='customer__role'>Client</p>
            </div>
          </div>
          <div className='customer__stars'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <div className='customer__comment'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rutrum dapibus luctus."</div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials