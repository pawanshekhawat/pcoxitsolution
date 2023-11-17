import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
class Testimonial extends Component {
    render() {
        return (
            <React.Fragment>
                 <div className="section-title text-center" style={{ marginTop: "60px" }}>
                                <h3 className="fontWeight500">Testimonials</h3>
                            </div>
                <div className="row" style={{ marginTop: "60px" }}>
               
                    <div className="col-lg-12">
                 
                        <Tabs>
                            <TabPanel>
                          
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Alcenat's HR services exceeded our expectations. Their meticulous recruitment process brought in exceptional talent, transforming our team dynamics positively. Highly recommended for their professionalism and commitment to excellence.
                                        </p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Aklima </span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Alcenat played a pivotal role in streamlining our HR processes. Their expertise in employee relations and compliance ensured a smooth and compliant work environment. A trustworthy partner for all HR needs.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Edawrd blinkin </span></h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>We engaged Alcenat for their HR consulting services, and the results were outstanding. Their insights and strategic approach to workforce planning significantly contributed to our business growth. Grateful for their impactful guidance.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Kelvin Thomas </span> </h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>"Alcenat's recruitment team is unparalleled. They understood our unique needs and delivered top-notch candidates promptly. Thanks to them, our company now boasts a talented and diverse workforce.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Hileri Andrew </span> </h6>
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Impressed by Alcenat's dedication to employee development. Their training programs have empowered our staff, fostering a culture of continuous improvement. A valuable asset for any organization.</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>Jelia trump</span></h6>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="rn-testimonial-content text-center">
                                    <div className="inner">
                                        <p>Alcenat's Compensation and Benefits analysis was comprehensive and insightful. They helped us create competitive packages, enhancing our ability to attract and retain top talent. Exceptional service!</p>
                                    </div>
                                    <div className="author-info">
                                        <h6><span>allen Joe</span></h6>
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
                                <Tab>
                                    <div className="testimonial-thumbnai">
                                        <div className="thumb">
                                            <img src="/assets/images/client/testimonial-6.jpg" alt="Testimonial Images" />
                                        </div>
                                    </div>
                                </Tab>
                               
                            </TabList>
                        </Tabs>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Testimonial;