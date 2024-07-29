import React from 'react'
import './AuditingandComplianceBanner.scss';
import Icons from '../../../assets/icons/three-icons.svg';
export default function AuditingandComplianceBanner() {
  return (
    <div>
      <div className='auditingand-compliance-banner'>
        <div className='container'>
            <div className='logo-icon-center-alignment'>
                <img src={Icons}alt="Icons"/>
            </div>
            <h1>Aaziko: Auditing and Compliance Made Easy</h1>
        </div>
      </div>
    </div>
  )
}
