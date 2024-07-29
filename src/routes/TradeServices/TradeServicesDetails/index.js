import React from 'react'
import "./TradeServicesDetails.scss";
import TradeServicesTab from './TradeServicesTab/TradeServicesTab';
import WhatWeSupply from './WhatWeSupply';
import WhatWeAre from './WhatWeAre';
export default function TradeServicesDetails() {
    return (
        <div className="trade-services-details-alignment">
            <div className="container">
                <div>
                    <TradeServicesTab />
                    <WhatWeSupply />
                    <WhatWeAre />
                </div>
            </div>
        </div>
    )
}
