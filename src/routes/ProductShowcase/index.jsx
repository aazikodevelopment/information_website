import React, { useEffect } from 'react'
import AdvantagesSection from './AdvantagesSection';
import './ProductShowcase.scss';
import ProductShowcaseBanner from './ProductShowcaseBanner';
import Replacesection from './Replacesection';
import Setupsection from './Setupsection';
export default function ProductShowcase() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <ProductShowcaseBanner/>
      <AdvantagesSection/>
      <Setupsection/>
      <Replacesection/>
    </div>
  )
}

