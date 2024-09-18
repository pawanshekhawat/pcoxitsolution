import React, { useState, useContext } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiChevronUp } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";

import { ThemeContext } from '../ThemeContext';
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
    const { t } = useTranslation();
     const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle={t('blog_title1')} />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrumb Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title text-white">{t('blog_title1')}</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />{t('blog_date1')}</li>
                                    <li><FiUser />{t('blog_author1')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumb Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="section-title">
                                    <p className="mt--40">
                                        {t('blog_intro1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section1_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section1_desc1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section2_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section2_desc1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section3_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section3_desc1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section4_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section4_desc1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section5_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section5_desc1')}
                                    </p>

                                    <h2 className="mt--25 mt_sm--5">{t('section6_title1')}</h2>
                                    <p className="mt--25 mt_sm--5">
                                        {t('section6_desc1')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

            <div className="toggle-button">
      <Toggle isChecked={isDark} handleChange={toggleTheme} />            </div>
        </div>
    );
}

export default BlogDetails;
