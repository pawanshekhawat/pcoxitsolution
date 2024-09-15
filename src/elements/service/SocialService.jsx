import React, { useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Styles from "../../../public/assets/css/custom.module.css";
import SMMBredCrmb from "../../../public/assets/images/service/breadcrumbSMM.jpg";

import { useTranslation } from "react-i18next";

const SocialService = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(false);

  const pageTitle = "Social Media Marketing";

  const backgroundImages = {
    "Social Media Marketing": SMMBredCrmb,
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
                Social Media Marketing
              </h1>
              <p className="text-white mb-8">
                Our social media marketing services help you build a strong
                online presence and engage with your audience across various
                social media platforms.
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
              Our Social Media Marketing Strategy
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    1. Social Media Strategy
                  </h3>
                  <p>
                    We develop tailored social media strategies to meet your
                    business objectives, including content planning, audience
                    targeting, and platform selection.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    2. Content Creation
                  </h3>
                  <p>
                    Our team produces engaging and relevant social media
                    content, including posts, images, and videos, to attract and
                    retain your audience’s attention.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    3. Community Management
                  </h3>
                  <p>
                    We manage your social media profiles, interact with your
                    audience, and address any questions or comments to build a
                    strong and positive online community.
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    4. Analytics and Reporting
                  </h3>
                  <p>
                    We track social media performance using analytics tools,
                    providing regular reports and insights to measure the
                    effectiveness of our strategies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5">
              Social Media Platforms We Manage
            </h2>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Facebook
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Instagram
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  LinkedIn
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  Twitter
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  YouTube
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center bg_color--1">
        <h2 className="display-4 mb-4">Ready to Elevate Your Social Media?</h2>
        <p className="mb-5">
          Let’s discuss how our social media marketing services can boost your
          online presence.
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

export default SocialService;
