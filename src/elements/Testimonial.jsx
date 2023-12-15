import React from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import { useTranslation } from 'react-i18next';


const Testimonial = () => {

    const { t } = useTranslation();


    return (
        <>
            <div className="section-title text-center" style={{ marginTop: "60px" }}>
                <h3 className="fontWeight500">{t('testimonials_head')}</h3>
            </div>
            <div className="row" style={{ marginTop: "60px" }}>
                <div className="col-lg-12">
                    <Tabs>
                        
                        <TabPanel>
                            <div className="rn-testimonial-content text-center">
                                <div className="inner">
                                    <p>{t('testimonials_desc1')}</p>
                                </div>
                                <div className="author-info">
                                    <h6><span>{t('testimonials_client1')}</span></h6>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="rn-testimonial-content text-center">
                                <div className="inner">
                                    <p>{t('testimonials_desc2')}</p>
                                </div>
                                <div className="author-info">
                                    <h6><span>{t('testimonials_client2')} </span> </h6>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="rn-testimonial-content text-center">
                                <div className="inner">
                                    <p>{t('testimonials_desc3')}</p>
                                </div>
                                <div className="author-info">
                                    <h6><span>{t('testimonials_client3')}  </span> </h6>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="rn-testimonial-content text-center">
                                <div className="inner">
                                    <p>{t('testimonials_desc4')}</p>
                                </div>
                                <div className="author-info">
                                    <h6><span>{t('testimonials_client4')} </span></h6>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="rn-testimonial-content text-center">
                                <div className="inner">
                                    <p>{t('testimonials_desc5')}</p>
                                </div>
                                <div className="author-info">
                                    <h6><span>{t('testimonials_client5')}</span></h6>
                                </div>
                            </div>
                        </TabPanel>
                      
                        <TabList className="testimonial-thumb-wrapper">
                            <Tab>
                                <div className="testimonial-thumbnai">
                                    <div className="thumb">
                                        <img src="/assets/images/client/testimonial-1.jpg" alt="Testimonial Images" />
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="testimonial-thumbnai">
                                    <div className="thumb">
                                        <img src="/assets/images/client/testimonial-2.jpg" alt="Testimonial Images" />
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="testimonial-thumbnai">
                                    <div className="thumb">
                                        <img src="/assets/images/client/testimonial-3.jpg" alt="Testimonial Images" />
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="testimonial-thumbnai">
                                    <div className="thumb">
                                        <img src="/assets/images/client/testimonial-4.jpg" alt="Testimonial Images" />
                                    </div>
                                </div>
                            </Tab>
                            <Tab>
                                <div className="testimonial-thumbnai">
                                    <div className="thumb">
                                        <img src="/assets/images/client/testimonial-5.jpg" alt="Testimonial Images" />
                                    </div>
                                </div>
                            </Tab>
                         
                        </TabList>
                    </Tabs>
                </div>
            </div>
        </>
    );
};

export default Testimonial;
