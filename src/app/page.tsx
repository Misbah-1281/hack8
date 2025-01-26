import React from 'react'
import Upperheader from './component/upperheader'
import Header from './component/header'
import Herosection from './component/herosection'
import NewArrivals from './component/newarrivals'
import TopSelling from './component/topselling'
import HappyCustomers from './component/happycustomer'
import DressStyle from './component/Dressstyle'
import Text from './component/text'
import Upperfooter from './component/upperfooter'
import Footer from './component/footer'
import Newarrivals from './component/newarrivals'


const home = () => {
  return (
    <div>
      <Upperheader/>
      <Header/>
      <Herosection/>
      <Text/>
      <Newarrivals/>
      <TopSelling/>
      <DressStyle/>
      <HappyCustomers/>
      
    </div>
  )
}

export default home