// React Required
import React, { Component, Suspense } from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';

// Create Import File
import './index.scss';

import PageScrollTop from './component/PageScrollTop';

// Home layout
import Demo from './page-demo/Demo';
import MainDemo from './home/MainDemo';
import Startup from './home/Startup';
import Paralax from './home/Paralax';
import HomePortfolio from './home/HomePortfolio';
import DigitalAgency from './home/DigitalAgency';
import CreativeAgency from './home/CreativeAgency';
import PersonalPortfolio from './home/PersonalPortfolio';
import Business from './home/Business';
import StudioAgency from './home/StudioAgency';
import PortfolioLanding from './home/PortfolioLanding';
import CreativeLanding from './home/CreativeLanding';
import HomeParticles from './home/HomeParticles';
import CreativePortfolio from './home/CreativePortfolio';
import DesignerPortfolio from './home/DesignerPortfolio';
import InteriorLanding from './home/Interior';
import CorporateBusiness from './home/CorporateBusiness';
import InteractiveAgency from './home/InteractiveAgency';

// Dark Home Layout 
import DarkMainDemo from './dark/MainDemo';
import DarkPortfolioLanding from './dark/PortfolioLanding';


// Element Layout
import Service from "./elements/Service";
import ServiceDetails from "./elements/ServiceDetails";
import HrConsulting from "./elements/HrConsulting";
import HrThirdParty from "./elements/HrThirdParty";
import SoftDev from "./elements/service/SoftDev";
import WebApp from "./elements/service/WebApp";
import MobApp from "./elements/service/MobApp";
import SoftInt from "./elements/service/SoftInt";
import CloudBased from "./elements/service/CloudBased";
import SoftMaintain from "./elements/service/SoftMaintain";
import SeoService from "./elements/service/SeoService"
import SocialService from "./elements/service/SocialService"
import PPCService from "./elements/service/PPCService"
import ContentService from "./elements/service/ContentService"
// import BusinessConsulting from "./elements/BusinessConsulting"
// import EmployeeTraining from "./elements/EmplyeeTraining"
// import HrCompliance from "./elements/Hrcompliance"




import About from "./elements/About";
import Contact from "./elements/Contact";
import ClientContact from "./elements/clientContact";
import PortfolioDetails from "./elements/PortfolioDetails";
import Blog from "./elements/Blog";
import BlogDetails from "./elements/BlogDetails";
import BlogDetails1 from "./elements/BlogDetails1";
import BlogDetails2 from "./elements/BlogDetails2";
import BlogDetails3 from "./elements/BlogDetails3";
import BlogDetails4 from "./elements/BlogDetails4";
import BlogDetails5 from "./elements/BlogDetails5";
import error404 from "./elements/error404";


// Blocks Layout
import Team from "./blocks/Team";
import Counters from "./blocks/Counters";
import Testimonial from "./blocks/Testimonial";
import Portfolio from "./blocks/Portfolio";
import VideoPopup from "./blocks/VideoPopup";
import Gallery from "./blocks/Gallery";
import Brand from "./blocks/Brand";
import ProgressBar from "./blocks/ProgressBar";
import ContactForm from "./blocks/ContactForm";
import GoogleMap from "./blocks/GoogleMap";
import Columns from "./blocks/Columns";
import PricingTable from "./blocks/PricingTable";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { useEffect, useState } from "react";
import Cursor from './component/Cursor/Cursor'

import Toggle from './component/Toggle/Toggle';
import MainContact from './elements/MainContact';
// import GoogleTagManager from './component/common/GoogleTag';


// functions or methods to change the languages 
import i18next from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

import { ThemeProvider } from './ThemeContext'; 

i18next
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        supportedLngs: ['en', 'ar', 'ge', 'es', 'zh', 'ja', 'es', 'vi', 'th', 'fil', 'id'],
        fallbackLng: 'en',
        debug: false,
        // Options for language detector
        detection: {
            order: ['path', 'cookie', 'htmlTag'],
            caches: ['cookie'],
        },
        react: { useSuspense: false },
        backend: {
            loadPath: '/assets/locales/{{lng}}/translation.json',
        },
    })

const loadingMarkup = (
    <div className="py-4 text-center">
        <h3>Loading..</h3>
    </div>
)




