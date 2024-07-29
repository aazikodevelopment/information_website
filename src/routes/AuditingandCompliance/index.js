import React, { useEffect } from 'react'
import './AuditingandCompliance.scss';
import AuditingandComplianceBanner from './AuditingandComplianceBanner';
import WelcomeSection from './WelcomeSection';
import Auditing from './Auditing';
import Compliance from './Compliance';
import Getstarted from './Getstarted';
export default function AuditingandCompliance() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
      <AuditingandComplianceBanner/>
      <WelcomeSection/>
      <Auditing/>
      <Compliance/>
      <Getstarted/>
    </div>
  )
}
