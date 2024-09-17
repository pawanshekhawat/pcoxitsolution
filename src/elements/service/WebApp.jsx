import React, { useState } from "react";
import PageHelmet from "../../component/common/Helmet";
import HeaderThree from "../../component/header/HeaderThree";
import Footer from "../../component/footer/Footer";
import Toggle from "../../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import Styles from "../../../public/assets/css/custom.module.css";
import WDBredCrmb from "../../../public/assets/images/service/breadcrumbWD.jpg";

import { useTranslation } from "react-i18next";

const WebApp = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(false);

  const pageTitle = "Web Application Development";

  const backgroundImages = {
    "Web Application Development": WDBredCrmb,
  };

  // Default to no background image if the pageTitle doesn't match
  const backgroundImage = backgroundImages[pageTitle] || "none";

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle={pageTitle} />
      {/* End Pagehelmet  */}

      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      <div className="bg_color--1">
        <div
          style={{
            height: "600px",
            backgroundImage: `url(${backgroundImage})`, // Use the background image
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
                {t("web_dev_1_head")}
              </h1>
              <p className="text-white mb-8">{t("wd_main_desc")}</p>
              <div className="d-flex justify-content-center mb-4">
                <a
                  href="#redirect"
                  className={`${Styles.getStBtn} btn px-4 py-2 mt-3 rounded text-white`}
                >
                  {t("get_started")}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container pt--120">
          <div className="bg_color--1 py-5">
            <h2 className="display-4 text-center font-weight-normal mb-5">
              {t("wd_process1_main_title")}
            </h2>
            <div className="row mx-auto">
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("wd_process1_1_title")}
                  </h3>
                  <p>{t("wd_process1_1_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("wd_process1_2_title")}
                  </h3>
                  <p>{t("wd_process1_2_desc")}</p>
                </div>
              </div>
              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("wd_process1_3_title")}
                  </h3>
                  <p>{t("wd_process1_3_desc")}</p>
                </div>
              </div>

              <div className="col-md-6 col-lg-6 mb-4">
                <div
                  className={`${Styles.DevProg} p-4 bg_color--5 rounded shadow-sm`}
                >
                  <h3 className="h3 font-weight-bold serviceProcHead">
                    {t("wd_process1_4_title")}
                  </h3>
                  <p>{t("wd_process1_4_desc")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-5">
            <h2 className="display-4 text-center mb-5">
              {t("wd_solution1_title")}
            </h2>
            <div className="row">
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_1")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_2")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_3")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_4")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_5")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_6")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_7")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_8")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_9")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_10")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_11")}
                </div>
              </div>
              <div className="col-6 col-md-4 col-lg-3 mb-4">
                <div className={`${Styles.cardBtn2} p-3 rounded text-center`}>
                  {t("wd_solution1_12")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center">
        <h2 className="display-4 mb-4">{t("contact_us_bottom_title")}</h2>
        <p className=" mb-5">{t("contact_us_bottom_desc")}</p>
        <a
          href="/contact"
          className="btn blog-btn rn-btn px-5 h3 font-weight-bold"
        >
          {t("contact_us_bottom_btn")}
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

export default WebApp;
