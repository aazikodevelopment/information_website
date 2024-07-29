import React, { useEffect } from 'react'
import InstantQuotes from './InstantQuotes';
import LargestDigital from './LargestDigital';
import './LogisticsService.scss';
import LogisticsServiceBanner from './LogisticsServiceBanner';
export default function LogisticsService() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <LogisticsServiceBanner/>
        <LargestDigital/>
        <InstantQuotes/>
    </div>
  )
}