class Root extends Component {
    render() {
        return (

            <ThemeProvider>
            <BrowserRouter basename={'/'}>
                <PageScrollTop>
                    {/* <GoogleTagManager /> */}
                    <Cursor  className="cursor" />
                    <Switch>


                        {/* usable routes */}
                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={DarkPortfolioLanding} />

                        <Route exact path={`${process.env.PUBLIC_URL}/toggle`} component={Toggle} />



                        <Route exact path={`${process.env.PUBLIC_URL}/import-export-logistics-services`} component={ServiceDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/software-development`} component={HrConsulting} />
                        <Route exact path={`${process.env.PUBLIC_URL}/digital-marketing`} component={HrThirdParty} />
                        {/* <Route exact path={`${process.env.PUBLIC_URL}/business-consulting`} component={BusinessConsulting} />

                        <Route exact path={`${process.env.PUBLIC_URL}/employee-training`} component={EmployeeTraining} />

                        <Route exact path={`${process.env.PUBLIC_URL}/hr-compliance`} component={HrCompliance} /> */}





                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails} />


                        <Route exact path={`${process.env.PUBLIC_URL}/jobseekers`} component={Contact} />
                        <Route exact path={`${process.env.PUBLIC_URL}/clientcontact`} component={ClientContact} />
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                        <Route exact path={`${process.env.PUBLIC_URL}/byod-security-policy-best-practices`} component={BlogDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/the-eu-directive-for-gender`} component={BlogDetails1} />
                        <Route exact path={`${process.env.PUBLIC_URL}/posted-workers-directive`} component={BlogDetails2} />
                        <Route exact path={`${process.env.PUBLIC_URL}/navigating-global-trade`} component={BlogDetails3} />
                        <Route exact path={`${process.env.PUBLIC_URL}/why-your-business-needs-custom-software`} component={BlogDetails4} />
                        <Route exact path={`${process.env.PUBLIC_URL}/boost-your-brand`} component={BlogDetails5} />



                        {/* <Route exact path={`${process.env.PUBLIC_URL}/main-demo`} component={MainDemo}/>
                        <Route exact path={`${process.env.PUBLIC_URL}/dark-main-demo`} component={DarkMainDemo}/> */}
                        {/* hello */}
                        <Route exact path={`${process.env.PUBLIC_URL}/startup`} component={Startup} />
                        <Route exact path={`${process.env.PUBLIC_URL}/paralax`} component={Paralax} />

                        <Route exact path={`${process.env.PUBLIC_URL}/digital-agency`} component={DigitalAgency} />
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-agency`} component={CreativeAgency} />
                        <Route exact path={`${process.env.PUBLIC_URL}/personal-portfolio`} component={PersonalPortfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/studio-agency`} component={StudioAgency} />
                        <Route exact path={`${process.env.PUBLIC_URL}/business`} component={Business} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-home`} component={HomePortfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-landing`} />
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-landing`} component={CreativeLanding} />
                        <Route exact path={`${process.env.PUBLIC_URL}/home-particles`} component={HomeParticles} />
                        <Route exact path={`${process.env.PUBLIC_URL}/dark-portfolio-landing`} component={DarkPortfolioLanding} />
                        <Route exact path={`${process.env.PUBLIC_URL}/designer-portfolio`} component={DesignerPortfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/creative-portfolio`} component={CreativePortfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/interior-landing`} component={InteriorLanding} />
                        <Route exact path={`${process.env.PUBLIC_URL}/corporate-business`} component={CorporateBusiness} />
                        <Route exact path={`${process.env.PUBLIC_URL}/interactive-agency`} component={InteractiveAgency} />

                        {/* Element Layot */}
                        <Route exact path={`${process.env.PUBLIC_URL}/service`} component={Service} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/software-development`} component={SoftDev} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/web-app`} component={WebApp} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/mobile-app`} component={MobApp} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/software-integration`} component={SoftInt} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/cloud-based-solutions`} component={CloudBased} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/software-maintenance`} component={SoftMaintain} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/search-engine-optimization`} component={SeoService} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/content-marketing`} component={ContentService} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/social-media-marketing`} component={SocialService} />
                        <Route exact path={`${process.env.PUBLIC_URL}/service/pay-per-click`} component={PPCService} />

                        <Route exact path={`${process.env.PUBLIC_URL}/contact`} component={MainContact} />
                        <Route exact path={`${process.env.PUBLIC_URL}/about`} component={About} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio-details`} component={PortfolioDetails} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog`} component={Blog} />
                        <Route exact path={`${process.env.PUBLIC_URL}/blog-details`} component={BlogDetails} />

                        {/* Blocks Elements  */}
                        <Route exact path={`${process.env.PUBLIC_URL}/team`} component={Team} />
                        <Route exact path={`${process.env.PUBLIC_URL}/counters`} component={Counters} />
                        <Route exact path={`${process.env.PUBLIC_URL}/testimonial`} component={Testimonial} />
                        <Route exact path={`${process.env.PUBLIC_URL}/portfolio`} component={Portfolio} />
                        <Route exact path={`${process.env.PUBLIC_URL}/video-popup`} component={VideoPopup} />
                        <Route exact path={`${process.env.PUBLIC_URL}/gallery`} component={Gallery} />
                        <Route exact path={`${process.env.PUBLIC_URL}/clint-logo`} component={Brand} />
                        <Route exact path={`${process.env.PUBLIC_URL}/progressbar`} component={ProgressBar} />
                        <Route exact path={`${process.env.PUBLIC_URL}/contact-form`} component={ContactForm} />
                        <Route exact path={`${process.env.PUBLIC_URL}/google-map`} component={GoogleMap} />
                        <Route exact path={`${process.env.PUBLIC_URL}/columns`} component={Columns} />
                        <Route exact path={`${process.env.PUBLIC_URL}/pricing-table`} component={PricingTable} />



                        <Route path={`${process.env.PUBLIC_URL}/404`} component={error404} />
                        <Route component={error404} />

                    </Switch>

                </PageScrollTop>
            </BrowserRouter>
            </ThemeProvider>

        )
    }
}

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Suspense fallback={loadingMarkup}>
        <Root />
    </Suspense>

);

serviceWorker.register();