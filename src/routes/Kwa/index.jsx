import React, { useEffect } from 'react'
import AdvertisingSection from './advertisingSection';
import FeaturesSection from './FeaturesSection';
import './Kwa.scss';
import KwaBanner from './KwaBanner';
import PerformanceSection from './PerformanceSection';
export default function Kwa() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <KwaBanner/>
        <AdvertisingSection/>
        <PerformanceSection/>
      <FeaturesSection/>
    </div>
  )
}
