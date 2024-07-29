import React, { useEffect } from 'react'
import './Lsqs.scss';
import LsqsBanner from './LsqsBanner';
import LsqsDetails from './LsqsDetails';
import Practices from './Practices';
export default function Lsqs() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <LsqsBanner/>
        <LsqsDetails/>
        <Practices/>
    </div>
  )
}
