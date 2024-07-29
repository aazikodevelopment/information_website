import React from 'react'
import './LsqsBanner.scss';
import RfqBanner from '../../../assets/imges/rfq.png';
export default function LsqsBanner() {
  return (
    <div>
        <div className='lsqs-banner-all-contnet-alignment'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <h2>
                        Streamline lead generation and start sales with Aaziko.com LSQ
                        </h2>
                        <p>
                            Connect with buyers with a demand for your products in the Aaziko
                            .com LSQ market. Browse order requests and provide quotes to warm leads to streamline your sales process.
                        </p>
                    </div>
                    <div className='grid-items'>
                        <div className='banner-style'>
                            <img src={RfqBanner}alt="RfqBanner"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

