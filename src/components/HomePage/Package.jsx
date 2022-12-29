import React from 'react'
import {AiOutlineDownload} from "react-icons/ai"

const Package = () => {
  return (
    <div className='home__package'>
        <div className='home__package-img'>
            <div className='home__package-label'>
                Sale
            </div>
            <img src="https://cdn.sforum.vn/sforum/wp-content/uploads/2022/04/p2.jpg" alt="" />
            <div className='home__package-price'>
                $20 USD
            </div>
        </div>
        <div className='home__package-content'>
            <h4>English Department</h4>
            <h3>Graphic Design</h3>
            <p className='package__desc'>We focus on ergonomics and meeting you where you work. It's only a keystroke away.</p>
            <p className='package__price'>$6.48</p>
            <div className='package__purchase'>
                <AiOutlineDownload />
                <p>13 Purchases</p>
            </div>
            <button>Learn more &gt;</button>
        </div>
    </div>
  )
}

export default Package