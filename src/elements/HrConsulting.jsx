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

  const [isDark, setIsDark] = useState(true);

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      {/* Start Pagehelmet  */}
      <PageHelmet pageTitle="HR Consulting" />
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
                <h2 className="title">{t("hr_consulting_0")}</h2>
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
          <h3>We provide variety of services:</h3>
          <div className="row">
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#sd"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <FaMedapps className={Styles.reactIcons} /> <br />
                  Software Development
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_1_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#sd" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#web"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <SiAmazonwebservices className={Styles.reactIcons} /> <br />
                  Web Application Development
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_2_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#web" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#app"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <TbDeviceMobileCharging className={Styles.reactIcons} />{" "}
                  <br />
                  Mobile App Development
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_3_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#app" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#si"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoIosAddCircleOutline className={Styles.reactIcons} />
                  <br />
                  Software Integration
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_4_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#si" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#cb"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoCloudCircleOutline className={Styles.reactIcons} /> <br />
                  Cloud-Based Solutions
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_5_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#cb" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
            <div
              className={`${Styles.serviceCard} card col-12 col-md-6 col-lg-5 mb-4 ml-lg-4 mx-md-auto mx-sm-auto`}
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
                  href="#sm"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <BiSupport className={Styles.reactIcons} /> <br />
                  Software Maintenance and Support
                </a>
                <p className={`card-text text-white ${Styles.serviceText}`}>
                  {t("hr_consulting_6_desc")}
                </p>
                <div className="btm-btn" style={{ color: "#fff" }}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Need Service
                  </a>
                  <a href="#sm" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}

          <div className="row pt--120" id="sd">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="thumb">
                        <img
                          className="w-100"
                          style={{ height: "600px" }}
                          src="/assets/images/service/hrconsulting01.JPG"
                          alt="Service Images"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_1_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_1_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_1_li1")}</li> <br />
                          <li>{t("hr_consulting_1_li2")}</li> <br />
                          <li>{t("hr_consulting_1_li3")}</li> <br />
                          <li id="web">{t("hr_consulting_1_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_2_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_2_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_2_li1")}</li> <br />
                          <li>{t("hr_consulting_2_li2")}</li> <br />
                          <li>{t("hr_consulting_2_li3")}</li> <br />
                          <li id="app">{t("hr_consulting_2_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          style={{ height: "600px" }}
                          src="/assets/images/service/hrconsulting02.JPG"
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
                          src="/assets/images/service/hrconsulting03.JPG"
                          alt="Service Images"
                          style={{ height: "600px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_3_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_3_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_3_li1")}</li> <br />
                          <li>{t("hr_consulting_3_li2")}</li> <br />
                          <li>{t("hr_consulting_3_li3")}</li> <br />
                          <li id="si">{t("hr_consulting_3_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_4_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_4_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_4_li1")}</li> <br />
                          <li>{t("hr_consulting_4_li2")}</li> <br />
                          <li>{t("hr_consulting_4_li3")}</li> <br />
                          <li id="cb">{t("hr_consulting_4_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/hrconsulting04.JPG"
                          alt="Service Images"
                          style={{ height: "600px" }}
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
                          src="/assets/images/service/hrconsulting05.JPG"
                          alt="Service Images"
                          style={{ height: "600px" }}
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_5_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_5_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_5_li1")}</li> <br />
                          <li>{t("hr_consulting_5_li2")}</li> <br />
                          <li>{t("hr_consulting_5_li3")}</li> <br />
                          <li id="sm">{t("hr_consulting_5_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-center">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className="title">{t("hr_consulting_6_head")}</h4>
                        <div className="mb-3" style={{ fontSize: "15px" }}>
                          {t("hr_consulting_6_desc")}
                        </div>
                        <ul className="liststyle">
                          <li>{t("hr_consulting_6_li1")}</li> <br />
                          <li>{t("hr_consulting_6_li2")}</li> <br />
                          <li>{t("hr_consulting_6_li3")}</li> <br />
                          <li>{t("hr_consulting_6_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12 order-1 order-lg-2">
                      <div className="thumb position-relative">
                        <img
                          className="w-100"
                          src="/assets/images/service/hrconsulting06.JPG"
                          alt="Service Images"
                          style={{ height: "600px" }}
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
