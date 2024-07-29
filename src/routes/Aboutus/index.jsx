import React, { useEffect } from 'react'
import Aboutaaziko from './Aboutaaziko';
import './Aboutus.scss';
import AboutusBanner from './AboutusBanner';
import GetSection from './GetSection';
import GrowSection from './GrowSection';
import GrowyourBusiness from './GrowyourBusiness';
import LatestBlog from './LatestBlog';
import SellerContent from './SellerContent';
export default function Aboutus() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <AboutusBanner/>
        <Aboutaaziko/>
        <GrowSection/>
        <GetSection/>
        <SellerContent/>
        <LatestBlog/>
        <GrowyourBusiness/>
    </div>
  )
}
