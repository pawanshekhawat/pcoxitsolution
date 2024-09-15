import React, { useState, useContext } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Styles from "../../../public/assets/css/custom.module.css";
import SDBredCrmb from "../../../public/assets/images/service/breadcrumbSD.jpg";
import WDBredCrmb from "../../../public/assets/images/service/breadcrumbWD.jpg";
import MDBredCrmb from "../../../public/assets/images/service/breadcrumbMD.jpg";
import SISBredCrmb from "../../../public/assets/images/service/breadcrumbSIS.jpg";
import CCSBredCrmb from "../../../public/assets/images/service/breadcrumbCCS.jpg";
import SMBredCrmb from "../../../public/assets/images/service/breadcrumbSM.jpg";

import { useTranslation } from "react-i18next";

import { ThemeContext } from '../../ThemeContext';


const PPCService = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const { isDark, toggleTheme } = useContext(ThemeContext);

  const pageTitle = "Search Engine Optimization (SEO)";

  const backgroundImages = {
    "Software Development": SDBredCrmb,
    "Search Engine Optimization (SEO)": WDBredCrmb,
    "Mobile App Development": MDBredCrmb,
    "Software Integration Solutions": SISBredCrmb,
    "Cloud-Based Solutions": CCSBredCrmb,
    "Software Maintenance": SMBredCrmb,
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
                Search Engine Optimization (SEO)
              </h1>
              <p className="text-white mb-8">
                At PCOX Internet Pvt Limited, our SEO services are designed to
                improve your website's visibility and ranking on search engines. We use
                a data-driven approach to enhance your online presence and drive organic
                traffic.
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
              Our SEO Strategy
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    1. Keyword Research
                  </h3>
                  <p>
                    We conduct thorough keyword research to identify the most relevant
                    and high-traffic keywords for your business, optimizing your content
                    for better search engine rankings.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    2. On-Page Optimization
                  </h3>
                  <p>
                    Our team optimizes your website's structure, meta tags, and content
                    to ensure that it is search engine-friendly and delivers a superior
                    user experience.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    3. Link Building
                  </h3>
                  <p>
                    We develop a strategic link-building campaign to increase your
                    website's authority and credibility, improving your chances of
                    ranking higher in search results.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    4. Performance Tracking
                  </h3>
                  <p>
                    We continuously monitor your SEO performance, using analytics to
                    track progress, identify areas for improvement, and adjust strategies
                    as needed.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5">Technologies We Use</h2>
            {/* Technologies content unchanged */}
          </div>
        </div>
      </div>

      <div className="py-5 text-center bg_color--1">
        <h2 className="display-4 mb-4">Ready to Improve Your Search Rankings?</h2>
        <p className="mb-5">
          Let’s discuss how our SEO services can boost your online presence.
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
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      {/* End Back To Top */}
      <Footer />
    </div>
  );
};

export default PPCService;
