import React, { useState, useContext, useEffect, Suspense } from "react";

import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiChevronUp } from "react-icons/fi";
import ScrollToTop from "react-scroll-up";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from '../component/Toggle/Toggle';
import { ThemeContext } from '../ThemeContext';
import { useTranslation } from "react-i18next";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

const BlogDetails = () => {
  const { t, i18n } = useTranslation();
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      // Dynamically append the new script for dotlottie-player
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
      script.type = 'module';
      document.head.appendChild(script);
  
      // Cleanup when component unmounts
      return () => {
        document.head.removeChild(script);
      };
    }, []);
  
    useEffect(() => {
      const fetchData = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
        setLoading(false);
      };
  
      fetchData();
    }, []);
  
  if (loading) {
    return <DotlottieLoad />;
  }
  const isArabic = i18n.language === 'ar';

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle={t('blog_byb_title1')} />
            <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>

      {/* Start Breadcrumb Area */}
      <div
        className="rn-page-title-area pt--40 pb--190"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title section-title text-white">{t('blog_byb_title1')}</h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    {t('blog_byb_date1')}
                  </li>
                  <li>
                    <FiUser />
                    {t('blog_byb_author1')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumb Area */}

      {/* Start Blog Details */}
      <div className="rn-blog-details pt--110 pb--70 bg_color--1 seprateBgSection" style={{ textAlign: isArabic ? 'right' : 'left' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="section-title">
                  <h2 className="mt--25 mt_sm--5 blogDetailTitle">{t('section1_byb_title1')}</h2>
                  <p>
                    {t('section1_byb_desc1')}
                  </p>

                  <h2 className="mt--25 mt_sm--5 blogDetailTitle">{t('section2_byb_title1')}</h2>
                  <p>
                    {t('section2_byb_desc1')}
                  </p>

                  <h2 className="mt--25 mt_sm--5 blogDetailTitle">{t('section3_byb_title1')}</h2>
                  <p>
                    {t('section3_byb_desc1')}
                  </p>

                  <h2 className="mt--25 mt_sm--5 blogDetailTitle">{t('section4_byb_title1')}</h2>
                  <p>
                    {t('section4_byb_desc1')}
                  </p>

                  <h2 className="mt--25 mt_sm--5 blogDetailTitle">{t('section5_byb_title1')}</h2>
                  <p>
                    {t('section5_byb_desc1')}
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
<Toggle isChecked={isDark} handleChange={toggleTheme} />      </div>
    </div>
  );
};

export default BlogDetails;
