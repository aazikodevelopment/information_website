import React from 'react'
import './KeywordsTrendsBanner.scss';
import HigherImage from '../../../assets/imges/higher.png';
export default function KeywordsTrendsBanner() {
  return (
    <div>
        <div className='keywords-trends-banner-all-contnet-alignment'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <h2>
                        Rank higher in search results with Aaziko.com Keywords Trends
                        </h2>
                        <p>
                            Discover popular keywords and use this to 
                            optimize product postings and KWA to rank higher in search results.
                        </p>
                    </div>
                    <div className='grid-items'>
                        <div className='image-style'>
                            <img src={HigherImage} alt="HigherImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
