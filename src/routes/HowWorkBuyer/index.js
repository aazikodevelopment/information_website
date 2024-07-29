import React, { useEffect } from "react";
import "./HowWorkBuyer.scss";
import RequirementImg from "../../assets/Image/how1.svg";
import VerifySuppler from "../../assets/Image/how2.svg";
import ManufacturingImg from "../../assets/Image/how3.svg";
import InspectionsImg from "../../assets/Image/how4.svg";
import DeliveryImg from "../../assets/Image/how5.svg";
import CostomsImg from "../../assets/Image/how6.svg";
import PaymentImg from "../../assets/Image/how7.svg";
import MoneyBackImg from "../../assets/Image/how8.svg";
import WorkBuyerArrow1 from "../../assets/icons/work-wrrow-1.svg";
import WorkBuyerArrow2 from "../../assets/icons/work-arrow-2.svg";
import WorkBuyerArrow3 from "../../assets/icons/work-arrow-3.svg";
import WorkBuyerArrow4 from "../../assets/icons/work-arrow-4.svg";
export default function HowWorkBuyer() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="how-we-work-for-buyer-section">
      <div className="container">
        <div className="how-we-work-buyer-heading">
          <h4>
            How We Work For <span>Buyer</span>
          </h4>
        </div>

        <div className="how-we-work-buyer-details-content-alignment">
          <div className="right-side-step">
            <div className="right-side-step-details">
              <div className="right-side-img">
                <img src={RequirementImg} alt="RequirementImg" loading="lazy" />
              </div>
              <h6>Share Your Requirements</h6>
              <p>Buyer Just Share As There Requirements. And We Find Best Deal From Our 200 Thousand Manufacture</p>
            </div>
          </div>

          <div className="left-side-step">
            <div className="left-side-step-details">
              <div className="left-side-img">
                <img src={VerifySuppler} alt="VerifySuppler" loading="lazy" />
              </div>
              <h6>Find verifiy suppler</h6>
              <p>We assure global buyers that their purchase is legitimate and in safe hands all the time.</p>
            </div>
            <div className="verify-suppler-arrow-alignment">
              <img src={WorkBuyerArrow1} alt="WorkBuyerArrow1" />
            </div>
          </div>

          <div className="right-side-step">
            <div className="right-side-arrow-alignment">
              <img src={WorkBuyerArrow2} alt="WorkBuyerArrow2" />
            </div>
            <div className="right-side-step-details">
              <div className="right-side-img manufactring-img">
                <img src={ManufacturingImg} alt="ManufacturingImg" loading="lazy" />
              </div>
              <h6>Manufacturing</h6>
              <p>
                After finalizing products by buyers, buyers need to fill the detailed order form. And the seller will give confirmation, and then the
                seller will start manufacturing. And buyers will get a daily update through photos and videos.
              </p>
            </div>
          </div>

          <div className="left-side-step">
            <div className="left-side-step-details">
              <div className="left-side-img inspections-img">
                <img src={InspectionsImg} alt="InspectionsImg" loading="lazy" />
              </div>
              <h6>Inspections</h6>
              <p>
                Once manufacturing is complete, our expert team will go and check goods and do lab testing if require and send the full inspection
                report to buyers.
              </p>
            </div>
            <div className="verify-supple-arrow-alignment">
              <img src={WorkBuyerArrow3} alt="WorkBuyerArrow3" />
            </div>
          </div>

          <div className="right-side-step">
            <div className="delivery-arrow-alignment">
              <img src={WorkBuyerArrow4} alt="WorkBuyerArrow4" />
            </div>
            <div className="right-side-step-details">
              <div className="right-side-img manufactring-img">
                <img src={DeliveryImg} alt="DeliveryImg" loading="lazy" />
              </div>
              <h6>Delivery</h6>
              <p>
                Benefit from our strong logistics network for cost-effective solutions. We handle all Incoterms, tailoring services to your needs.
                Choose us for streamlined logistics at competitive rates.
              </p>
            </div>
          </div>
        </div>

        <div className="how-we-work-buyer-bottom-details-alignment">
          <div className="how-we-work-buyer-bottom-grid">
            <div className="how-we-work-buyer-bottom-grid-item">
              <div className="custom-img">
                <img src={CostomsImg} alt="CostomsImg" />
              </div>
              <p>Customs</p>
            </div>
            <div className="how-we-work-buyer-bottom-grid-item">
              <div className="payment-img">
                <img src={PaymentImg} alt="PaymentImg" />
              </div>
              <p>Payment</p>
            </div>
            <div className="how-we-work-buyer-bottom-grid-item">
              <div className="money-back-img">
                <img src={MoneyBackImg} alt="MoneyBackImg" />
              </div>
              <p>
                money back <br /> guarantee
              </p>
            </div>
          </div>
        </div>

        <div className="connect-us-section-alignment">
          <h6>Connect With Us</h6>

          {/* <div className="connect-us-section-form-alignment">
            <div className="connect-us-section-form-input">
              <input type="text" placeholder="Enter Product Name" />
            </div>

            <div className="two-input-grid-alignment">
              <div className="connect-us-section-form-input">
                <input type="text" placeholder="Quantity" />
              </div>
              <div className="connect-us-section-form-input">
                <select>
                  <option value=" Bag"> Bag</option>
                  <option value=" Cubic centimeter (cm²)"> Cubic centimeter (cm²)</option>
                  <option value=" Cubic meter (m²)"> Cubic meter (m²)</option>
                  <option value=" Gallon (gal)"> Gallon (gal)</option>
                  <option value=" Gram (g)"> Gram (g)</option>
                  <option value=" Hectare (ha)"> Hectare (ha)</option>
                  <option value=" Kilometer (km)"> Kilometer (km)</option>
                  <option value="20ft Container">20ft Container</option>
                  <option value="40ft Container">40ft Container</option>
                  <option value="40ft HQ">40ft HQ</option>
                  <option value="Acre (ac)">Acre (ac)</option>
                  <option value="Barrel">Barrel</option>
                  <option value="Barrel (bbl)">Barrel (bbl)</option>
                  <option value="Bottle">Bottle</option>
                  <option value="Box">Box</option>
                  <option value="Can">Can</option>
                  <option value="Carton">Carton</option>
                  <option value="Centimeter (cm)">Centimeter (cm)</option>
                  <option value="Cubic foot (ft²)">Cubic foot (ft²)</option>
                  <option value="Cubic inch (in²)">Cubic inch (in²)</option>
                  <option value="Cubic kilometer (km²)">Cubic kilometer (km²)</option>
                  <option value="Cubic mile (mi²)">Cubic mile (mi²)</option>
                  <option value="Cubic millimeter (mm²)">Cubic millimeter (mm²)</option>
                  <option value="Cubic yard (yd²)">Cubic yard (yd²)</option>
                  <option value="Drum">Drum</option>
                  <option value="Fluid ounce (fl oz)">Fluid ounce (fl oz)</option>
                  <option value="Foot (ft)">Foot (ft)</option>
                  <option value="Inch (in)">Inch (in)</option>
                  <option value="Jar">Jar</option>
                  <option value="Kilogram (kg)">Kilogram (kg)</option>
                  <option value="Liter (L)">Liter (L)</option>
                  <option value="Meter (m)">Meter (m)</option>
                  <option value="Microgram (µg)">Microgram (µg)</option>
                  <option value="Mile (mi)">Mile (mi)</option>
                  <option value="Milligram (mg)">Milligram (mg)</option>
                  <option value="Milliliter (mL)">Milliliter (mL)</option>
                  <option value="Millimeter (mm)">Millimeter (mm)</option>
                  <option value="Nos">Nos</option>
                  <option value="Ounce (oz)">Ounce (oz)</option>
                  <option value="Packs">Packs</option>
                  <option value="Pairs">Pairs</option>
                  <option value="Pieces">Pieces</option>
                  <option value="Pint (pt)">Pint (pt)</option>
                  <option value="Pouch">Pouch</option>
                  <option value="Pound (lb)">Pound (lb)</option>
                  <option value="Quart (qt)">Quart (qt)</option>
                  <option value="Rods">Rods</option>
                  <option value="Rolls">Rolls</option>
                  <option value="Sets">Sets</option>
                  <option value="Sheets">Sheets</option>
                  <option value="Square centimeter (cm²)">Square centimeter (cm²)</option>
                  <option value="Square foot (ft²)">Square foot (ft²)</option>
                  <option value="Square inch (in²)">Square inch (in²)</option>
                  <option value="Square kilometer (km²)">Square kilometer (km²)</option>
                  <option value="Square meter (m²)">Square meter (m²)</option>
                  <option value="Square mile (mi²)">Square mile (mi²)</option>
                  <option value="Square millimeter (mm²)">Square millimeter (mm²)</option>
                  <option value="Square yard (yd²)">Square yard (yd²)</option>
                  <option value="Tonne (ton)">Tonne (ton)</option>
                  <option value="Yard (yd)">Yard (yd)</option>
                </select>
              </div>
            </div>

            <div className="connect-us-section-form-input">
              <textarea placeholder="Address"></textarea>
            </div>

            <div className="upload-images-box-alignment">
              <p>Upload Img</p>
              <input type="file" />
            </div>
          </div> */}

          <div className="request-quote-button-alignment">
            <button>Request A Quote</button>
          </div>
        </div>
      </div>
    </div>
  );
}
