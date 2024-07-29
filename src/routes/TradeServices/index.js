import React, { useEffect } from 'react'
import "./TradeServices.scss";
import TradeServicesBanner from './TradeServicesBanner';
import TradeServicesDetails from './TradeServicesDetails';
import WhatWeAreSteps from './WhatWeAreSteps';
export default function TradeServices() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div>
            <TradeServicesBanner />
            <TradeServicesDetails />
            <WhatWeAreSteps />
        </div>
    )
}
