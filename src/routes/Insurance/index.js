import React from 'react'
import "./Insurance.scss";
import InsuranceBanner from './InsuranceBanner';
import InsuranceOtherOption from './InsuranceOtherOption';
import InsuranceGoodsInformation from './InsuranceGoodsInformation/index,';
import WhyByInsurance from './WhyByInsurance/WhyByInsurance';
import TypesInsuranceCover from './TypesInsuranceCover/TypesInsuranceCover';
import TypesInsurancePolicy from './TypesInsurancePolicy';
import WhatCovered from './WhatCovered';
import MarineInsuranceAct1963 from './MarineInsuranceAct1963';
export default function Insurance() {
  return (
    <div>
        <InsuranceBanner />
        <InsuranceOtherOption />
        <InsuranceGoodsInformation />
        <WhyByInsurance />
        <TypesInsuranceCover />
        <TypesInsurancePolicy />
        <WhatCovered />
        <MarineInsuranceAct1963 />
    </div>
  )
}
