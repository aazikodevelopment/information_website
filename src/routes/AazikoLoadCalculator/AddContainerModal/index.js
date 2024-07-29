import React from "react";
import "./AddContainerModal.scss";
import CdiImg from "../../../assets/Image/cdi1.png";
import Spacing from "../../../assets/Image/spacing1.png";
import Stuff1 from "../../../assets/Image/stuff1.png";
import Stuff2 from "../../../assets/Image/stuff2.png";
import Stuff3 from "../../../assets/Image/stuff3.png";
export default function AddContainerModal({onClose}) {
  return (
    <div className="add-container-modal-section">
      <div className="add-container-modal-alignment">
        <div className="add-container-box-alignment">
          <div className="add-container-type-name-alignment">
            <h6>1.Select cargo Type</h6>

            <div className="add-container-type-box-details-alignment">
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                  <path
                    d="M15.8933 0.506605C17.565 -0.168868 19.435 -0.168868 21.1067 0.506605L34.978 6.11157C35.5754 6.35277 36.0871 6.76625 36.4473 7.29903C36.8076 7.83182 37 8.45965 37 9.10212V26.8997C36.9996 27.5419 36.807 28.1693 36.4468 28.7017C36.0866 29.2342 35.5751 29.6473 34.978 29.8884L21.1067 35.4934C19.435 36.1689 17.565 36.1689 15.8933 35.4934L2.02205 29.8884C1.42456 29.6472 0.912925 29.2338 0.552683 28.701C0.192441 28.1682 -3.74722e-06 27.5403 0 26.8979V9.10396C-3.74722e-06 8.4615 0.192441 7.83366 0.552683 7.30087C0.912925 6.76809 1.42456 6.35461 2.02205 6.11342L15.8933 0.508449V0.506605ZM20.0633 3.0694C19.0607 2.66452 17.9393 2.66452 16.9368 3.0694L13.394 4.50199L27.319 9.89861L32.2566 7.99956L20.0614 3.07125L20.0633 3.0694ZM23.4783 11.3754L9.64775 6.01385L4.7915 7.97559L18.5019 13.2892L23.4783 11.3754ZM2.775 26.8997C2.77524 26.9913 2.80282 27.0806 2.85421 27.1565C2.90561 27.2323 2.9785 27.2912 3.0636 27.3256L16.9368 32.9306C16.9941 32.9546 17.0533 32.9767 17.1125 32.997V15.7193L2.775 10.1623V26.8997ZM20.0633 32.9306L33.9364 27.3256C34.0218 27.2911 34.0949 27.2319 34.1463 27.1557C34.1977 27.0795 34.2251 26.9897 34.225 26.8979V10.2065L19.8875 15.723V32.9988C19.9466 32.9781 20.0052 32.9559 20.0633 32.9324V32.9306Z"
                    fill="#BABABA"
                  />
                </svg>
                <p>Box</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="none">
                  <path
                    d="M31.5225 28.9411L31.5226 28.9414L31.5226 28.9418L31.5226 28.9419L31.5298 28.9925L31.541 29.0368C31.5409 29.0367 31.541 29.0371 31.5413 29.0382C31.5414 29.0389 31.5416 29.0398 31.5419 29.0409C31.5432 29.0468 31.5459 29.059 31.5495 29.077C31.5567 29.113 31.5676 29.1721 31.5788 29.2508C31.6014 29.4088 31.625 29.6423 31.625 29.925C31.625 30.4953 31.5291 31.2307 31.1681 31.9528C30.4958 33.2973 28.6847 35 23.5125 35H9.1125C3.94026 35 2.12917 33.2973 1.45693 31.9528C1.09591 31.2307 1 30.4953 1 29.925C1 29.6423 1.02362 29.4088 1.0462 29.2508C1.05744 29.1721 1.06829 29.113 1.0755 29.077C1.0791 29.059 1.08177 29.0468 1.08311 29.0409C1.08336 29.0398 1.08357 29.0389 1.08372 29.0382C1.08397 29.0371 1.08408 29.0367 1.08404 29.0368L1.09515 28.9925L1.10239 28.9419L1.1024 28.9418L1.10245 28.9414L1.10249 28.9411L1.10319 28.9363L1.10662 28.9134C1.10982 28.8923 1.11486 28.8596 1.12186 28.816C1.13585 28.7287 1.15764 28.5979 1.18809 28.4287C1.24902 28.0902 1.3445 27.5989 1.48138 26.9966C1.7556 25.7901 2.19376 24.148 2.84883 22.4011C4.15293 18.9235 6.22743 15.2733 9.35566 13.6H23.2693C26.3976 15.2733 28.4721 18.9235 29.7762 22.4011C30.4312 24.148 30.8694 25.7901 31.1436 26.9966C31.2805 27.5989 31.376 28.0902 31.4369 28.4287C31.4674 28.5979 31.4892 28.7287 31.5031 28.816C31.5101 28.8596 31.5152 28.8923 31.5184 28.9134L31.5218 28.9363L31.5225 28.9411ZM19.2054 4.30711L19.715 4.81676L20.3597 4.49443L25.2072 2.07069L22.8355 8H9.78953L7.41781 2.07069L12.2653 4.49443L12.91 4.81676L13.4196 4.30711L16.3125 1.41421L19.2054 4.30711Z"
                    fill="white"
                    stroke="#BABABA"
                    stroke-width="2"
                  />
                </svg>
                <p>Big bads</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="34" height="38" viewBox="0 0 34 38" fill="none">
                  <path
                    d="M26 13L25 9C25 6.87827 24.1571 4.84344 22.6569 3.34315C21.1566 1.84285 19.1217 1 17 1C14.8783 1 12.8434 1.84285 11.3431 3.34315C9.84285 4.84344 9 6.87827 9 9L8 13H16H26ZM3 13H31L33 37H1L3 13Z"
                    stroke="#BABABA"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>Sacks</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="36" viewBox="0 0 26 36" fill="none">
                  <path
                    d="M24.4762 23.0438V12.0963C24.8321 11.8869 25.2 11.5609 25.2 11.0858C25.2 10.5842 24.7967 10.2599 24.4762 10.0744V2.53507V2.535V2.53493C24.4762 0.194534 14.9091 0 12.6 0C11.1973 0 9.82566 0.0444864 8.52332 0.132267C8.23635 0.151594 8.01918 0.402774 8.03833 0.693172C8.05736 0.983706 8.30774 1.20355 8.59248 1.18408C9.87198 1.09791 11.2203 1.05421 12.6 1.05421C15.4091 1.05421 18.0951 1.23763 20.1633 1.5709C22.536 1.95308 23.2147 2.38053 23.3905 2.535C23.2147 2.68947 22.5359 3.11685 20.1633 3.4991C18.0951 3.8323 15.4091 4.0158 12.6 4.0158C9.79095 4.0158 7.10488 3.83236 5.03671 3.4991C2.6501 3.1146 1.97736 2.68442 1.80642 2.53233C2.07513 2.2853 3.25993 1.73971 6.52804 1.36835C6.81383 1.33588 7.01948 1.075 6.98741 0.785731C6.9554 0.496458 6.69815 0.288359 6.41181 0.320758C4.80834 0.502924 3.46371 0.756634 2.52311 1.05448C1.75067 1.29905 0.723833 1.71862 0.723833 2.53493V2.53507V2.53514V10.0744C0.403403 10.2599 0 10.5842 0 11.0858C0 11.5609 0.367783 11.8871 0.723833 12.0963V23.0437C0.403333 23.2291 0 23.5534 0 24.0552C0 24.5303 0.367783 24.8563 0.723833 25.0657V33.4651C0.723833 35.8056 10.2693 36 12.6 36C14.9307 36 24.4762 35.8055 24.4762 33.4651V25.0658C24.8321 24.8563 25.2 24.5304 25.2 24.0552C25.2 23.5535 24.7967 23.2294 24.4762 23.0438ZM1.76532 12.5279C4.55505 13.4036 9.61243 13.6208 12.6 13.6208C15.6241 13.6208 20.6681 13.3964 23.4347 12.5279V24.3857C20.9172 25.3153 15.4218 25.536 12.6 25.536C9.78227 25.536 4.28385 25.3157 1.76532 24.3857V12.5279ZM12.6 5.06993C15.3611 5.06993 21.1071 4.82023 23.4347 3.72997V11.4163C20.9173 12.3459 15.4209 12.5666 12.6 12.5666C9.7763 12.5666 4.27906 12.3445 1.76532 11.4163V3.72997C4.11325 4.82978 9.85087 5.06993 12.6 5.06993ZM20.1633 34.4293C18.0951 34.7624 15.409 34.9459 12.6 34.9459C9.79088 34.9459 7.10481 34.7624 5.03656 34.4293C2.37307 34.0002 1.84412 33.5142 1.76525 33.4212V25.4972C4.54068 26.3687 9.57412 26.5902 12.6 26.5902C15.624 26.5902 20.6681 26.3658 23.4346 25.4972V33.4212C23.3558 33.5142 22.8269 34.0002 20.1633 34.4293Z"
                    fill="#BABABA"
                  />
                </svg>
                <p>Barrels</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="26" viewBox="0 0 37 26" fill="none">
                  <path
                    d="M23.0496 1.37566L12.1023 1.44626C11.8906 1.09172 11.5622 0.725965 11.0871 0.729029C10.5855 0.732264 10.2638 1.13767 10.0804 1.4593L2.54123 1.50792L2.54116 1.50792L2.5411 1.50792C0.200745 1.52302 0.067913 11.0912 0.0828049 13.4003C0.0918506 14.8029 0.145182 16.1743 0.241359 17.476C0.262537 17.7628 0.515112 17.9784 0.805381 17.9574C1.09579 17.9365 1.31401 17.6847 1.29271 17.4001C1.19828 16.1211 1.14589 14.7731 1.13699 13.3935C1.11887 10.5845 1.28497 7.89727 1.6049 5.82701C1.97176 3.45187 2.39483 2.77042 2.54816 2.59361C2.70377 2.76842 3.13551 3.44449 3.53306 5.81457C3.87959 7.88054 4.0804 10.5654 4.09852 13.3744C4.11663 16.1834 3.95053 18.8705 3.63061 20.9408C3.2615 23.3299 2.83567 24.0054 2.68469 24.1773C2.43593 23.9102 1.88271 22.7289 1.49029 19.4633C1.45597 19.1777 1.19377 18.9737 0.904715 19.0077C0.615655 19.0415 0.409219 19.3001 0.443464 19.5863C0.635967 21.1885 0.898343 22.5315 1.20225 23.4701C1.4518 24.241 1.87798 25.2651 2.69428 25.2598L2.69441 25.2598L2.69448 25.2598L10.2336 25.2112C10.4212 25.5304 10.748 25.9317 11.2497 25.9285C11.7247 25.9254 12.0485 25.5556 12.2555 25.1982L23.2026 25.1276C23.3901 25.4469 23.7169 25.8481 24.2188 25.8449C24.6938 25.8418 25.0175 25.4719 25.2246 25.1145L33.6238 25.0604C35.9643 25.0453 36.0971 15.4988 36.0821 13.1681C36.067 10.8374 35.811 1.29336 33.4706 1.30845L25.0715 1.36262C24.8597 1.00808 24.5314 0.642324 24.0562 0.645389C23.5545 0.648624 23.233 1.05402 23.0496 1.37566ZM12.6803 24.1539C13.538 21.3586 13.7226 16.2999 13.7033 13.3125C13.6838 10.2884 13.4269 5.24596 12.5405 2.48495L24.3981 2.40848C25.344 4.92002 25.6001 10.4139 25.6183 13.2356C25.6364 16.0532 25.4516 21.553 24.5378 24.0775L12.6803 24.1539ZM5.15263 13.3676C5.13482 10.6066 4.84807 4.86227 3.74282 2.54169L11.429 2.49212C12.3748 5.00354 12.631 10.4984 12.6492 13.3193C12.6674 16.1429 12.4807 21.6414 11.5687 24.1611L3.88257 24.2107C4.96722 21.8557 5.17035 16.1166 5.15263 13.3676ZM34.4626 5.6151C34.8091 7.68107 35.0099 10.366 35.028 13.1749C35.0461 15.984 34.88 18.6711 34.5602 20.7415C34.1483 23.4077 33.6657 23.9398 33.5732 24.0193L25.6494 24.0704C26.5029 21.2894 26.692 16.2546 26.6724 13.2288C26.6529 10.2048 26.396 5.16232 25.5096 2.40142L33.4334 2.35032C33.5269 2.42856 34.0163 2.95428 34.4626 5.6151Z"
                    fill="#BABABA"
                  />
                </svg>
                <p>Roll</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="26" viewBox="0 0 37 26" fill="none">
                  <path
                    d="M23.0496 1.37566L12.1023 1.44626C11.8906 1.09172 11.5622 0.725965 11.0871 0.729029C10.5855 0.732264 10.2638 1.13767 10.0804 1.4593L2.54123 1.50792L2.54116 1.50792L2.5411 1.50792C0.200745 1.52302 0.067913 11.0912 0.0828049 13.4003C0.0918506 14.8029 0.145182 16.1743 0.241359 17.476C0.262537 17.7628 0.515112 17.9784 0.805381 17.9574C1.09579 17.9365 1.31401 17.6847 1.29271 17.4001C1.19828 16.1211 1.14589 14.7731 1.13699 13.3935C1.11887 10.5845 1.28497 7.89727 1.6049 5.82701C1.97176 3.45187 2.39483 2.77042 2.54816 2.59361C2.70377 2.76842 3.13551 3.44449 3.53306 5.81457C3.87959 7.88054 4.0804 10.5654 4.09852 13.3744C4.11663 16.1834 3.95053 18.8705 3.63061 20.9408C3.2615 23.3299 2.83567 24.0054 2.68469 24.1773C2.43593 23.9102 1.88271 22.7289 1.49029 19.4633C1.45597 19.1777 1.19377 18.9737 0.904715 19.0077C0.615655 19.0415 0.409219 19.3001 0.443464 19.5863C0.635967 21.1885 0.898343 22.5315 1.20225 23.4701C1.4518 24.241 1.87798 25.2651 2.69428 25.2598L2.69441 25.2598L2.69448 25.2598L10.2336 25.2112C10.4212 25.5304 10.748 25.9317 11.2497 25.9285C11.7247 25.9254 12.0485 25.5556 12.2555 25.1982L23.2026 25.1276C23.3901 25.4469 23.7169 25.8481 24.2188 25.8449C24.6938 25.8418 25.0175 25.4719 25.2246 25.1145L33.6238 25.0604C35.9643 25.0453 36.0971 15.4988 36.0821 13.1681C36.067 10.8374 35.811 1.29336 33.4706 1.30845L25.0715 1.36262C24.8597 1.00808 24.5314 0.642324 24.0562 0.645389C23.5545 0.648624 23.233 1.05402 23.0496 1.37566ZM12.6803 24.1539C13.538 21.3586 13.7226 16.2999 13.7033 13.3125C13.6838 10.2884 13.4269 5.24596 12.5405 2.48495L24.3981 2.40848C25.344 4.92002 25.6001 10.4139 25.6183 13.2356C25.6364 16.0532 25.4516 21.553 24.5378 24.0775L12.6803 24.1539ZM5.15263 13.3676C5.13482 10.6066 4.84807 4.86227 3.74282 2.54169L11.429 2.49212C12.3748 5.00354 12.631 10.4984 12.6492 13.3193C12.6674 16.1429 12.4807 21.6414 11.5687 24.1611L3.88257 24.2107C4.96722 21.8557 5.17035 16.1166 5.15263 13.3676ZM34.4626 5.6151C34.8091 7.68107 35.0099 10.366 35.028 13.1749C35.0461 15.984 34.88 18.6711 34.5602 20.7415C34.1483 23.4077 33.6657 23.9398 33.5732 24.0193L25.6494 24.0704C26.5029 21.2894 26.692 16.2546 26.6724 13.2288C26.6529 10.2048 26.396 5.16232 25.5096 2.40142L33.4334 2.35032C33.5269 2.42856 34.0163 2.95428 34.4626 5.6151Z"
                    fill="#BABABA"
                  />
                </svg>
                <p>Pipes</p>
              </div>
              <div className="add-container-type-child-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="36" viewBox="0 0 50 36" fill="none">
                  <path
                    d="M30.6402 9.79198V9.79194C31.3275 8.73602 33.0413 8.73602 33.7286 9.79194V9.79195L48.4978 32.4804L48.4982 32.481C49.1499 33.4792 48.4215 34.8548 47.0399 34.8548H42.0013L28.3125 13.3673L30.6402 9.79198Z"
                    stroke="#BABABA"
                    stroke-width="1.5"
                  />
                  <path
                    d="M1.2673 26.6322L1.26739 26.6321L17.0948 1.8807C17.0948 1.88069 17.0948 1.88068 17.0948 1.88067C17.8461 0.705944 19.707 0.707135 20.4549 1.8801L20.4553 1.88082L25.8486 10.3081L25.8491 10.309L37.9425 29.2943H2.85931C1.37033 29.2943 0.540422 27.7681 1.2673 26.6322Z"
                    stroke="#BABABA"
                    stroke-width="1.5"
                  />
                </svg>
                <p>Bulk</p>
              </div>
            </div>
          </div>

          <div className="add-container-type-name-alignment">
            <h6>2.Select cargo Dimensions</h6>

            <div className="add-container-type-second-all-details">
              <div className="add-container-type-second-all-details-grid">
                <div>
                  <img src={CdiImg} alt="CdiImg" />
                </div>
                <div className="add-container-type-second-form-alignment">
                  <div className="add-container-first-input-grid">
                    <div className="add-container-input-alignment">
                      <label>Product name</label>
                      <div className="add-container-input">
                        <input type="text" placeholder="New product" />
                      </div>
                    </div>
                    <div className="add-container-input-alignment">
                      <label>Color</label>
                      <div className="color-box-alignment"></div>
                    </div>
                  </div>
                  <div className="add-container-first-input-grids">
                    <div className="add-container-input-alignments">
                      <label>Length</label>

                      <div className="add-container-input">
                        <div class="placeholder-wrapper">
                          <input type="text" placeholder="100" />
                          <span class="placeholder-suffix">mm</span>
                        </div>
                      </div>
                    </div>
                    <div className="add-container-input-alignments">
                      <label>Width</label>

                      <div className="add-container-input">
                        <div class="placeholder-wrapper">
                          <input type="text" placeholder="100" />
                          <span class="placeholder-suffix">mm</span>
                        </div>
                      </div>
                    </div>
                    <div className="add-container-input-alignments">
                      <label>Height</label>

                      <div className="add-container-input">
                        <div class="placeholder-wrapper">
                          <input type="text" placeholder="100" />
                          <span class="placeholder-suffix">mm</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="add-container-first-input-grids">
                    <div className="add-container-input-alignments">
                      <label>Weight</label>

                      <div className="add-container-input">
                        <div class="placeholder-wrapper">
                          <input type="text" placeholder="1" />
                          <span class="placeholder-suffix">Kg</span>
                        </div>
                      </div>
                    </div>
                    <div className="add-container-input-alignments">
                      <label>Quantity</label>

                      <div className="add-container-input">
                        <div class="placeholder-wrapper">
                          <input type="text" placeholder="1" />
                          <span class="placeholder-suffix"></span>
                        </div>
                      </div>
                    </div>
                    <div className="add-container-input-alignments">
                      <label>Height</label>
                      <div className="color-box-alignment">Prediction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="add-container-type-name-alignment">

            <div className="add-container-type-second-all-details">
              <div className="add-container-type-second-all-details-grids">
                <div className="add-container-type-second-all-details-border">
                  <h6>3.Spacing Settings</h6>
                  <div>
                    <div className="add-container-type-second-all-details-label">
                      <input type="checkbox" />
                      <label>Tit to length</label>
                    </div>
                    <img src={Spacing} alt="CdiImg" />
                  </div>
                  <div>
                    <div className="add-container-type-second-all-details-label">
                      <input type="checkbox" />
                      <label>Tit to length</label>
                    </div>
                    <img src={Spacing} alt="CdiImg" />
                  </div>
                </div>
                <div className="add-container-type-second-all-details-border">
                  <div className="">
                    <h6>4.Stuffing settings</h6>
                    <div className="add-container-type-second-all-details-border-grid">
                      <div className="add-container-type-second-all-details-border-flex">
                        <img src={Stuff1} alt="CdiImg" />
                        <div className="add-container-type-second-all-details-labels">
                          <div className="mb-2">
                            <input type="checkbox" />
                            <label>Layer count</label>
                          </div>
                          <div className="add-container-input">
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                      </div>
                      <div className="add-container-type-second-all-details-border-flex">
                        <img src={Stuff2} alt="CdiImg" />
                        <div className="add-container-type-second-all-details-labels">
                          <div className="mb-2">
                            <input type="checkbox" />
                            <label>Layer count</label>
                          </div>
                          <div className="add-container-input">
                            <input type="text" placeholder="" />
                          </div>
                        </div>
                      </div>
                      <div className="add-container-type-second-all-details-border-flex">
                        <img src={Stuff3} alt="CdiImg" />
                        <div className="add-container-type-second-all-details-labels">
                          <div className="mb-2">
                            <input type="checkbox" />
                            <label>Height</label>
                          </div>
                          <div className="add-container-input">
                            <div class="placeholder-wrapper">
                              <input type="text" placeholder="" />
                              <span class="placeholder-suffix">mm</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        <div className="p-3 d-flex justify-content-center add-modal-buttons">
            <button style={{background:"#BABABA",color:"#606060", marginRight:"10px"}} onClick={onClose}>Cancel</button>
            <button style={{background:"#00AEEF", color:"white"}}>Add</button>
        </div>
        </div>
      </div>
    </div>
  );
}
