import React, { useEffect } from 'react'
import "./MyAccount.scss";
import MyAccountSidebar from './MyAccountSidebar';
import PersonalInformation from './PersonalInformation';
export default function MyAccount() {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }, [])
    return (
        <div className="my-account-section-details">
            <div className="my-account-order-section">
                <div className="container">
                    <div className="my-account-order-alignment">
                        <MyAccountSidebar />
                        <PersonalInformation />
                    </div>

                    {/* <div>
                            {id === "profile-information" && <PersonalProfileInformation />}
                        </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div >
    )
}
