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

  const [isDark, setIsDark] = useState(false);

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
          {/* End Service Card Area */}
          <div className="row pt--120 hidden" id="seo">
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("thirt_party_1_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("thirt_party_1_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("thirt_party_2_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("thirt_party_2_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("thirt_party_3_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("thirt_party_3_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
                        <h4 className={`${Styles.serviceDTitle} title`}>{t("thirt_party_4_head")}</h4>
                        <div className={`${Styles.serviceDdesc} mb-3`}>
                          {t("thirt_party_4_desc")}
                        </div>
                        <ul className={`${Styles.serviceLists} liststyle`}>
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
