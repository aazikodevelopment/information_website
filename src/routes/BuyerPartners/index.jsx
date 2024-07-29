import React, { useEffect } from 'react'
import './BuyerPartners.scss';
import BuyerPartnersBanner from './BuyerPartnersBanner';
import Featuredpartners from './Featuredpartners';
export default function BuyerPartners() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <BuyerPartnersBanner/>
        <Featuredpartners/>
    </div>
  )
}
