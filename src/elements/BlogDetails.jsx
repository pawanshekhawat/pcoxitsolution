import React, { useContext, useState, useEffect } from "react";
import PageHelmet from "../component/common/Helmet";
import ModalVideo from 'react-modal-video';
import { FiClock, FiUser, FiMessageCircle, FiHeart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from "react-icons/fi";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import { ThemeContext } from '../ThemeContext';
import Toggle from "../component/Toggle/Toggle";

const BlogDetails = () => {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Dynamically append the new script for dotlottie-player
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs';
    script.type = 'module';
    document.head.appendChild(script);

    // Cleanup when component unmounts
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className={isDark ? "active-dark" : "active-light"} >
        {/* <div style={{ width: '100vw', height: "100vh", display: "grid", placeItems: "center" }}>
            <img src={LoaderGif} />
          </div> */}
        <div style={{ width: '100vw', height: '100vh', display: 'grid', placeItems: 'center' }}>
          <dotlottie-player
            src="https://lottie.host/0544481e-fc88-4533-8112-736c6a8be8f8/zpUnJPdBr3.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    );
  }
  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle='Blog Details' />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div className="rn-page-title-area pt--40 pb--190 bg_image" data-black-overlay="7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title section-title">BYOD Security Policy Best Practices: <br /> Safeguarding Employee Device</h2>
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
      <div className="rn-blog-details pt--110 pb--70 bg_color--1 seprateBgSection">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner-wrapper">
                <div className="section-title">
                  <div className="thumbnail">
                    <img src="/assets/images/blog/bl-big-01.jpg" alt="Blog Images" />
                  </div>
                  <p className="mt--40">In today's fast-paced digital landscape, the Bring Your Own Device (BYOD) trend has become increasingly prevalent in workplaces worldwide. While BYOD offers flexibility and convenience, it also presents significant security challenges for businesses. Establishing a robust BYOD security policy is paramount to safeguard sensitive data, protect against cyber threats, and maintain the integrity of your organization. In this blog post, we'll delve into the best practices that businesses should adopt when formulating their BYOD security policies. </p>


                  <h2 className="mt--25 mt_sm--5">1. Educate Employees:</h2>
                  <p className="mt--25 mt_sm--5">Begin by educating employees about the potential risks associated with using personal devices for work purposes. Conduct regular training sessions to raise awareness about phishing attacks, secure Wi-Fi usage, and the importance of strong, unique passwords.</p>

                  <h2 className="mt--25 mt_sm--5">2. Implement Strong Authentication:</h2>
                  <p className="mt--25 mt_sm--5">Enforce multi-factor authentication (MFA) to add an extra layer of security. Require employees to authenticate their identity through multiple methods, such as passwords, biometrics, or security tokens, before accessing sensitive company data.</p>

                  <h2 className="mt--25 mt_sm--5">3. Mobile Device Management (MDM) Solutions:</h2>
                  <p className="mt--25 mt_sm--5">Invest in reliable Mobile Device Management solutions that allow IT administrators to monitor, manage, and secure mobile devices remotely. MDM tools enable businesses to enforce security policies, track devices, and remotely wipe data in case of loss or theft.</p>

                  <h2 className="mt--25 mt_sm--5">4. Regular Software Updates:</h2>
                  <p className="mt--25 mt_sm--5">Encourage employees to keep their devices' operating systems and applications up-to-date. Regular software updates often contain security patches that protect against known vulnerabilities, reducing the risk of exploitation by malicious entities. </p>

                  <h2 className="mt--25 mt_sm--5">5. Data Encryption:</h2>
                  <p className="mt--25 mt_sm--5">Enforce encryption on both devices and data transmissions. Utilize Virtual Private Networks (VPNs) to secure internet connections, ensuring that data transferred between the device and company servers remains encrypted and protected from interception. </p>


                  <h2 className="mt--25 mt_sm--5">6. Secure Wi-Fi Usage:</h2>
                  <p className="mt--25 mt_sm--5">Advise employees to avoid public Wi-Fi networks for work-related tasks whenever possible. If necessary, require the use of Virtual Private Networks (VPNs) to establish secure connections when accessing company resources over public Wi-Fi. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* End BLog Comment Form  */}

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}

      <Footer />

      <div className="toggle-button">

        <Toggle isChecked={isDark} handleChange={toggleTheme} />

      </div>

    </div>
  );

}
export default BlogDetails;
