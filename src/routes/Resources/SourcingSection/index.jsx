import React from 'react'
import './SourcingSection.scss';
import SearchIcon from '../../../assets/icons/search-max.svg';
export default function SourcingSection() {
  return (
    <div>
        <div className='sourcing-section-all-content-alignment-for-page'>
            <div className='container'>
                <div className='grid'>
                    <div className='grid-items'>
                        <div className='text'>
                            <span>New to Sourcing on Aaziko.com?</span>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </p>
                            <button>Learn More</button>
                        </div>
                    </div>
                    <div className='grid-items'>
                        <div className='icon-grid'>
                            <div className='icon-grid-items'>
                                <div className='icon'>
                                    <img src={SearchIcon} alt="SearchIcon"/>
                                </div>
                            </div>
                            <div className='icon-grid-items'>
                                <p>Step 1</p>
                                <span>Find products and seller</span>
                            </div>
                        </div>
                        <div className='icon-grid'>
                            <div className='icon-grid-items'>
                                <div className='icon'>
                                    <img src={SearchIcon} alt="SearchIcon"/>
                                </div>
                            </div>
                            <div className='icon-grid-items'>
                                <p>Step 2</p>
                                <span>Connect with sellers</span>
                            </div>
                        </div>
                        <div className='icon-grid'>
                            <div className='icon-grid-items'>
                                <div className='icon'>
                                    <img src={SearchIcon} alt="SearchIcon"/>
                                </div>
                            </div>
                            <div className='icon-grid-items'>
                                <p>Step 3</p>
                                <span>Place and protect order</span>
                            </div>
                        </div>
                        <div className='icon-grid'>
                            <div className='icon-grid-items'>
                                <div className='icon'>
                                    <img src={SearchIcon} alt="SearchIcon"/>
                                </div>
                            </div>
                            <div className='icon-grid-items'>
                                <p>Step 4</p>
                                <span>Pay on Aaziko.com</span>
                            </div>
                        </div>
                        <div className='icon-grid'>
                            <div className='icon-grid-items'>
                                <div className='icon'>
                                    <img src={SearchIcon} alt="SearchIcon"/>
                                </div>
                            </div>
                            <div className='icon-grid-items'>
                                <p>Step 5</p>
                                <span>Ship and receive your goods</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
