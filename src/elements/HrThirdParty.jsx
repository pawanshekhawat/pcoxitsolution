import React, { useState } from "react";
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

const ServiceDetails = () => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const [isDark, setIsDark] = useState(true);

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
                <h2 className="title">{t("thirt_party_0")}</h2>
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
          <h3>In Digital Marketing, Here's what we provide:</h3>
          <div className="row ">
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-5`}
              style={{
                backdropFilter: "blur(17px) saturate(200%)",
                WebkitBackdropFilter: "blur(17px) saturate(200%)",
                backgroundColor: "#191919",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="card-body">
                <a
                  href="#seo"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <RiSeoLine className={Styles.reactIcons} /> <br />
                  Search Engine Optimization (SEO)
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("thirt_party_1_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    Need Service
                  </a>
                  <a
                    href="#seo"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-5`}
              style={{
                backdropFilter: "blur(17px) saturate(200%)",
                WebkitBackdropFilter: "blur(17px) saturate(200%)",
                backgroundColor: "#191919",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="card-body">
                <a href="#marketing" className="card-title h3 text-white">
                  <BiBookContent className={Styles.reactIcons} /> <br />
                  Content Marketing
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("thirt_party_2_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    Need Service
                  </a>
                  <a
                    href="#marketing"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-5`}
              style={{
                backdropFilter: "blur(17px) saturate(200%)",
                WebkitBackdropFilter: "blur(17px) saturate(200%)",
                backgroundColor: "#191919",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="card-body">
                <a href="#social" className="card-title h3 text-white">
                  <IoShareSocialSharp className={Styles.reactIcons}/> <br />
                  Social Media Marketing
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("thirt_party_3_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    Need Service
                  </a>
                  <a
                    href="#social"
                    className={`${Styles.cardBtn} btn ml-4`}
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-5`}
              style={{
                backdropFilter: "blur(17px) saturate(200%)",
                WebkitBackdropFilter: "blur(17px) saturate(200%)",
                backgroundColor: "#191919",
                borderRadius: "12px",
                border: "1px solid rgba(255, 255, 255, 0.125)",
              }}
            >
              <div className="card-body">
                <a href="#ppc" className="card-title h3 text-white">
                  <TbClick className={Styles.reactIcons}/> <br />
                  Pay-Per-Click (PPC) Advertising
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("thirt_party_1_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a
                    href="/contact"
                    className={`${Styles.cardBtn} btn`}
                   
                  >
                    Need Service
                  </a>
                  <a
                    href="#ppc"
                    className={`${Styles.cardBtn} btn ml-4`}
                   
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}
          <div className="row pt--120" id="seo">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src="/assets/images/service/HR Third Party Payroll Services-01.JPG"
                          style={{ height: "600px" }}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("thirt_party_1_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("thirt_party_1_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("thirt_party_1_li1")}</li> <br />
                          <li>{t("thirt_party_1_li2")}</li> <br />
                          <li>{t("thirt_party_1_li3")}</li> <br />
                          <li id="marketing">{t("thirt_party_1_li4")}</li>{" "}
                          <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("thirt_party_2_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("thirt_party_2_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("thirt_party_2_li1")}</li> <br />
                          <li>{t("thirt_party_2_li2")}</li> <br />
                          <li>{t("thirt_party_2_li3")}</li> <br />
                          <li id="social">{t("thirt_party_2_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/HR Third Party Payroll Services-02.JPG"
                          style={{ height: "600px" }}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          src="/assets/images/service/HR Third Party Payroll Services-03.JPG"
                          style={{ height: "600px" }}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("thirt_party_3_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("thirt_party_3_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("thirt_party_3_li1")}</li> <br />
                          <li>{t("thirt_party_3_li2")}</li> <br />
                          <li>{t("thirt_party_3_li3")}</li> <br />
                          <li id="ppc">{t("thirt_party_3_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("thirt_party_4_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("thirt_party_4_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("thirt_party_4_li1")}</li> <br />
                          <li>{t("thirt_party_4_li2")}</li> <br />
                          <li>{t("thirt_party_4_li3")}</li> <br />
                          <li>{t("thirt_party_4_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/HR Third Party Payroll Services-04.JPG"
                          style={{ height: "600px" }}
                          alt="Service Images"
                        />
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}
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
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
