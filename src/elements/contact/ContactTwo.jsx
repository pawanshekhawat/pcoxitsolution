import React, { Component } from "react";

import ContactForm  from "./ContactForm";

class ContactTwo extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contact-form--1">
                <div className="container">
                    <div className="row row--35 align-items-start">
                        <div className="col-lg-6 order-2 order-lg-1">
                            <div className="section-title text-left mb--50">
                                <h2 className="title section-title"  >Hear from us.</h2>
                                <p className="description"  >Please fill out the following contact form, and one of our dedicated HR professionals will get in touch with you shortly to discuss how we can add value to your business.</p>
                            </div>
                            <div className="form-wrapper">
                                <ContactForm targetValue={this.props.targetValue} />
                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2">
                            <div className="thumbnail mb_md--30 mb_sm--30">
                                <img loading="lazy" src="/assets/images/about/about-6.webp" alt="trydo" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ContactTwo;