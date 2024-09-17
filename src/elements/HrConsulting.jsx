import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from "react-modal-video";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import Styles from "../../public/assets/css/custom.module.css";
import { FaMedapps } from "react-icons/fa";
import { SiAmazonwebservices } from "react-icons/si";
import { TbDeviceMobileCharging } from "react-icons/tb";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IoCloudCircleOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";

import { useTranslation } from "react-i18next";

const ServiceDetails = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="Software Development" />
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
                <h2 className="title text-white">{t("software_dev_0")}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrump Area */}

      {/* Start Page Wrapper */}
      <div className="rn-service-details pt--180 pb--120 bg_color--1">
        <div className="container">
          {/* Start Service Card Area */}
          <h3 className={`${Styles.serviceHead}`}>{t("software_dev_0_title")}</h3>
          <div className={`${Styles.serviceCards} row`}>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
            >
              <div className="card-body">
                <a
                  href="/service/software-development"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <FaMedapps className={Styles.reactIcons} /> <br />
                  {t('software_dev_1_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/software-development" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
            >
              <div className="card-body">
                <a
                  href="/service/web-app"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <SiAmazonwebservices className={Styles.reactIcons} /> <br />
                  {t('software_dev_2_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/web-app" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a
                  href="/service/mobile-app"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <TbDeviceMobileCharging className={Styles.reactIcons} /><br />
                  {t('software_dev_3_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/mobile-app" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a
                  href="/service/software-integration"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoIosAddCircleOutline className={Styles.reactIcons} /> <br />
                  {t('software_dev_4_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/software-integration" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a
                  href="/service/cloud-based-solutions"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoCloudCircleOutline className={Styles.reactIcons} /> <br />
                  {t('software_dev_5_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/cloud-based-solutions" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-3 mb-4`}
 
            >
              <div className="card-body">
                <a
                  href="/service/software-maintenance"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <BiSupport className={Styles.reactIcons} /> <br />
                  {t('software_dev_6_head')}
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    {t("services_wwp_card_btn1")}
                  </a>
                  <a href="/service/software-maintenance" className={`${Styles.cardBtn} btn ml-4`}>
                    {t("services_wwp_card_btn2")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}
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
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
