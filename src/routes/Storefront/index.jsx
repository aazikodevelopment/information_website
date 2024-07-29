import React, { useEffect } from 'react'
import './Storefront.scss';
import StorefrontBanner from './StorefrontBanner';
import StorefrontDetails from './StorefrontDetails';
export default function Storefront() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <StorefrontBanner/>
      <StorefrontDetails/>
    </div>
  )
}
