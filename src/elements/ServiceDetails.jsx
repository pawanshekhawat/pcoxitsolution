import React, { useState, useContext } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import Styles from "../../public/assets/css/custom.module.css";
import { AiOutlineTruck } from "react-icons/ai";
import { LiaShipSolid } from "react-icons/lia";
import { PiAirplaneTiltLight } from "react-icons/pi";

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
      <PageHelmet pageTitle=" Import-Export Services & Logistics Solutions" />
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
                <h2 className="title">{t("hr_services_0")}</h2>
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
          <h3 className={`${Styles.serviceHead}`}>We provide these types of transport services</h3>
          <div className={`${Styles.serviceCards} row`}>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
            >
              <div className="card-body">
                <a
                  href="#lt"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <AiOutlineTruck className={Styles.reactIcons} /> <br />
                  Land Transportation
                </a>
                {/* <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_services_1_desc")}
                </p> */}
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="#lt" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
            >
              <div className="card-body">
                <a
                  href="#st"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <LiaShipSolid className={Styles.reactIcons} /> <br />
                  Sea Transport
                </a>
                {/* <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_services_2_desc")}
                </p> */}
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="#st" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
            >
              <div className="card-body">
                <a
                  href="#at"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <PiAirplaneTiltLight className={Styles.reactIcons} />
                  <br />
                  Air Transport
                </a>
                {/* <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_services_3_desc")}
                </p> */}
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="#at" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}

          <div className="row pt--120" id="lt">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src="/assets/images/service/hrservice01.JPG"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_services_1_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_services_1_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
                          <li>{t("hr_services_1_li1")}</li> <br />
                          <li>{t("hr_services_1_li2")}</li> <br />
                          <li>{t("hr_services_1_li3")}</li> <br />
                          <li id="st">{t("hr_services_1_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12 mt-2">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_services_2_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_services_2_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
                          <li>{t("hr_services_2_li1")}</li> <br />
                          <li>{t("hr_services_2_li2")}</li> <br />
                          <li>{t("hr_services_2_li3")}</li> <br />
                          <li id="at">{t("hr_services_2_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/hrservice02.JPG"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End Single Area */}

                {/* Start Single Area */}
                <div className="row sercice-details-content pb--80 align-items-start">
                  <div className="col-lg-6 col-12">
                    <div className="thumb">
                      <img
                        className="w-100"
                        src="/assets/images/service/hrservice03.JPG"
                        alt="Service Images"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 col-12 mt-2">
                    <div className="title">
                      <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_services_3_head")}</h4>
                      <div className={`${Styles.serviceDdesc} mb-3`}>
                        {t("hr_services_3_desc")}
                      </div>
                      <ul className={`${Styles.serviceLists} liststyle`}>
                        <li>{t("hr_services_3_li1")}</li> <br />
                        <li>{t("hr_services_3_li2")}</li> <br />
                        <li>{t("hr_services_3_li3")}</li> <br />
                        <li>{t("hr_services_3_li4")}</li> <br />
                      </ul>
                    </div>
                  </div>
                </div>
                {/* End Single Area */}
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
      <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
