import React, { useState, useContext } from "react";

import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
 
import PPCBredCrmb from "../../../public/assets/images/service/breadcrumbPPC.jpg";

import { useTranslation } from "react-i18next";

import { ThemeContext } from '../../ThemeContext';


const PPCService = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

   const { isDark, toggleTheme } = useContext(ThemeContext);

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
          <div className="overlayServices">
            <div
              style={{
                height: "600px",
              }}
              className="d-flex flex-column align-items-center justify-content-center text-dark text-center"
            >
              <h1 className="display-4 text-white font-weight-bold mb-4 mx-auto serviceInTitile">
                {t("ppc_advertising_head")}
              </h1>
              <p className="text-white mb-8">
                {t("ppc_advertising_main_desc")}
              </p>
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="#redirect"
                  className="getStBtn btn px-4 py-2 mt-3 rounded text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt--120">
          <div className="bg_color--1 py-5">
            <h2 className="display-4 text-center font-weight-normal mb-5 DevProgTilte">
              {t("ppc_advertising_process1_main_title")}
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className="DevProg p-4 bg_color--5 rounded shadow-sm"
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("ppc_advertising_process1_1_title")}
                  </h3>
                  <p>{t("ppc_advertising_process1_1_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className="DevProg p-4 bg_color--5 rounded shadow-sm"
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("ppc_advertising_process1_2_title")}
                  </h3>
                  <p>{t("ppc_advertising_process1_2_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className="DevProg p-4 bg_color--5 rounded shadow-sm"
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("ppc_advertising_process1_3_title")}
                  </h3>
                  <p>{t("ppc_advertising_process1_3_desc")}</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className="DevProg p-4 bg_color--5 rounded shadow-sm"
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("ppc_advertising_process1_4_title")}
                  </h3>
                  <p>{t("ppc_advertising_process1_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5 DevProgTilte">
              {t("ppc_advertising_solution1_title")}
            </h2>
            <div className="row">
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("ppc_advertising_solution1_1")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("ppc_advertising_solution1_2")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("ppc_advertising_solution1_3")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("ppc_advertising_solution1_4")}
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 mb-4">
                <div className="cardBtn2 p-3 rounded text-center">
                  {t("ppc_advertising_solution1_5")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center bg_color--1">
        <h2 className="display-4 mb-4 DevProgTilte">
          {t("ppc_contact_title")}
        </h2>
        <p className="mb-5">
        {t("ppc_contact_desc")}
        </p>
        <a
          href="/contact"
          className="btn blog-btn rn-btn px-5 h3 font-weight-bold contactBlogBtn"
        >
          {t("ppc_contact_btn")}
        </a>
      </div>

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>

      <div className="toggle-button">
  <Toggle isChecked={isDark} handleChange={toggleTheme} />      </div>

      {/* End Back To Top */}
      <Footer />
    </div>
  );
};

export default PPCService;
