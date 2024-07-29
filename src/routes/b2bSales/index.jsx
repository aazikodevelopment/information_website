import React, { useEffect } from 'react'
import './b2bSales.scss';
import B2bSalesBanner from './B2bSalesBanner';
import Communication from './Communication';
import GenerationSection from './GenerationSection';
import OrderManagement from './OrderManagement';
import StorefrontSection from './StorefrontSection';
import Submenu from './Submenu';
export default function B2bSales() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <B2bSalesBanner/>
        <Submenu/>
        <StorefrontSection/>
        <Communication/>
        <GenerationSection/>
        <OrderManagement/>
    </div>
  )
}

