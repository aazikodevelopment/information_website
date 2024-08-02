import React, { useEffect, useState } from "react";
import "./CustomsEasy.scss";
import EffortlessCustoms from "./EffortlessCustoms";
import CustomsProblems from "./CustomsProblems";
import MakeCustomsEasy from "./MakeCustomsEasy";
export default function Customs2() {

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    APiCall();
  }, [isAdmin]);
  
  const APiCall = () => {
    const queryParams = window.location.href.split('?')[1];
    if (!queryParams) return;

    const params = queryParams.split('&');

    const tokenParam = params.find(param => param.includes('token='));

    if (tokenParam) {
      const tokenValue = tokenParam.split('=')[1];
      const token = tokenValue.replace(/%22/g, "")
      const options = {
        headers: { 'x-auth-token': `${token}` }
      };

      // Use fetch to make the API call
      fetch('https://api.aaziko.com/sayaexim/v1/type/authenticate-admin', options)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log(data);
          if (data.success === true) {
            setIsAdmin(true);
          } else {
            setIsAdmin(false);
          }
        })
        .catch(error => {
          console.error('There was a problem with the fetch operation:', error);
        });
    }
  };


  return (
    isAdmin === true ? (<>
      <div className="customs-easy-section">
        <div className="customs-easy-banner-alignment">
          <div className="container">
            <div className="customs-easy-banner-details">
              <h2>
                <span>Imagine</span> <br />
                Millions of Products <br />
                Arround Us
              </h2>

              <div className="second-details-alignment">
                <h2>
                  Every Country Has <br /> There <span>Own Customs</span> Rules.
                </h2>
              </div>
            </div>

            <EffortlessCustoms />
            <CustomsProblems />
            <MakeCustomsEasy />
          </div>
        </div>
      </div>
    </>) : (<h4 style={{ textAlign: "center",marginTop:"50px" }}>You are not authorised to View this page.</h4>)
  );
}
