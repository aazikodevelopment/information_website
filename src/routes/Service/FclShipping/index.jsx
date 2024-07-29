import React, { useEffect } from 'react'
import './FclShipping.scss';
import FullContainerLoad from './FullContainerLoad';
export default function FclShipping() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <FullContainerLoad/>
    </div>
  )
}
