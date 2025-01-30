import React from 'react'

import Like from './like'
import Header from '../component/header'
import Upperheader from '../component/Uheader'
import Cart from './cart'
import ReviewsSection from './Review'
import ReviewMore from './ReviewMore'
import ReviewLast from './reviewLast'


const page = () => {
  return (
    <div>
      <Upperheader/>
        <Header/>
        <Cart/>
        <ReviewsSection/>
        <ReviewMore/>
        <ReviewLast/>
        <Like/>

    </div>
  )
}

export default page