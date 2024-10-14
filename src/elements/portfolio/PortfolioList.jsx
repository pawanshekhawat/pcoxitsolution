import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { RiMentalHealthLine } from "react-icons/ri";
import { GrUserWorker } from "react-icons/gr";
import { AiOutlineBank } from "react-icons/ai";
import { GoTag } from "react-icons/go";
import { LiaBookSolid } from "react-icons/lia";
// Import slick-carousel styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function PortfolioList(props) {
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);

  // Function to handle screen size changes
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 600); // Set mobile if screen size is <= 600px
  };

  // Add resize event listener
  useEffect(() => {
    handleResize(); // Initial check
    window.addEventListener("resize", handleResize); // Listen to resize events

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

  const PortfolioListContent = [
    {
      image: "image-1",
      category: `${t("building_construction")}`,
      title: `${t("building_construction_message")}`,
      icon: <AiOutlineShoppingCart className="iwsContentCardMainIcon" />,
    },
    {
      image: "image-2",
      category: `${t("road_construction")}`,
      title: `${t("road_construction_message")}`,
      icon: <RiMentalHealthLine className="iwsContentCardMainIcon" />,
    },
    {
      image: "image-3",
      category: `${t("oil_and_gas")}`,
      title: `${t("oil_and_gas_message")}`,
      icon: <GrUserWorker className="iwsContentCardMainIcon" />,
    },
    {
      image: "image-4",
      category: `${t("facility_management")}`,
      title: `${t("facility_management_message")}`,
      icon: <AiOutlineBank className="iwsContentCardMainIcon" />,
    },
    {
      image: "image-5",
      category: `${t("security")}`,
      title: `${t("security_message")}`,
      icon: <GoTag className="iwsContentCardMainIcon" />,
    },
    {
      image: "image-6",
      category: `${t("mep")}`,
      title: `${t("mep_message")}`,
      icon: <LiaBookSolid className="iwsContentCardMainIcon" />,
    },
  ];

  const { item } = props;
  const list = PortfolioListContent.slice(0, item);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1.04, // Only show 1 slide on mobile screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Set to 3 seconds (3000ms) between scrolls
  };

  return (
    <div>
      {isMobile ? (
        // Show slider on mobile
        <Slider {...sliderSettings}>
          {list.map((value, index) => (
            <div
              className="serviceCard portCardIWS card col-12 col-md-6 col-lg-3 m-4 px-0"
              key={index}
            >
              <div className="card-body">
                <span
                  
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <p className="portContentCardIcon">{value.icon}</p>
                  <br />
                  {value.category}
                </span>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Show normal grid for larger screens

        <div className="row justify-content-center align-items-center">
          {list.map((value, index) => (
            <div
              className="serviceCard portCardIWS card col-12 col-md-6 col-lg-3 m-4 px-0"
              key={index}
            >
              <div className="card-body">
                <span
                  
                  className="card-title h3 text-white serviceCardTitle"
                >
                  <p className="portContentCardIcon">{value.icon}</p>
                  <br />
                  {value.category}
                </span>
                <div className="btmBtn mt-3 d-flex">
                  <a href="/contact" className="cardBtn btn">
                    {t("services_wwp_card_btn1")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PortfolioList;
