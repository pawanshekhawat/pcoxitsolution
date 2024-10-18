import React, { useState, useContext, useEffect, lazy, Suspense } from "react";
import PageHelmet from "../component/common/Helmet";
import ScrollToTop from "react-scroll-up";
import { FiChevronUp } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import DotlottieLoad from "../Dotlottie/Dotlottie.jsx";

import Toggle from "../component/Toggle/Toggle";

import { ThemeContext } from "../ThemeContext";
// import ImageWithPriority from "../component/common/ImageWithPriority.jsx";

import Breadcrumb from "../elements/common/Breadcrumb";
const ImageWithPriority = lazy(() => import("../component/common/ImageWithPriority.jsx"));
const HeaderThree = lazy(() => import("../component/header/HeaderThree"));
const Footer = lazy(() => import("../component/footer/Footer"));

const Blog = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically append the new script for dotlottie-player
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs";
    script.type = "module";
    document.head.appendChild(script);
    console.log("blog useeffect1");

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    console.log("blog useeffect2");

    fetchData();
  }, []);

  const { t, i18n } = useTranslation(); // Use the useTranslation hook
  // Array of blog data
  const blogs = [
    {
      id: 1,
      image: "/assets/images/blog/blog-01.webp",
      author: t("blog_author"),
      title: t("blog_title"),
      link: "/navigating-global-trade",
    },
    {
      id: 2,
      image: "/assets/images/blog/blog-02.webp",
      author: t("blog_author1"),
      title: t("blog_title1"),
      link: "/why-your-business-needs-custom-software",
    },
    {
      id: 3,
      image: "/assets/images/blog/blog-03.webp",
      author: t("blog_author1"),
      title: t("blog_byb_title1"),
      link: "/boost-your-brand",
    },
  ];

  if (loading) {
    return <DotlottieLoad />;
  }

  const isArabic = i18n.language === 'ar';
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Blog" />

      <Suspense fallback={<DotlottieLoad />}>
        <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
      </Suspense>
      {/* Start Breadcrump Area */}
      <Breadcrumb title={t("blog")} />
      {/* End Breadcrump Area */}

      {/* Start Blog Area */}
      <div className="rn-blog-area ptb--120 bg_color--1 seprateBgSection">
        <div className="container aboutRspnContainer">
          <div className="row">
            {blogs.map((blog) => (
              <div
                className="col-lg-4 col-md-6 col-sm-6 col-12 blogPageBox"
                key={blog.id}
              >
                <div className="blog blog-style--1">
                  <div className="thumbnail blogImageBox">
                    <a href={blog.link}>
                      <img
                        loading="eager"
                        className="w-100"
                        src={blog.image}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                    <p className="blogtype">{blog.author}</p>
                    <h4 className="title">
                      <a href={blog.link}>{blog.title}</a>
                    </h4>
                    <div className="blog-btn">
                      <a className="rn-btn text-white" href={blog.link}>
                        {t("read_more")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="row mt--20">
            <div className="col-lg-12">
              {/* Start Pagination Area */}
              {/* <Pagination /> */}
              {/* End Pagination Area */}
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Area */}

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

export default Blog;
