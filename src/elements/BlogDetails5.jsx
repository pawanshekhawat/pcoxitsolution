import React, { useContext } from "react";
import PageHelmet from "../component/common/Helmet";
import { FiClock, FiUser, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-up";
import HeaderThree from "../component/header/HeaderThree";
import Footer from "../component/footer/Footer";
import Toggle from "../component/Toggle/Toggle";



import { ThemeContext } from '../ThemeContext';


const BlogDetails = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={isDark ? "active-dark" : "active-light"}>
      <PageHelmet pageTitle="Blog Details" />
      <HeaderThree homeLink="/" logo="symbol-dark" color="color-black" />

      {/* Start Breadcrump Area */}
      <div
        className="rn-page-title-area pt--120 pb--190 bg_image bg_image--7"
        data-black-overlay="7"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="blog-single-page-title text-center pt--100">
                <h2 className="title">Boost Your Brand</h2>
                <ul className="blog-meta d-flex justify-content-center align-items-center">
                  <li>
                    <FiClock />
                    September 9, 2024
                  </li>
                  <li>
                    <FiUser />
                    DigitalMarketingGuru
                  </li>
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
                  <h2 className="mt--25 mt_sm--5">
                    Elevate Your Digital Presence
                  </h2>
                  <p className="mt--25">
                    In today's digital age, having a strong online presence is
                    crucial for business success. Whether you're a small
                    business owner or a marketing professional, implementing
                    effective digital marketing tactics can significantly boost
                    your brand's visibility and profitability.
                  </p>

                  <h2 className="mt--25 mt_sm--5">1. Search Engine Optimization (SEO)</h2>
                  <p className="mt--25">
                    SEO is the process of optimizing your website to rank higher
                    on search engines like Google. Effective SEO strategies
                    include keyword research, optimizing meta tags, and
                    publishing high-quality content that appeals to your target
                    audience. This can drive organic traffic and improve your
                    brand's visibility.
                  </p>

                  <h2 className="mt--25 mt_sm--5">
                    2. Social Media Marketing
                  </h2>
                  <p className="mt--25">
                    Social media platforms like Instagram, Twitter, and LinkedIn
                    provide a unique opportunity to engage directly with your
                    audience. Posting relevant content, engaging with your
                    followers, and running targeted ad campaigns can help you
                    grow your brand's influence and reach new customers.
                  </p>

                  <h2 className="mt--25 mt_sm--5">
                    3. Content Marketing
                  </h2>
                  <p className="mt--25">
                    Creating valuable content is one of the best ways to
                    establish your brand as a thought leader. Blogs, infographics,
                    videos, and podcasts are great formats to educate your
                    audience while subtly promoting your products or services.
                  </p>

                  <h2 className="mt--25 mt_sm--5">
                    4. Email Marketing
                  </h2>
                  <p className="mt--25">
                    Email marketing allows you to communicate directly with your
                    audience. Personalized email campaigns, based on user
                    behavior, can help increase engagement, drive conversions,
                    and build brand loyalty.
                  </p>

                  <h2 className="mt--25 mt_sm--5">
                    5. Paid Advertising (PPC)
                  </h2>
                  <p className="mt--25">
                    Pay-per-click (PPC) advertising, such as Google Ads, can
                    give your brand immediate visibility at the top of search
                    results. This tactic is especially effective for highly
                    competitive industries and can provide a quick return on
                    investment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Details */}

      {/* Start Blog Comment Form */}
      <div className="blog-comment-form pb--120 bg_color--1 hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <h3 className="title mb--40 fontWeight500">Leave a Reply</h3>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="rnform-group">
                        <input type="email" placeholder="Email" />
                      </div>
                      <div className="rnform-group">
                        <input type="text" placeholder="Website" />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-12">
                      <div className="rnform-group">
                        <textarea type="text" placeholder="Comment"></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="blog-btn">
                        <Link
                          className="rn-button-style--2 btn-solid"
                          to="/blog-details"
                        >
                          <span>SEND MESSAGE</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Blog Comment Form */}

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
};

export default BlogDetails;
