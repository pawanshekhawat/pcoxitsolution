import React, { Component, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import Toggle from "../component/Toggle/Toggle";

const Blog = () => {

    const [isDark, setIsDark] = useState(false);

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Blog' />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Our Blogs'} />
            {/* End Breadcrump Area */}


            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1">
                <div className="container">
                    <BlogList />
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

                <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

            </div>

            <Footer />

        </div>
    )
}

export default Blog;
