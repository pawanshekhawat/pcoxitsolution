import React, { useState, useEffect } from "react";
import { Tabs, TabPanel } from 'react-tabs';
import { useTranslation } from 'react-i18next';

const Testimonial = () => {
    const { t } = useTranslation();

    // State to manage the active tab index
    const [activeIndex, setActiveIndex] = useState(0);
    const testimonialsLength = 5; // The number of testimonials you have

    useEffect(() => {
        // Automatically change the tab every 3 seconds (3000ms)
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsLength);
        }, 5000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, [testimonialsLength]);

    const tabPanelStyle = {
        position: 'absolute',
        width: '100%',
        opacity: 0,
        transition: 'opacity 1s ease-in-out',
    };

    // const activeTabPanelStyle = {
    //     ...tabPanelStyle,
    //     opacity: 1,
    // };

    return (
        <>
            <div className="section-title text-center testimonialTitle">
                <h3 className="fontWeight500 mb-40" style={{ position: 'relative', zIndex: "6"}}>{t('testimonials_head')}</h3>
            </div>
            <div className="row testimonialsRspn" style={{ position: 'relative' }}>
                <div className="col-lg-12">
                    <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
                        {Array.from({ length: testimonialsLength }).map((_, index) => (
                            <TabPanel
                                key={index}
                                style={{
                                    ...tabPanelStyle,
                                    opacity: index === activeIndex ? 1 : 0,
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                }}
                            >
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>{t(`testimonials_desc${index + 1}`)}</p>
                                    </div>
                                    <div className="author-info" style={{ position: 'relative', zIndex: "6"}}>
                                        <h6><span>{t(`testimonials_client${index + 1}`)}</span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
