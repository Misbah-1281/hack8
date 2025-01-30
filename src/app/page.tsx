import React from 'react'

import Header from './component/header'
import Herosection from './component/herosection'
import NewArrivals from './component/newarrivals'
import TopSelling from './component/topselling'
import HappyCustomers from './component/happycustomer'

import Footer from './component/footer'
import Newarrivals from './component/newarrivals'

import Offers from './component/offers'
import Dress from './component/Dressstyle'
import Upperheader from './component/Uheader'
// import Dress from './component/Dressstyle'


const home = () => {
  return (
    <div>
      <Upperheader/>
      <Header/>
      <Herosection/>
      {/* <Text/> */}
      <Newarrivals/>
      <TopSelling/>
      <Dress/>
      <HappyCustomers/>
      <Offers/>
      
      
    </div>
  )
}

export default home