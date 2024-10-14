import React, { useState, useEffect } from "react";

import { useTranslation } from "react-i18next";
import { FiBox, FiGlobe, FiMonitor } from "react-icons/fi";
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ServiceThree = (props) => {
    const { t, i18n } = useTranslation();
    const [isMobile, setIsMobile] = useState(false);

    // Function to handle screen size changes
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 575); // Set mobile if screen size 
    };

    // Add resize event listener
    useEffect(() => {
        handleResize(); // Initial check
        window.addEventListener("resize", handleResize); // Listen to resize events

        return () => {
            window.removeEventListener("resize", handleResize); // Cleanup on unmount
        };
    }, []);

    const ServiceList = [
        {
            icon: <FiBox />,
            title: `${t('hr_services')}`,
            description: `${t('hr_services_message')}`,
            path: '/import-export-logistics-services'
        },
        {
            icon: <FiMonitor />,
            title: `${t('hr_consulting')}`,
            description: `${t('software_dev_message')}`,
            path: '/software-development'
        },
        {
            icon: <FiGlobe />,
            title: `${t('hr_third_party_payroll_services')}`,
            description: `${t('hr_third_party_payroll_services_message')}`,
            path: '/digital-marketing'
        },
    ];
    const { column, item } = props;
    const ServiceContent = ServiceList.slice(0, item);



    const sliderServiceSettings = {
        dots: true,
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        speed: 500,    // Set to 3 seconds (3000ms) between scrolls
        slidesToShow: 1, // Only show 1 slide on mobile screens
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const isArabic = i18n.language === 'ar';

    return (
        <React.Fragment>
            {isMobile ? (
                <Slider {...sliderServiceSettings}>
                    {ServiceContent.map((val, i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.path}>
                                <div className="service service__style--2 blur shadow-lg" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                                    <div className="icon">{val.icon}</div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </Slider>
            ) : (
                <div className="row">
                    {ServiceContent.map((val, i) => (
                        <div className={`${column}`} key={i}>
                            <a href={val.path}>
                                <div className="service service__style--2  shadow-lg" style={{ textAlign: isArabic ? 'right' : 'left' }}>
                                    <div className="icon">{val.icon}</div>
                                    <div className="content">
                                        <h3 className="title">{val.title}</h3>
                                        <p>{val.description}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default ServiceThree;

