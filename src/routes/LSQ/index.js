import React from 'react'
import "./LSQ.scss";
import LSQBanner from './LSQBanner';
import LSQTab from './LSQTab/LSQTab';
import LSQSearch from './LSQSearch';
import LSQOtherDetails from './LSQOtherDetails';
import LSQIndustryInsight from './LSQIndustryInsight';
import LSQAboutUs from './LSQAboutUs';
import WhyLSQAaziko from './WhyLSQAaziko';
import LSQHowItWorks from './LSQHowItWorks';
import LSQHowToUse from './LSQHowToUse';
import LSQGrowyourBusiness from './LSQGrowyourBusiness';
export default function LSQ() {
  return (
    <div className="lsq-section">
        <LSQBanner />
        <LSQTab />
        <LSQSearch />
        <LSQOtherDetails />
        <LSQIndustryInsight />
        <LSQAboutUs />
        <WhyLSQAaziko />
        <LSQHowItWorks />
        <LSQHowToUse />
        <LSQGrowyourBusiness />
    </div>
  )
}
