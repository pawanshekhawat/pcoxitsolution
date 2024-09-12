import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';

import { useTranslation } from 'react-i18next';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function MainForm({ props }) {
    const [result, showresult] = useState(false);
    const [FormData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });

    // function to handle input change request 
    const handleInputChnage = (e) => {
        if (e && e.target) {
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        // create a user post data 
        const postData = {
            fname: FormData.fname,
            lname: FormData.lname,
            email: FormData.email,
            phone: FormData.phone,
            message: FormData.message
        };

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

        // Send a POST request using fetch
        await fetch(`${process.env.PUBLIC_URL}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the success response
                console.log('Success:', data);
            })
            .catch((error) => {
                // Handle errors
                console.error('Error:', error);
            });
        e.target.reset();
        showresult(true);
    };

    setTimeout(() => {
        showresult(false);
    }, 5000);


    const options = [
        { value: 'technical', label: 'Technical' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'construction', label: 'Construction' },
        { value: 'programming', label: 'Programming' }
    ]

    const { t } = useTranslation();


    return (
        <form action="https://getform.io/f/997545f2-b658-4097-bfe4-07083390621a" method='POST' onSubmit={sendEmail}>

            <div className="rn-form-group">
                <input
                    type="text"
                    name="fname"
                    value={FormData.fname}
                    placeholder="Enter your first name"
                    required
                    onChange={handleInputChnage}
                />
            </div>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="lname"
                    value={FormData.lname}
                    placeholder="Enter your lastname"
                    required
                    onChange={handleInputChnage}
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="email"
                    name="email"
                    value={FormData.email}
                    placeholder="Enter your email address"
                    required
                    onChange={handleInputChnage}
                />
            </div>

            <div className="rn-form-group">
                <input
                    type="text"
                    name="phone"
                    value={FormData.phone}
                    placeholder="Phone number with country code"
                    required
                    onChange={handleInputChnage}
                />
            </div>

            <div className="rn-form-group">
                <textarea
                    name="message"
                    value={FormData.message}
                    placeholder="Enter your message"
                    required
                    onChange={handleInputChnage}
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
export default MainForm;
