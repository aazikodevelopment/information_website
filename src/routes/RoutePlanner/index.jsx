import React, { useEffect } from 'react'
import './RoutePlanner.scss';
import RoutePlannerContent from './RoutePlannerContent';
import RoutePlannerMap from './RoutePlannerMap';
export default function RoutePlanner() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <RoutePlannerMap/>
        <RoutePlannerContent/>
    </div>
  )
}
