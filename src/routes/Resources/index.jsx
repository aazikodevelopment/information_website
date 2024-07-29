import React, { useEffect } from 'react'
import BuyersSection from './BuyersSection';
import Confidence from './Confidence';
import './Resources.scss';
import ResourcesBanner from './ResourcesBanner';
import ResourcesDetails from './ResourcesDetails';
import SourcingSection from './SourcingSection';
export default function Resources() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <ResourcesBanner/>
        <ResourcesDetails/>
        <SourcingSection/>
        <Confidence/>
        <BuyersSection/>
    </div>
  )
}
