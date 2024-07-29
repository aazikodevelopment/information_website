import React from 'react'
import './BuyerPartnersBanner.scss';
import ProductImage from '../../../assets/imges/Product.png';
export default function BuyerPartnersBanner() {
  return (
    <div>
        <div className='buyers-partner-banner-all-contnet-alignment'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <button>Product Research</button>
                        <h3>Helium 10</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing 
                            elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.Learn more
                        </p>
                    </div>
                    <div className='grid-items'>
                        <img src={ProductImage} alt="ProductImage"/>    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
