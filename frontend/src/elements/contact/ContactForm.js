import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function ContactForm({ props }) {
    const [result, showresult] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_p4x3hv8',
                'template_jgfr42f',
                e.target,
                'user_jrfTH2e0Ely35ZCVFdT9S'
            )
            .then((result) => {
                console.log(result.text);
            },
                (error) => {
                    console.log(error.text);
                }
            );
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


    const options = [
        { value: 'technical', label: 'Technical' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'construction', label: 'Construction'},
        { value: 'programming', label: 'Programming' }
    ]


    return (
        <form action="https://getform.io/f/997545f2-b658-4097-bfe4-07083390621a" method='POST' onSubmit={sendEmail}>

            <div className="rn-form-group">
                <Select
               
                    name="select"
                    placeholder="Tell us what you're interested in"
                    options={options} />
            </div>
            <br/>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="fname"
                    placeholder="Enter your first name"
                    required
                />
            </div>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="lname"
                    placeholder="Enter your lastname"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email address"
                    required
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="text"
                    name="phone"
                    placeholder="Phone number with country code"
                    required
                />
            </div>

           

            <div className="rn-form-group">
                <input
                    type="text"
                    name="company"
                    placeholder="Enter your company"
                    required
                />
            </div>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="jobtitle"
                    placeholder="Enter your title"
                    required
                />
            </div>

            <div className="rn-form-group">
                <textarea
                    name="message"
                    placeholder="Enter your message"
                    required
                >
                </textarea>
            </div>

            <div className="rn-form-group">
                <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">Submit Now</button>
            </div>

            <div className="rn-form-group">
                {result ? <Result /> : null}
            </div>
        </form>
    )
}
export default ContactForm;
