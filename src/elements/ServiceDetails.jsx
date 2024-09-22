import React, { useState, useContext, useEffect } from "react";

import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
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
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Dynamically append the new script for dotlottie-player
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.head.appendChild(script);
  
      // Cleanup when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    useEffect(() => {
      const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
    if (loading) {
      return (
        <div className={isDark ? "active-dark" : "active-light"} >
          {/* <div style={{ width: '100vw', height: "100vh", display: "grid", placeItems: "center" }}>
            <img src={LoaderGif} />
          </div> */}
          <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
            <dotlottie-player
              src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
              background="transparent"
              speed="1"
              style={{ width: '300px', height: '300px' }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </div>
      );
    }
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle=" Import-Export Services & Logistics Solutions" />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div
        className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image-service1"
        data-black-overlay="5"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="rn-page-title text-center pt--100">
                <h2 className="title section-title text-white">{t("impo_expo_services_0")}</h2>
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
          <h3 className="serviceHead">
            {t("impo_expo_services_wwp_title")}
          </h3>
          <div className="serviceCards row">
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
            >
              <div className="card-body">
                <a
                  href="#lt"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <AiOutlineTruck className="reactIcons" /> <br />
                  {t("impo_expo_services_wwp_card1_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="#lt" className="cardBtn btn ml-4">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
            >
              <div className="card-body">
                <a
                  href="#st"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <LiaShipSolid className="reactIcons" /> <br />
                  {t("impo_expo_services_wwp_card2_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="#st" className="cardBtn btn ml-4">
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className="serviceCard card col-12 col-md-6 col-lg-3 mb-4"
            >
              <div className="card-body">
                <a
                  href="#at"
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <PiAirplaneTiltLight className="reactIcons" />
                  <br />
                  {t("impo_expo_services_wwp_card3_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="#at" className="cardBtn btn ml-4">
                    {t("services_wwp_card_btn2")}
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
                        <ul className="serviceLists liststyle">
                          <li>{t("impo_expo_services_1_li1")}</li> <br />
                          <li>{t("impo_expo_services_1_li3")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="serviceDTitle title">
                          {t("impo_expo_services_1_head")}
                        </h4>
                        <div className="serviceDdesc mb-3">
                          {t("impo_expo_services_1_desc")}
                        </div>
                        <ul className="serviceLists liststyle">
                          <li>{t("impo_expo_services_1_li2")}</li> <br />
                          <li id="st">{t("impo_expo_services_1_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12 mt-2">
                      <div className="title">
                        <h4 className="serviceDTitle title">
                          {t("impo_expo_services_2_head")}
                        </h4>
                        <div className="serviceDdesc mb-3">
                          {t("impo_expo_services_2_desc")}
                        </div>
                        <ul className="serviceLists liststyle">
                          <li>{t("impo_expo_services_2_li1")}</li> <br />
                          <li>{t("impo_expo_services_2_li2")}</li> <br />
                          <li>{t("impo_expo_services_2_li3")}</li> <br />
                          <li id="at">{t("impo_expo_services_2_li4")}</li> <br />
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
                      <h4 className="serviceDTitle title">
                        {t("impo_expo_services_3_head")}
                      </h4>
                      <div className="serviceDdesc mb-3">
                        {t("impo_expo_services_3_desc")}
                      </div>
                      <ul className="serviceLists liststyle">
                        <li>{t("impo_expo_services_3_li1")}</li> <br />
                        <li>{t("impo_expo_services_3_li2")}</li> <br />
                        <li>{t("impo_expo_services_3_li3")}</li> <br />
                        <li>{t("impo_expo_services_3_li4")}</li> <br />
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
<Toggle isChecked={isDark} handleChange={toggleTheme} />      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
