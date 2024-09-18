import React, { useState, useContext } from "react";

import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import Styles from "../../public/assets/css/custom.module.css";
import { RiSeoLine } from "react-icons/ri";
import { BiBookContent } from "react-icons/bi";
import { IoShareSocialSharp } from "react-icons/io5";
import { TbClick } from "react-icons/tb";

import { useTranslation } from "react-i18next";
import { ThemeContext } from '../ThemeContext';

const ServiceDetails = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

   const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="HR Third Party Payroll Services" />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image"
        data-black-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title text-white">{t("thirt_party_0")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details ptb--120 bg_color--1">
        <div className="container">
          {/* Start Service Card Area */}
          <h3 className={`${Styles.serviceHead}`}>In Digital Marketing, Here's what we provide</h3>
          <div className={`${Styles.serviceCards} row`}>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a
                  href="/service/search-engine-optimization"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <RiSeoLine className={Styles.reactIcons} /> <br />
                  Search Engine Optimization (SEO)
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/search-engine-optimization"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a href="/service/content-marketing" className={`card-title h3 text-white ${Styles.title}`}>
                  <BiBookContent className={Styles.reactIcons} /> <br />
                  Strategic Content Marketing
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/content-marketing"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a href="/service/social-media-marketing" className={`card-title h3 text-white ${Styles.title}`}>
                  <IoShareSocialSharp className={Styles.reactIcons}/> <br />
                  Social Media Marketing
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/social-media-marketing"
                    className={`${Styles.cardBtn} btn ml-4`}
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a href="/service/pay-per-click" className={`card-title h3 text-white ${Styles.title}`}>
                  <TbClick className={Styles.reactIcons}/> <br />
                  Pay-Per-Click (PPC) Advertising
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a
                    href="/service/pay-per-click"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Page Wrapper */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <div className="toggle-button">
  <Toggle isChecked={isDark} handleChange={toggleTheme} />      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
