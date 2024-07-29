import React, { useEffect } from 'react'
import "./SupplierMemberships.scss";
import SupplierMembershipsBanner from './SupplierMembershipsBanner';
import SupplierDataPerformance from './SupplierDataPerformance';
import SupplierGrowBusiness from './SupplierGrowBusiness';
import SupplierSuccessStory from './SupplierSuccessStory';
import SupplierLatestBlog from './SupplierLatestBlog';
import GrowyourBusiness from '../Aboutus/GrowyourBusiness';
export default function SupplierMemberships() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="supplier-memberships-section">
            <SupplierMembershipsBanner />
            <SupplierDataPerformance />
            <SupplierGrowBusiness />
            <SupplierSuccessStory />
            <SupplierLatestBlog />
            <GrowyourBusiness />
        </div>
    )
}
