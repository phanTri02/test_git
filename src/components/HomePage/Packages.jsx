import React from 'react'
import Package from './Package'

const Packages = () => {
  return (
    <div className='home__packages'>
      <div className='home__packages-desc'>
        <div className='packages__subtitle'>Practice Advice</div>
              <div className='packages__title'>Packages that are aprodable</div>
              <div className='packages__desc'>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </div>
        </div>
      <div className='home__packages-courses'>
        <Package />
        <Package />
        <Package />
      </div>
    </div>
  )
}

export default Packages