import React, { useEffect } from 'react'
import "./SupplierPayment.scss";
import SupplierPaymentGuarantee from './SupplierPaymentGuarantee';
import SupplierSecurePayment from './SupplierSecurePayment';
import SupplierNotAcceptPayment from './SupplierNotAcceptPayment';
export default function SupplierPayment() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="supplier-payment-section">
            <div className="supplier-payment-bg-alignment">
                <div className="container">
                    <div className="supplier-payment-banner-details-alignment">
                        <h4>Aaziko Provide Secure
                            payment to supplier.</h4>
                        <p>At Aaziko, we understand the importance of convenient and secure payment options for your international trade transactions. That's why we offer a range of flexible and reliable payment solutions tailored to meet your needs.</p>
                    </div>
                </div>
            </div>
            <div className=''>
                <SupplierPaymentGuarantee />
            </div>
            <div>
                <SupplierSecurePayment />
            </div>
            <div>
                <SupplierNotAcceptPayment />
            </div>
        </div>
    )
}
