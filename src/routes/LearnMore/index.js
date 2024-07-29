import React from "react";
import "./LearnMore.scss";
import LearnMoreImg from "../../assets/Image/learn-demo-img.png";
export default function LearnMore() {
  return (
    <div className="learn-more-section">
      <div className="container">
        <div className="learn-more-alignment">
          <div className="learn-more-heading-alignment">
            <h6>Learn More</h6>
          </div>

          <div className="learn-more-body-alignment">
            <div className="learn-more-top-details-alignment">
              <h4>Heading, Heading</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu ut
                porttitor nulla porta eget volutpat volutpat platea. Tortor augue proin sit egestas volutpat cursus nam vestibulum lectus. Suscipit
                nunc leo vel nulla. Egestas mi venenatis vitae morbi aliquam donec consequat quis quisque. Id cursus vitae ac diam turpis. Sit odio
                nam facilisis amet sem viverra mauris volutpat. A vitae nulla dui pulvinar semper pellentesque. Aliquet pharetra leo diam posuere
                tempor, sit ut velit facilisi. metus, donec. Convallis habitant mauris vitae at id accumsan, varius tellus. Pretium placerat libero
                sed accumsan. Magna eget amet, sollicitudin vestibulum iaculis. Eu lectus ut pulvinar pulvinar diam vulputate semper aenean augue. Ut
                lacus ut nibh dui dignissim id etiam.
              </p>
            </div>

            <div className="learn-more-with-img-detils ">
              <div className="with-img-grid">
                <div className="learn-more-img">
                  <img src={LearnMoreImg} alt="LearnMoreImg" />
                </div>
                <div className="learn-more-top-details-alignment">
                  <h4>Heading, Heading</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu
                    ut porttitor nulla porta eget volutpat volutpat platea. Tortor augue proin sit egestas volutpat cursus nam vestibulum lectus.
                    Suscipit nunc leo vel nulla. Egestas mi venenatis vitae morbi aliquam donec consequat quis quisque. Id cursus vitae ac diam
                    turpis. Sit odio nam facilisis amet sem viverra mauris volutpat.
                  </p>
                  <p>
                    Magna eget amet, sollicitudin vestibulum iaculis. Eu lectus ut pulvinar pulvinar diam vulputate semper aenean augue. Ut lacus ut
                    nibh dui dignissim id etiam.
                  </p>
                </div>
              </div>
              <div className="with-img-grid">
                <div className="learn-more-top-details-alignment">
                  <h4>Heading, Heading</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu
                    ut porttitor nulla porta eget volutpat volutpat platea. Tortor augue proin sit egestas volutpat cursus nam vestibulum lectus.
                    Suscipit nunc leo vel nulla. Egestas mi venenatis vitae morbi aliquam donec consequat quis quisque. Id cursus vitae ac diam
                    turpis. Sit odio nam facilisis amet sem viverra mauris volutpat.
                  </p>
                  <p>
                    Magna eget amet, sollicitudin vestibulum iaculis. Eu lectus ut pulvinar pulvinar diam vulputate semper aenean augue. Ut lacus ut
                    nibh dui dignissim id etiam.
                  </p>
                </div>
                <div className="learn-more-img">
                  <img src={LearnMoreImg} alt="LearnMoreImg" />
                </div>
              </div>
            </div>

            <div className="learn-more-top-details-alignment last-paddong-alignment">
              <h4>Heading, Heading</h4>
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu
                  ut porttitor nulla porta eget volutpat volutpat platea.
                </li>
                <li>
                  Egestas mi venenatis vitae morbi aliquam donec consequat quis quisque. Id cursus vitae ac diam turpis. Sit odio nam facilisis amet
                  sem viverra mauris volutpat. A vitae nulla dui pulvinar semper pellentesque. Aliquet pharetra leo diam posuere tempor, sit ut velit
                  facilisi. metus, donec. Convallis habitant mauris vitae at id accumsan, varius tellus. Pretium placerat libero sed accumsan.
                </li>
                <li>
                  Magna eget amet, sollicitudin vestibulum iaculis. Eu lectus ut pulvinar pulvinar diam vulputate semper aenean augue. Ut lacus ut
                  nibh dui dignissim id etiam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu
                  ut porttitor nulla porta eget volutpat volutpat platea.
                </li>
                <li>
                  Egestas mi venenatis vitae morbi aliquam donec consequat quis quisque. Id cursus vitae ac diam turpis. Sit odio nam facilisis amet
                  sem viverra mauris volutpat. A vitae nulla dui pulvinar semper pellentesque. Aliquet pharetra leo diam posuere tempor, sit ut velit
                  facilisi. metus, donec. Convallis habitant mauris vitae at id accumsan, varius tellus. Pretium placerat libero sed accumsan.
                </li>
                <li>
                  Magna eget amet, sollicitudin vestibulum iaculis. Eu lectus ut pulvinar pulvinar diam vulputate semper aenean augue. Ut lacus ut
                  nibh dui dignissim id etiam.
                </li>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id neque magna massa aliquet leo. Mi elit diam est varius sem. Massa arcu
                  ut porttitor nulla porta eget volutpat volutpat platea.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
