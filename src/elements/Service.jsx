import React, { Component, useState } from "react";
import PageHelmet from "../component/common/Helmet";
import Breadcrumb from "../elements/common/Breadcrumb";
import { FiCast, FiLayers, FiUsers, FiMonitor, FiChevronUp } from "react-icons/fi";
import ScrollToTop from 'react-scroll-up';
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";

import Toggle from "../component/Toggle/Toggle";


const ServiceList = [
    {
        icon: <FiCast />,
        title: 'HR Services',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-services'
    },
    {
        icon: <FiLayers />,
        title: 'HR Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-consulting'
    },
    {
        icon: <FiUsers />,
        title: 'HR Third Party Payroll Services',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-third-party'
    },
    {
        icon: <FiMonitor />,
        title: 'Business Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-third-party'

    },
    {
        icon: <FiUsers />,
        title: 'HR Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-third-party'
    },
    {
        icon: <FiMonitor />,
        title: 'Business Consulting',
        description: 'I throw myself down among the tall grass by the stream as I lie close to the earth.',
        path: '/hr-third-party'

    }
]
const Service = () => {

    const [isDark, setIsDark] = useState(true);

    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Service' />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <Breadcrumb title={'Service'} />
            {/* End Breadcrump Area */}

            {/* Start Service Area */}
            <div className="service-area ptb--120 bg_color--5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb--30">
                                <h2>Our Services</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, <br /> but the majority have suffered alteration.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row service-one-wrapper">
                        {ServiceList.map((val, i) => (
                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                                <a href={val.path}>
                                    <div className="service service__style--2">
                                        <div className="icon">
                                            {val.icon}
                                        </div>
                                        <div className="content" >
                                            <h3 className="title">{val.title}</h3>
                                            <p>{val.description}</p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* End Service Area */}






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
export default Service;