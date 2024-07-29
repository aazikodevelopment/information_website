import React, { useEffect } from 'react'
import './LclShipping.scss';
import LessContainerLoad from './LessContainerLoad';
export default function LclShipping() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <LessContainerLoad/>
    </div>
  )
}
