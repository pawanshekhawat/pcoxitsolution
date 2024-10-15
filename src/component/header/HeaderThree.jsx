import React, { useEffect, useMemo, useCallback } from "react";
import { FiX, FiMenu } from "react-icons/fi";
import Scrollspy from 'react-scrollspy';
import MultiLang from "../MultiLang/MultiLang";
import { useTranslation } from "react-i18next";
import ImageWithPriority from "../common/ImageWithPriority";

const HeaderThree = ({ logo, color = 'default-color', homeLink }) => {

    // Memoizing handleScroll function
    const handleScroll = useCallback(() => {
        const headerFixed = document.querySelector('.header--fixed');
        if (window.scrollY > 100) {
            headerFixed.classList.add('sticky');
        } else {
            headerFixed.classList.remove('sticky');
        }
    }, []);

    useEffect(() => {
        console.log("header useEffect1");
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    // Memoizing the click handler for dropdown
    const handleClick = useCallback(function () {
        this.parentElement.querySelector('.submenu').classList.toggle('active');
        this.classList.toggle('open');
    }, []);

    useEffect(() => {
        const elements = document.querySelectorAll('.has-droupdown > a');
        elements.forEach((el) => el.addEventListener('click', handleClick));
        console.log("header useEffect2");

        return () => {
            elements.forEach((el) => el.removeEventListener('click', handleClick));
        };
    }, [handleClick]);

    // Memoizing menu triggers
    const menuTrigger = useCallback(() => {
        document.querySelector('.header-wrapper').classList.toggle('menu-open');
    }, []);

    const closeMenuTrigger = useCallback(() => {
        document.querySelector('.header-wrapper').classList.remove('menu-open');
    }, []);

    // Memoizing static data
    const getMenuUrl = useMemo(() => '/assets/images/logo/white-trans.webp', []);
    const scrollspyItems = useMemo(() => ['home', 'about', 'service', 'blog', 'contact'], []);

    const { t } = useTranslation();

    return (
        <header className={`header-area header-style-two header--fixed ${color} px--120`}>
            <div className="header-wrapper">
                <div className="header-left d-flex align-items-center">
                    <div className="logo">
                        <a href={homeLink} style={{ width: "180px", display: "flex" }}>
                            <ImageWithPriority loading="eager" src={getMenuUrl} alt="Digital Agency" className="homeLogo" />
                        </a>
                    </div>
                    <nav className="mainmenunav d-lg-block ml--50">
                        <Scrollspy className="mainmenu" items={scrollspyItems} currentClassName="is-current" offset={-200}>
                            <li><a href="/">{t('home')}</a></li>
                            <li><a href="/about">{t('about')}</a></li>
                            <li><a href="/service">{t('services')}</a></li>
                            <li><a href="/blog">{t('blog')}</a></li>
                            <li><a href="/contact">{t('contact')}</a></li>
                        </Scrollspy>
                    </nav>
                </div>
                <div className="header-right">
                    <div className="social-share-inner">
                        <ul className="social-share social-style--2 color-white d-flex justify-content-start liststyle align-items-center">
                            <MultiLang />
                        </ul>
                    </div>
                    <div className="humberger-menu d-block d-lg-none pl--20">
                        <span onClick={menuTrigger} className="menutrigger text-white"><FiMenu className="hamBurger" /></span>
                    </div>
                    <div className="close-menu d-block d-lg-none">
                        <span onClick={closeMenuTrigger} className="closeTrigger"><FiX /></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderThree;
