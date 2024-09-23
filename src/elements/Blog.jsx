import React, { useContext, useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import Pagination from "../elements/common/Pagination";
import BlogList from "../elements/blog/BlogList";
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import Toggle from "../component/Toggle/Toggle";

import { ThemeContext } from '../ThemeContext';

const Blog = () => {

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
        return (
            <div className={isDark ? "active-dark" : "active-light"} >
                {/* <div style={{ width: '100vw', height: "100vh", display: "grid", placeItems: "center" }}>
            <img src={LoaderGif} />
          </div> */}
                <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
                    <dotlottie-player
                        src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
                        background="transparent"
                        speed="1"
                        style={{ width: '300px', height: '300px' }}
                        loop
                        autoplay
                    ></dotlottie-player>
                </div>
            </div>
        );
    }
    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Blog' />

            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />
            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Our Blogs'} />
            {/* End Breadcrump Area */}


            {/* Start Blog Area */}
            <div className="rn-blog-area ptb--120 bg_color--1 seprateBgSection">
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

                <Toggle isChecked={isDark} handleChange={toggleTheme} />
            </div>

            <Footer />

        </div>
    )
}

export default Blog;
