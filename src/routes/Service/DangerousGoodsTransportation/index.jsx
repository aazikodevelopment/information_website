import React, { useEffect } from 'react'
import './DangerousGoodsTransportation.scss';
import GoodsTransportation from './GoodsTransportation';
export default function DangerousGoodsTransportation() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <GoodsTransportation/>
    </div>
  )
}
