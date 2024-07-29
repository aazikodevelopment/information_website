import React, { useEffect } from 'react'
import './Warehousing.scss';
import WarehousingDetails from './WarehousingDetails';
export default function Warehousing() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <WarehousingDetails/>
    </div>
  )
}
