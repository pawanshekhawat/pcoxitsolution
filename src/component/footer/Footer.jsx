import React, { Component, useState, useContext } from "react";

import { useTranslation } from "react-i18next";
import {
  FaTwitter,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const SocialShare = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" },
];

const Footer = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <footer className="footer-area">
        <div className="footer-wrapper">
          <div className="row align-items-end row--0">
            <div className="col-lg-6">
              <div className="footer-left">
                <div className="inner">
                  <span>{t("ready_to_do_this")}</span>
                  <h2>{t("lets_get_to_work")}</h2>
                  <a className="rn-button-style--2" href="/contact">
                    <span>{t("contact_us")}</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="footer-right" data-black-overlay="8">
                <div className="row">
                  {/* Start Single Widget  */}
                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>{t("contact_us")}</h4>
                      <ul className="ft-link">
                        <li>
                          <a href="/">{t("home")}</a>
                        </li>
                        <li>
                          <a href="/about">{t("about")}</a>
                        </li>
                        <li>
                          <a href="/service">{t("services")}</a>
                        </li>
                        <li>
                          <a href="/blog">{t("blog")}</a>
                        </li>
                        <li>
                          <a href="/contact">{t("contact")}</a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="col-lg-6 col-sm-6 col-12">
                    <div className="footer-link">
                      <h4>{t("our_services")}</h4>
                      <ul className="ft-link">
                        <li>
                          <a
                            href={`${process.env.PUBLIC_URL}/import-export-logistics-services`}
                          >
                            {t("hr_services")}
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${process.env.PUBLIC_URL}/software-development`}
                          >
                            {t("hr_consulting")}
                          </a>
                        </li>
                        <li>
                          <a
                            href={`${process.env.PUBLIC_URL}/digital-marketing`}
                          >
                            {t("hr_third_party_payroll_services")}
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="social-share-inner">
                      <div className="footer-link">
                        {/* <h4 className="mt-4">{t("social_connect")}</h4> */}
                        <ul className="mt-4 social-share social-style--2 color-white d-flex justify-content-start liststyle align-items-center">
                          {/* <MultiLang /> */}
                          {SocialShare.map((val, i) => (
                            <li key={i}><a href={`${val.link}`}>{val.Social}</a></li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* End Single Widget  */}

                  <div className="col-lg-12">
                    <div className="copyright-text">
                      <p>{t("copyright")}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
