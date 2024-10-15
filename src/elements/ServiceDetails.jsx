import React, { useState, useContext, useEffect, Suspense, lazy } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Toggle from "../component/Toggle/Toggle";
import { AiOutlineTruck } from "react-icons/ai";
import { LiaShipSolid } from "react-icons/lia";
import { PiAirplaneTiltLight } from "react-icons/pi";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

import { useTranslation } from "react-i18next";
import { ThemeContext } from "../ThemeContext";
import LandTransport from "./service/LandTransport.jsx";
import SeaTransport from "./service/SeaTransport.jsx";
import AirTransport from "./service/AirTransport.jsx";

const Footer = lazy(() => import("../component/footer/Footer"));
const ServiceDetails = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <DotlottieLoad />;
  }

  const isArabic = i18n.language === 'ar';

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Import-Export Services & Logistics Solutions" />

      <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      {/* Start Breadcrump Area */}
      <div className="breadcrumb-area rn-bg-color bg_image bg_image-service1">
        <div className="overlayServices ptb--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="rn-page-title text-center pt--100">
                  <h2 className="title section-title text-white">
                    {t("impo_expo_services_0")}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      <div className="rn-service-details ptb--120 bg_color--1 rn-about-area">
        <div className="container">
          <h3 className="serviceHead">{t("impo_expo_services_wwp_title")}</h3>
          <div className="serviceCards row">
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a href="#lt" className="card-title h3 text-white serviceCardTitle">
                  <AiOutlineTruck className="reactIcons" /> <br />
                  {t("impo_expo_services_wwp_card1_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">{t("services_wwp_card_btn1")}</a>
                  <a href="#lt" className="cardBtn btn mx-2">{t("services_wwp_card_btn2")}</a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a href="#st" className="card-title h3 text-white serviceCardTitle">
                  <LiaShipSolid className="reactIcons" /> <br />
                  {t("impo_expo_services_wwp_card2_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">{t("services_wwp_card_btn1")}</a>
                  <a href="#st" className="cardBtn btn mx-2">{t("services_wwp_card_btn2")}</a>
                </div>
              </div>
            </div>
            <div className="serviceCard card col-12 col-md-6 col-lg-3 mb-4">
              <div className="card-body">
                <a href="#at" className="card-title h3 text-white serviceCardTitle">
                  <PiAirplaneTiltLight className="reactIcons" /> <br />
                  {t("impo_expo_services_wwp_card3_title")}
                </a>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">{t("services_wwp_card_btn1")}</a>
                  <a href="#at" className="cardBtn btn mx-2">{t("services_wwp_card_btn2")}</a>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt--40 rn-about-area">
            <div className="col-lg-12">
              <div className="service-details-inner" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                <section className="seprateBgSection" id="lt">
                  <LandTransport />
                </section>
                <section id="st">
                  <SeaTransport />
                </section>
                <section className="seprateBgSection" id="at">
                  <AirTransport />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
