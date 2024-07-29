import React from 'react'
import './B2bSalesBanner.scss';
import MapImage from '../../../assets/imges/sales-map.png';
export default function B2bSalesBanner() {
  return (
    <div>
        <div className='new-sales-banner-design'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <p>
                        Grow your margins with a suit of tools built for B2B sales
                        </p>
                        <span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas integer semper morbi ut auctor in dolor. Porta sed aliquet netus ullamcorper nibh quisque lacus. Vel eget massa, nec bibendum suspendisse. Porttitor et convallis.
                        </span>
                    </div>
                    <div className='grid-items'>
                        <img src={MapImage}alt="MapImage"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
