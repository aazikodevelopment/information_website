import React from 'react'
import './Aboutaaziko.scss';
import HomeImage from '../../../assets/imges/homepage 1.png';
export default function Aboutaaziko() {
  return (
    <div>
      <div className='about-aaziko-all-content-alignment'>
        <div className='container2'>
          <div className='grid'>
            <div className='grid-items'>
              <p>About Aaziko.com</p>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas integer semper morbi ut auctor in dolor. Porta sed aliquet 
                netus ullamcorper nibh quisque lacus. Vel eget massa, nec bibendum suspendisse. Porttitor et convallis.
              </span>
            </div>
            <div className='grid-items'>
              <img src={HomeImage} alt="HomeImage"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
