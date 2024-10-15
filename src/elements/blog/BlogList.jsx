import React, { Fragment, useState, useEffect } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageWithPriority = lazy(() => import("../../component/common/ImageWithPriority"));

const BLogList = () => {
  const { t, i18n } = useTranslation();

  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 575);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 0.8 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

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

  const isArabic = i18n.language === 'ar';

  return (
    <Fragment>
      {isMobile ? (
        <div>
          <Slider {...sliderSettings}>
            {blogs.map((blog) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={blog.id}>
                <div className="blog blog-style--1">
                  <div className="thumbnail blogImageBox">
                    <a href={blog.link}>
                      <ImageWithPriority
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
          </Slider>
        </div>
      ) : (
        <div className="row">

          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={blog.id}>
              <div className="blog blog-style--1">
                <div className="thumbnail blogImageBox">
                  <a href={blog.link}>
                    <ImageWithPriority
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
      )}
    </Fragment>
  );
};

export default BLogList;
