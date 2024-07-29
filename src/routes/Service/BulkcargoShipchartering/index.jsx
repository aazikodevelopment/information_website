import React, { useEffect } from 'react'
import BulkcargoDetails from './BulkcargoDetails';
import './BulkcargoShipchartering.scss';
export default function BulkcargoShipchartering() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <BulkcargoDetails/>
    </div>
  )
}
