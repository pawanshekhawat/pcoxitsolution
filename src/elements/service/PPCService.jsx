import React, { useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Styles from "../../../public/assets/css/custom.module.css";
import PPCBredCrmb from "../../../public/assets/images/service/breadcrumbPPC.jpg";

import { useTranslation } from "react-i18next";

const PPCService = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(false);

  const pageTitle = "Pay-Per-Click (PPC) Advertising";

  const backgroundImages = {
    "Pay-Per-Click (PPC) Advertising": PPCBredCrmb,
  };

  const backgroundImage = backgroundImages[pageTitle] || "none";

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet */}
      <PageHelmet pageTitle={pageTitle} />
      {/* End Pagehelmet */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      <div className="bg_color--1">
        <div
          style={{
            height: "600px",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className={`${Styles.overlay}`}>
            <div
              style={{
                height: "600px",
              }}
              className="d-flex flex-column align-items-center justify-content-center text-dark text-center"
            >
              <h1 className="display-4 text-white font-weight-bold mb-4 mx-auto">
                Pay-Per-Click (PPC) Advertising
              </h1>
              <p className="text-white mb-8">
                Our PPC advertising services are designed to drive immediate
                traffic and generate leads through targeted ad campaigns.
              </p>
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="#redirect"
                  className={`${Styles.getStBtn} btn px-4 py-2 mt-3 rounded text-white`}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt--120">
          <div className="bg_color--1 py-5">
            <h2 className="display-4 text-center font-weight-normal mb-5">
              Our PPC Strategy
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    1. Campaign Strategy
                  </h3>
                  <p>
                    We create detailed PPC campaign strategies, including
                    keyword selection, ad copywriting, and bid management to
                    achieve your advertising goals.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    2. Ad Creation
                  </h3>
                  <p>
                    Our team designs compelling ad creatives and landing pages
                    that capture attention and drive conversions, ensuring a
                    high-quality user experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    3. Bid Management
                  </h3>
                  <p>
                    We continuously optimize your ad bids and budgets to
                    maximize visibility and return on investment while
                    minimizing unnecessary costs.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    4. Performance Monitoring
                  </h3>
                  <p>
                    We monitor and analyze PPC campaign performance, providing
                    regular updates and insights to refine strategies and
                    improve results.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5">PPC Tools We Use</h2>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Google Ads
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Facebook Ads
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  LinkedIn Ads
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Bing Ads
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Twitter Ads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center bg_color--1">
        <h2 className="display-4 mb-4">
          Ready to Boost Your Traffic with PPC?
        </h2>
        <p className="mb-5">
          Let’s discuss how our PPC services can enhance your online presence.
        </p>
        <a
          href="/contact"
          className="btn blog-btn rn-btn px-5 h3 font-weight-bold"
        >
          Contact Us
        </a>
      </div>

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>

      {/* End Back To Top */}
      <Footer />
    </div>
  );
};

export default PPCService;
