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

  const { column, styevariation, item } = props;
  const list = PortfolioListContent.slice(0, item);

  // Slider settings
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Only show 1 slide on mobile screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,      // Set to 3 seconds (3000ms) between scrolls

  };

  return (
    <div>
      {isMobile ? (
        // Show slider on mobile
        <Slider {...sliderSettings}>
          {list.map((value, index) => (
            <div key={index}>
              <div className={`portfolio ${styevariation}`}>
                <div className="thumbnail-inner">
                  <div className={`thumbnail ${value.image}`}></div>
                  <div className={`bg-blr-image ${value.image}`}></div>
                </div>
                <div className="content">
                  <p className="iwsContentCardIcon">{value.icon}</p>
                  <div className="inner iwsContentCard">
                    <h3 className="iwsContentCardTitle">
                      {value.category} <br />
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      ) : (
        // Show normal grid for larger screens

       
        <div className="row">
            {list.map((value, index) => (
                <div className={`${column}`} key={index}>
                    <div className={`portfolio ${styevariation}`}>
                        <div className="thumbnail-inner">
                            <div className={`thumbnail ${value.image}`}></div>
                            <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                        <div className="content ">
                            <p className="iwsContentCardIcon">{value.icon}</p>
                            <div className="inner iwsContentCard">
                                <h3 className="iwsContentCardTitle">{value.category} <br />
                                    {/* <p className="iwsContentCardPara">{value.title}</p> */}
                                </h3>
                            </div>
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
