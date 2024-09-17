import React, { useState } from "react";
import PageHelmet from "../component/common/Helmet";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp, FiClock, FiUser } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const BlogDetails = () => {
    const { t } = useTranslation();
    const [isDark, setIsDark] = useState(false);

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            {/* Start Pagehelmet */}
            <PageHelmet pageTitle={t('blog_title')} />
            {/* End Pagehelmet */}

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image" data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title text-white">{t('blog_title')}</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />{t('blog_date')}</li>
                                    <li><FiUser />{t('blog_author')}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="section-title">
                                    <p>{t('blog_intro')}</p>
                                    <h2>{t('section1_title')}</h2>
                                    <p>{t('section1_desc')}</p>
                                    <h2>{t('section2_title')}</h2>
                                    <p>{t('section2_desc')}</p>
                                    <h2>{t('section3_title')}</h2>
                                    <p>{t('section3_desc')}</p>
                                    <h2>{t('section4_title')}</h2>
                                    <p>{t('section4_desc')}</p>
                                    <h2>{t('section5_title')}</h2>
                                    <p>{t('section5_desc')}</p>
                                    <h2>{t('section6_title')}</h2>
                                    <p>{t('section6_desc')}</p>
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
                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
            </div>
        </div>
    );
}

export default BlogDetails;
