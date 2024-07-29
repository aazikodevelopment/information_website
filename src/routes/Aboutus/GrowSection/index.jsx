import React from 'react'
import './GrowSection.scss';
import GrowImage from '../../../assets/imges/grow.png';
import Righticon from '../../../assets/icons/right-blue.svg';
export default function GrowSection() {
  return (
    <div>
        <div className='grow-section-design'>
            <div className='container2'>
                <div className='text'>
                    <h4>Grow with Aaziko.com</h4>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas.</span>
                </div>
                <div className='grid'>
                    <div className='grid-items'>
                        <div className='image'>
                        <img src={GrowImage}alt="GrowImage"/>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <p>Reach millions of business buyers globally</p>
                        <span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Egestas.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas.
                        </span>
                        <div className='icon-text'>
                            <a>See the global demands for your product</a>
                            <img src={Righticon} alt="Righticon"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
