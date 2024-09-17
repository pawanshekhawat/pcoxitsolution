import React, { useState, useContext } from "react";
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
                <h2 className="title text-white">{t("hr_consulting_0")}</h2>
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
          <h3 className={`${Styles.serviceHead}`}>We provide variety of services</h3>
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
                  Software Development
                </a>
                <div className={`${Styles.btmBtn} mt-3`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/software-development" className={`${Styles.cardBtn} btn ml-4`}>
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
                  href="/service/web-app"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <SiAmazonwebservices className={Styles.reactIcons} /> <br />
                  Web Application Development
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/web-app" className={`${Styles.cardBtn} btn ml-4`}>
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
                  href="/service/mobile-app"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <TbDeviceMobileCharging className={Styles.reactIcons} />{" "}
                  <br />
                  Mobile App Development
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/mobile-app" className={`${Styles.cardBtn} btn ml-4`}>
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
                  href="/service/software-integration"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoIosAddCircleOutline className={Styles.reactIcons} />
                  <br />
                  Software Integration Solutions
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/software-integration" className={`${Styles.cardBtn} btn ml-4`}>
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
                  href="/service/cloud-based-solutions"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <IoCloudCircleOutline className={Styles.reactIcons} /> <br />
                  Cloud-Based Solutions
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/cloud-based-solutions" className={`${Styles.cardBtn} btn ml-4`}>
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
                  href="/service/software-maintenance"
                  className={`card-title h3 text-white ${Styles.title}`}
                >
                  <BiSupport className={Styles.reactIcons} /> <br />
                  Software Maintenance
                </a>
                <div className={`${Styles.btmBtn} mt-3 d-flex`}>
                  <a href="/contact" className={`${Styles.cardBtn} btn`}>
                    Enquire Now
                  </a>
                  <a href="/service/software-maintenance" className={`${Styles.cardBtn} btn ml-4`}>
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* End Service Card Area */}

          <div className="row pt--120 hidden " id="sd">
            <div className="col-lg-12">
              <div className="service-details-inner">
                <div className="inner">
                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-start">
                  <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_1_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_1_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
                          <li>{t("hr_consulting_1_li1")}</li> <br />
                          <li>{t("hr_consulting_1_li2")}</li> <br />
                          <li>{t("hr_consulting_1_li3")}</li> <br />
                          <li id="web">{t("hr_consulting_1_li4")}</li> <br />
                        </ul>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                    <h4 className={`${Styles.serviceDTitle2} title`}>{t("hr_sd_1_head")}</h4>
                      <div className="thumb">
                      <ul className={`${Styles.serviceLists2} liststyle`}>
                          <li>1. {t("hr_sd_1_li1")}</li> <br />
                          <li>2. {t("hr_sd_2_li1")}</li> <br />
                          <li>3. {t("hr_sd_3_li1")}</li> <br />
                          <li>4. {t("hr_sd_4_li1")}</li> <br />
                          <li>5. {t("hr_sd_5_li1")}</li> <br />
                          <li>6. {t("hr_sd_6_li1")}</li> <br />
                          <li>7. {t("hr_sd_7_li1")}</li> <br />
                          <li>8. {t("hr_sd_8_li1")}</li> <br />
                          <li>9. {t("hr_sd_9_li1")}</li> <br />
                          <li>10. {t("hr_sd_10_li1")}</li> <br />
                          <li>11. {t("hr_sd_11_li1")}</li> <br />
                          <li>12. {t("hr_sd_12_li1")}</li> <br />
                      </ul>
                        {/* <img
                          className="w-100"
                          style={{ height: "600px" }}
                          src="/assets/images/service/hrconsulting01.JPG"
                          alt="Service Images"
                        /> */}
                      </div>
                    </div>

                  </div>
                  {/* End Single Area */}

                  {/* Start Single Area */}
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_2_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_2_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                  <div className="row sercice-details-content pb--80 align-items-start">
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_3_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_3_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_4_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_4_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                  <div className="row sercice-details-content pb--80 align-items-start">
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_5_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_5_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                  <div className="row sercice-details-content pb--80 align-items-start">
                    <div className="col-lg-6 col-12">
                      <div className="title">
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("hr_consulting_6_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("hr_consulting_6_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
        <Toggle isChecked={isDark} handleChange={toggleTheme} />
      </div>

      <Footer />
    </div>
  );
};

export default ServiceDetails;
