import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const BlogSlider = () => {
    const { t, i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const [isMobile, setIsMobile] = useState(false);

    // Slider settings
    const sliderServiceSettings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 575); // Set mobile if screen size
    };
    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // Listen to resize events

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on unmount
        };
    }, []);

    const BlogContent = [
        {
            id: "1",
            images: "01",
            title: `${t("blog_title")}`,
            category: `${t("blog_author")}`,
            bloglink: "/navigating-global-trade",
        },
        {
            id: "2",
            images: "02",
            title: `${t("management")}`,
            category: `${t("blog_author")}`,
            bloglink: "/why-your-business-needs-custom-software",
        },

        {
            id: "3",
            images: "03",
            title: `${t("design")}`,
            category: `${t("blog_author")}`,
            bloglink: "/boost-your-brand",
        },
    ];

    const PostList = BlogContent.slice(0, 3);
    return (
        <>
            {isMobile ? (
                <div className="">
                    <Slider {...sliderServiceSettings}>
                        {PostList.map((value) => (
                            <div
                                className="col-lg-4 col-md-6 col-sm-6 col-12"
                                key={value.id}
                            >
                                <div className="blog blog-style--1 Blogblur">
                                    <div className="thumbnail blogImageBox">
                                        <a href={`${value.bloglink}`}>
                                            <img
                                                loading="eager"
                                                className="w-100"
                                                src={`/assets/images/blog/blog-${value.images}.webp`}
                                                alt="Blog Images"
                                            />
                                        </a>
                                    </div>
                                    <div className="content">
                                        <h4 className="title blogHomeTitle">
                                            <a href={`${value.bloglink}`}>{value.title}</a>
                                        </h4>
                                        <p className="blogtype blogHomeTitleAuth">
                                            {value.category}
                                        </p>
                                        <div className="blog-btn blogHomeBtnBox">
                                            <a
                                                className="rn-btn text-white blogHomeBtn"
                                                href={`${value.bloglink}`}
                                            >
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
                <div className="row mt--60 mt_sm--40 h-full">
                    {PostList.map((value, i) => (
                        <div className="col-lg-4 col-md-6 col-12" key={i}>
                            <div className="blog blog-style--1">
                                <div className="thumbnail blogImageBox">
                                    <a href={`${value.bloglink}`}>
                                        <img
                                            loading="eager"
                                            className="w-100"
                                            src={`/assets/images/blog/blog-${value.images}.webp`}
                                            alt="Blog Images"
                                        />
                                    </a>
                                </div>
                                <div className="content" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                                    <h4 className="title">
                                        <a href={`${value.bloglink}`}>{value.title}</a>
                                    </h4>
                                    <p className="blogtype">{value.category}</p>
                                    <div className="blog-btn">
                                        <a
                                            className="rn-btn text-white"
                                            href={`${value.bloglink}`}
                                        >
                                            {t("read_more")}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    )
}

export default BlogSlider
