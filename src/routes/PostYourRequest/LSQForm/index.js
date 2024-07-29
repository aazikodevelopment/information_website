import React from 'react'
import "./LSQForm.scss";
import UploadFile from "../../../assets/icons/upload-file-icon.svg";
export default function LSQForm() {
  return (
    <div className="lsq-form-section">
      <div className="lsq-form-alignment">
        <div className="lsq-form-row">
          <label>* Fill in sourcing requirements</label>
          <p>Enter product name or choose from recommended products</p>
          <div className="lsq-input-alignemnt ">
            <input type="text" placeholder='Product Name:' />
          </div>
        </div>

        <div className="lsq-form-row">
          <label>* Expected price</label>
          <div className="input-three-grid">
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='min-price' />
            </div>
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='max-price' />
            </div>
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='Select Currency' />
              <div className="drop-down-arrow-alignment">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                  <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>


        <div className="lsq-form-row">
          <label>*Sourcing quantity</label>
          <div className="input-two-grid">
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='Please enter' />
            </div>
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='Select Unit type' />
              <div className="drop-down-arrow-alignment">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="9" viewBox="0 0 16 9" fill="none">
                  <path d="M7.29289 8.70711C7.68342 9.09763 8.31658 9.09763 8.70711 8.70711L15.0711 2.34315C15.4616 1.95262 15.4616 1.31946 15.0711 0.928932C14.6805 0.538408 14.0474 0.538408 13.6569 0.928932L8 6.58579L2.34315 0.928932C1.95262 0.538408 1.31946 0.538408 0.928932 0.928932C0.538408 1.31946 0.538408 1.95262 0.928932 2.34315L7.29289 8.70711ZM7 7V8H9V7H7Z" fill="black" />
                </svg>
              </div>
            </div>
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='Contact Number' />
            </div>
            <div className="lsq-input-alignemnt ">
              <input type="text" placeholder='email' />
            </div>
          </div>
        </div>

        <div className="lsq-upload-img-details">
          <div className="lsq-upload-box">
            <img src={UploadFile} alt="UploadFile" />
            <input type="file" />
          </div>

          <div className="lsq-file-upload-notes">
            <p>Tell us more about your business</p>
            <p>Verify your business for quicker quotes from matching suppliers.</p>
          </div>
        </div>

        <div className="lsq-form-row">
          <label>* Detailed requirements</label>
          <div className="lsq-textarea-alignemnt">
            <textarea placeholder='To Get More'></textarea>
          </div>
        </div>
      </div>
    </div>
  )
}
