import React from "react";
import "./StorefrontDetails.scss";
import StorefrontDetailsSidebar from "./StorefrontDetailsSidebar";
import Customizable from "../../../assets/imges/Customizable.png";
import SearchableImage from "../../../assets/imges/Searchable.png";
import ScalableImage from "../../../assets/imges/Scalable.png";
import DiscoverableImage from "../../../assets/imges/discoverable.png";
import BuyersImage from "../../../assets/imges/buyers.png";
import friendlyImage from "../../../assets/imges/friendly.png";
export default function StorefrontDetails() {
  return (
    <div>
      <div className="store-front-details-all-content-alignment-for-page">
        <div className="container">
          <div className="grid">
            <div className="grid-items">
              <StorefrontDetailsSidebar />
            </div>
            <div className="grid-items">
              <div className="main-white-box">
                <div className="main-text">
                  <h1>What is it</h1>
                  <span>
                    Aaziko.com Storefronts, which are also called “Minisites,”
                    are interactive plots of digital real estate where Gold
                    suppliers can showcase their products. Aazikocom Minisite
                    technology provides an alternative to brick-and-mortar
                    storefronts, so sellers can expand beyond their physical
                    confines.
                  </span>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={Customizable} alt="Customizable" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>01.Customizable</p>
                      <span>
                        Minisites on Aaziko.com are customizable, so you can
                        add a variety of media to reflect your brand. We
                        encourage sellers to add photos, videos, text, and more
                        to truly make the Aaziko.com Storefronts their own.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sec-grid">
                  <div className="sec-grid-items">
                    <div className="text">
                      <p>02.Searchable</p>
                      <span>
                        Aaziko.com acts as a search engine that serves
                        prospective buyers product and seller results based on
                        their unique queries. Aaziko.com Storefronts are
                        searchable, so your products can rank in the search
                        results to reach more buyers in the store.
                      </span>
                    </div>
                  </div>
                  <div className="sec-grid-items">
                    <div className="image-style">
                      <img src={SearchableImage} alt="SearchableImage" />
                    </div>
                  </div>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={ScalableImage} alt="ScalableImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>03.Scalable</p>
                      <span>
                        Scaling your business with a physical storefront can be
                        difficult because it requires additional investments in
                        both labor and physical capital. Scaling your online
                        storefront simply requires uploading more product
                        listings.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div className="main-text">
                  <h1>Why use it</h1>
                  <span>
                    Online Storefronts are great for adding a digital layer to
                    your sales strategy. Aaziko.com Minisites provide a happy
                    medium between the independence of private online
                    Storefronts and the tremendous value of the B2B e-commerce
                    marketplace.
                  </span>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={DiscoverableImage} alt="DiscoverableImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>01.Make your brand discoverable</p>
                      <span>
                        Creating a Minisite on Aaziko.com makes your brand
                        discoverable to buyers from around the globe. When
                        properly optimized, the products listed on your
                        Aaziko.com Storefront will be presented to prospective
                        buyers that are searching for related keywords.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sec-grid">
                  <div className="sec-grid-items">
                    <div className="text">
                      <p>02.Reach more buyers</p>
                      <span>
                        Using an Aaziko.com Minisite helps suppliers reach more
                        buyers. In fact, Aaziko.com currently has more than
                        26,000,000 active buyers from over 200 countries.
                      </span>
                    </div>
                  </div>
                  <div className="sec-grid-items">
                    <div className="image-style">
                      <img src={BuyersImage} alt="BuyersImage" />
                    </div>
                  </div>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={friendlyImage} alt="friendlyImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>03.Mobile-friendly</p>
                      <span>
                        Aaziko.com Minisites are mobile-friendly. The traffic to
                        Aaziko.com Minisites on mobile devices is actually 4.6x
                        greater than traffic on desktops. Our digital
                        storefronts can also be edited from mobile devices,
                        which adds convenience for sellers, as well.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div className="main-text">
                  <h1>How to set up</h1>
                  <span>
                    Setting up a Storefront on Aaziko.com is fairly simple.
                    There are four main pages of your Minisite that you should
                    customize to showcase your brand. These include your
                    Minisite home page, company profile, contact page, and shop
                    page.
                  </span>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={DiscoverableImage} alt="DiscoverableImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>01.Customize your Minisite</p>
                      <span>
                        Start by customizing your Minisite home page. Arrange
                        the layout with drag and drop tools. Set the color
                        scheme to match your branding, and upload your logo in
                        high resolution. Add any other supporting media.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="sec-grid">
                  <div className="sec-grid-items">
                    <div className="text">
                      <p>02.Create a company profile</p>
                      <span>
                        Customize your company profile to showcase what your
                        company has to offer. You’ll be prompted to add a basic
                        overview of your company, your business type, main
                        products you offer, certifications, patents, and other
                        relevant credentials.
                      </span>
                    </div>
                  </div>
                  <div className="sec-grid-items">
                    <div className="image-style">
                      <img src={BuyersImage} alt="BuyersImage" />
                    </div>
                  </div>
                </div>
                <div className="add-contact">
                  <p>Add contact information</p>
                  <span>
                    Fill out all of the fields on your contact page so
                    prospective buyers know how to reach you for more
                    information. Include your full company name, operating
                    address, websites, Aaziko.com Minisite address, and the
                    point of contact’s name and title.
                  </span>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={DiscoverableImage} alt="DiscoverableImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>03.List your products</p>
                      <span>
                        Once you’ve customized the other aspects of your
                        Aaziko.com Storefront, it is time to list your products
                        on your shop page. Follow Aaziko.com’s smart posting
                        suggestions, and optimize your site data with titles,
                        keywords, and more.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div className="main-text">
                  <h1>Optimizing</h1>
                  <span>
                    Your Storefront acts as the gateway between you and your
                    prospective buyers. There are a few ways that you can
                    optimize your Minisite to make it more effective for
                    connecting with leads and closing deals.
                  </span>
                </div>
                <div className="first-grid">
                  <div className="first-grid-items">
                    <div className="image-style">
                      <img src={DiscoverableImage} alt="DiscoverableImage" />
                    </div>
                  </div>
                  <div className="first-grid-items">
                    <div className="text">
                      <p>01.Provide plenty of information</p>
                      <span>
                        As you customize your company profile, be sure to add as
                        much valuable information as possible. Answer any
                        questions that prospective buyers may have. This will
                        allow you to build trust and close more deals.
                      </span>
                    </div>
                  </div>
                </div>
                <div className="add-contact">
                  <p>Use high-quality images</p>
                  <span>
                    Media, such as photos and digital graphics, can truly
                    enhance your Aaziko.com Storefront. However, it is important
                    to use high-resolution images. Not only are high-quality
                    images more attractive and eye-catching, but they look more
                    professional, as well.
                  </span>
                </div>
                <div className="sec-grid">
                  <div className="sec-grid-items">
                    <div className="text">
                      <p>02.Prioritize your About page</p>
                      <span>
                        The “About” section of your Minisite is very important
                        because it is where prospective buyers go to learn more
                        about your company. Use your about page to go beyond the
                        numbers and basic facts to tell your company’s story.
                      </span>
                    </div>
                  </div>
                  <div className="sec-grid-items">
                    <div className="image-style">
                      <img src={BuyersImage} alt="BuyersImage" />
                    </div>
                  </div>
                </div>
                <div className="spacer"></div>
                <div className="main-text">
                  <h1>Contact us</h1>
                  <span>
                    Still have questions about how to use and optimise
                    Aaziko.com Storefront? Contact one of our professionals to
                    answer your questions.
                  </span>
                </div>
                <div className="chat-button-center-alignment">
                  <button>Chat with consultant</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
