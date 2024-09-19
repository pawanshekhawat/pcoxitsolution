import React, { Fragment } from "react";
import BlogContent from "./BlogContent";
import { useTranslation } from "react-i18next";

const BLogList = () => {
    const { t } = useTranslation(); // Use the useTranslation hook

    return (
        <Fragment>
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="blog blog-style--1">
                        <div className="thumbnail">
                            <a href="/navigating-global-trade">
                                <img className="w-100" src={`/assets/images/blog/blog-01.jpg`} alt="Blog Images"/>
                            </a>
                        </div>
                        <div className="content">
                            <p className="blogtype">{t("blog_author")}</p>
                            <h4 className="title">
                                <a href="/navigating-global-trade">{t("blog_title")}</a>
                            </h4>
                            <div className="blog-btn">
                                <a className="rn-btn text-white" href="/navigating-global-trade">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="blog blog-style--1">
                        <div className="thumbnail">
                            <a href="/">
                                <img className="w-100" src={`/assets/images/blog/blog-02.jpg`} alt="Blog Images"/>
                            </a>
                        </div>
                        <div className="content">
                            <p className="blogtype">{t("blog_author1")}</p>
                            <h4 className="title">
                                <a href="/">{t("blog_title1")}</a>
                            </h4>
                            <div className="blog-btn">
                                <a className="rn-btn text-white" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="blog blog-style--1">
                        <div className="thumbnail">
                            <a href="/">
                                <img className="w-100" src={`/assets/images/blog/blog-01.jpg`} alt="Blog Images"/>
                            </a>
                        </div>
                        <div className="content">
                            <p className="blogtype">{t("blog_author1")}</p>
                            <h4 className="title">
                                <a href="/">{t("blog_byb_title1")}</a>
                            </h4>
                            <div className="blog-btn">
                                <a className="rn-btn text-white" href="/">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BLogList;
