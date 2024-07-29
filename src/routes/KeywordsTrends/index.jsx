import React, { useEffect } from 'react'
import FeaturesSection from '../Kwa/FeaturesSection';
import AnalysisSection from './AnalysisSection';
import KeyBenefits from './KeyBenefits';
import './KeywordsTrends.scss';
import KeywordsTrendsBanner from './KeywordsTrendsBanner';
export default function KeywordsTrends() {
  useEffect(() => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}, [])
  return (
    <div>
        <KeywordsTrendsBanner/>
        <KeyBenefits/>
        <AnalysisSection/>
        <FeaturesSection/>
    </div>
  )
}
