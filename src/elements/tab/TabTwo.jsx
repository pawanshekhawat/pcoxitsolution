import React, { Component, useState, useContext } from "react";

import { useTranslation } from "react-i18next";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// class TabsTwo extends Component {
//     render() {
//         let
//             tab1 = "Mission",
//             tab2 = "Vision",
//             tab3 = "Value";

//         const { tabStyle } = this.props
//         return (
//             <div>
//                 {/* Start Tabs Area */}
//                 <div className="tabs-area">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-12">
//                                 <Tabs>
//                                     <TabList className={`${tabStyle}`}>
//                                         <Tab>{tab1}</Tab>
//                                         <Tab>{tab2}</Tab>
//                                         <Tab>{tab3}</Tab>

//                                     </TabList>

//                                     <TabPanel>
//                                         <div className="single-tab-content">
//                                             <p>To empower every individual to lead a life of their choice by providing them with the necessary skills and a job that enhances their growth.</p>
//                                         </div>
//                                     </TabPanel>

//                                     <TabPanel>
//                                         <div className="single-tab-content">
//                                             <p>Our mission is to provide exceptional recruitment services, ensuring a seamless and efficient process for both employers and job seekers. We aim to match the right talent with the right job, helping businesses thrive and individuals achieve their career goals.</p>
//                                         </div>
//                                     </TabPanel>



//                                     <TabPanel>
//                                         <div className="single-tab-content">
//                                             <p>We are committed to maintaining the highest standards of professionalism, integrity, and ethical conduct in all our interactions. Our goal is to build long-term relationships with our clients and candidates, based on trust, transparency, and mutual success.  <br />  <br />

//                                                 Through our expertise and extensive network, we aim to contribute to the growth and development of global businesses by providing them with the best talent from around the world. We also strive to empower individuals by connecting them with opportunities that will enhance their skills, knowledge, and overall career prospects.<br />  <br />

//                                                 In summary, our vision is to be a global leader in HR recruitment, while our mission is to provide exceptional services, connect talent with opportunities, and contribute to the success of businesses and individuals alike.</p>
//                                         </div>
//                                     </TabPanel>



//                                 </Tabs>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* End Tabs Area */}
//             </div>
//         )
//     }
// }
// export default TabsTwo;

const TabsTwo = (props) => {
    let tab1 = "Mission";
    let tab2 = "Vision";
    let tab3 = "Value";

    const { tabStyle } = props;
    const { t } = useTranslation();

    return (
        <div>
            {/* Start Tabs Area */}
            <div className="tabs-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Tabs>
                                <TabList className={`${tabStyle}`}>
                                    <Tab>{t('mission')}</Tab>
                                    <Tab>{t('vision')}</Tab>
                                    <Tab>{t('value')}</Tab>
                                </TabList>

                                <TabPanel>
                                    <div className="single-tab-content">
                                        <p>{t('mission_desc_1')}</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="single-tab-content">
                                        <p>{t('vision_desc_1')}</p>
                                    </div>
                                </TabPanel>

                                <TabPanel>
                                    <div className="single-tab-content">
                                        <p>{t('value_desc_1')} <br /> <br />

                                            {t('value_desc_2')}.<br /> <br />

                                            {t('value_desc_3')}</p>
                                    </div>
                                </TabPanel>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Tabs Area */}
        </div>
    );
};

export default TabsTwo;
