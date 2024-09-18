import React, { Component } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { useState } from "react";

import Toggle from "../component/Toggle/Toggle";

const BlogDetails = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const [isDark, setIsDark] = useState(false);


    return (
        <div className={isDark ? "active-dark" : "active-light"}>
            <PageHelmet pageTitle='Blog Details' />
            <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

            {/* Start Breadcrump Area */}
            <div className="rn-page-title-area pt--120 pb--190 bg_image  " data-black-overlay="7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog-single-page-title text-center pt--100">
                                <h2 className="title">The EU Directive for Gender Pay Gap Transparency:<br/> What Your Business Must Know</h2>
                                <ul className="blog-meta d-flex justify-content-center align-items-center">
                                    <li><FiClock />May 18, 2020</li>
                                    <li><FiUser />NipaBali</li>
                                
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrump Area */}

            {/* Start Blog Details */}
            <div className="rn-blog-details pt--110 pb--70 bg_color--1">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-wrapper">
                                <div className="section-title">
                                
                                    <p className="mt--40">Gender pay transparency is a matter of contention globally, with a handful of countries bringing in legislation to help tackle the issue. While Japan is one of the most recent governments to announce changes, the European Union (EU) has also set an ambitious target for all its member states.

Announced in April 2023, the EU Council has produced new rules to confront gender pay discrimination head-on. As a result, companies will need to implement concrete measures to close the gender pay gap within their organizations to support the EU in driving gender equality. By 2026, this should affect medium and large corporations first.</p>
                                   
                              
                                    <h2 className="mt--25 mt_sm--5">What is the EU Pay Transparency Directive?</h2>
                                    <p className="mt--25 mt_sm--5">The EU’s Pay Transparency Directive enables employees to request information regarding their salary level and the average salary of employees doing the same work. It is broken down based on gender and requires companies to report on pay between men and women.

The Directive will deliver significant changes by 2026, with invasive actions if EU-registered companies allow their gender pay gap to exceed by more than 5%. As a result, organizations have up to three years to prepare for these changes to transpose into their country’s law.</p>

                                    <h2 className="mt--25 mt_sm--5">When will it be implemented into legislation?</h2>
                                    <p className="mt--25 mt_sm--5">Legislation is already in effect and has been since 6th June 2023. However, EU member states have until 7th June 2026 to ensure all changes transpose into national laws. After this date, the first reports must be published by 2027 for companies with 150-250+ employees. From 2030 onwards, the threshold will be lower to include employers with 100 or more workers.</p>

                                    <h2 className="mt--25 mt_sm--5">Who will the EU Pay Directive Law affect?</h2>
                                    <p className="mt--25 mt_sm--5">First, the Directive will only affect businesses with 150-249 employees and those with 250+ employees. By 2027, organizations with 250 or more workers must have produced their first gender pay report and identified actions to minimize the gender gap. They will continue to do so annually after the first report is produced. Likewise, for companies with 150-249 workers, their first report is due in 2027, but they are required to report once every three years thereafter.

Smaller employers (100 employees) will need to report every three years on their gender pay gap from 2030 onwards, with the first reports due in 2031..</p>

                                    <h2 className="mt--25 mt_sm--5">Are the UK and Northern Ireland affected?</h2>
                                    <p className="mt--25 mt_sm--5">Since the UK is no longer part of the EU, there are no direct changes that will affect any UK-based companies. If you have operations both in the EU and outside of the EU, you’ll need to cater your policies to affected countries.

Employers with over 250 employees must public any data relating to pay and bonuses, alongside any correlating information around gender. This consideration was first introduced in 2018.</p>

                                    <h2 className="mt--25 mt_sm--5">Why are changes to pay transparency coming in?</h2>
                                    <p className="mt--25 mt_sm--5">Pay transparency can positively impact business, from employee loyalty to decreased turnover. While companies might experience significant improvements in productivity and reduced expenditure for the rehiring process, its purpose goes beyond the organization and contributes a resolution to a much wider issue. The Directive for Pay Transparency sheds a light on pay inequality across EU member states and the companies that operate within them.

Implementing pay transparency is also beneficial for country-specific objectives. For example, the EU will require businesses to act when their gender pay gap exceeds 5%. Once an organization has intervened and aligned pay or put acceptable steps in place for future alignment, it will contribute to the country’s overall gender pay gap score. </p>


                                    <h2 className="mt--25 mt_sm--5">What should you do if your organization already has gender pay reporting in place?</h2>
                                    <p className="mt--25 mt_sm--5">Many organizations already practice gender pay reporting, making the information available to their employees, authorities and the wider public. While these businesses won’t need to adapt per se, they may need to alter the reporting process to meet nuances laid out by this new legislation. This could include actions, such as communicating with new reporting bodies or measuring different criteria. With the process to measure and record data already in place, this adjustment should be easy for companies to adapt to.</p>
             
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Blog Details */}

            {/* Start Back To Top */}
            <div className="backto-top">
                <ScrollToTop showUnder={160}>
                    <FiChevronUp />
                </ScrollToTop>
            </div>
            {/* End Back To Top */}

            <Footer />

            <div className="toggle-button">

<Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />

</div>

        </div>
    );

}
export default BlogDetails;
