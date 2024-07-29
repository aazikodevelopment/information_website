import React from 'react'
import './FeaturesSection.scss';
import ProfileImage from '../../../assets/imges/main-profile.png';
import ArrowDesign from '../../../assets/icons/new-arrow.svg';
import CountryIcon from '../../../assets/icons/country1.svg';
import TownIcon from '../../../assets/icons/town.svg';
import SmallProfile from '../../../assets/icons/small-profile.svg';
export default function FeaturesSection() {
  return (
    <div>
        <div className='feature-section-all-contnet-alignment'>
            <div className='container'>
                <h1>How do Aaziko.com Keyword analysis features inspire success?</h1>
            </div>
            <div className='container6'>
                <div className='grid'>
                    <div className='grid-items'>
                        <div className='card'>
                            <div className='first-content'>
                                <img src={ArrowDesign}alt="ArrowDesign"/>
                                <span>1/5s</span>
                            </div>
                            <div className='center-text'>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.et velit interdum, ac aliquet odio 
                                    mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                                <span>{`Read more>`}</span>
                            </div>
                            <div className='profile'>
                                <div>
                                    <img src={SmallProfile} alt="SmallProfile"/>
                                </div>
                                <div>
                                    <p>Mr.nam</p>
                                    <span>Huy Thanh jewelry wholsale manager</span>
                                </div>
                            </div>
                            <div className='last-content'>
                                <div className='town-content'>
                                    <img src={TownIcon} alt="TownIcon"/>
                                    <span>Huy Thanh Jewelry</span>
                                </div>
                                <div className='town-content'>
                                    <img src={CountryIcon} alt="CountryIcon"/>
                                    <span>Vietnam</span>
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div className='grid-items'>
                        <div className='man-image'>
                            <img src={ProfileImage} alt="ProfileImage"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
