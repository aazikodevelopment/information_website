import React from 'react'
import './ResourcesBanner.scss';
import LeptopImage from '../../../assets/imges/leptop.png';
export default function ResourcesBanner() {
  return (
    <div>
        <div className='resources-banner-all-content-alignment'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <h1>
                        Source, pay for, and ship your goods on Aaziko.com
                        </h1>
                    </div>
                    <div className='grid-items'>
                        <div className='image'>
                            <img src={LeptopImage} alt="LeptopImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
