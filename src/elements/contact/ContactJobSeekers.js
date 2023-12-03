import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Select from 'react-select';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    )
}
function ContactForm({ targetValue }) {
    const [result, showresult] = useState(false);
    const [InterestedArea, setInterestedArea] = useState("");
    const [FormData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        company: "",
        jobtitle: "",
        message: ""
    });

    // handle input change for the user form 
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

        // create a user data
        const postData = {
            interested_area: InterestedArea.value,
            fname: FormData.fname,
            lname: FormData.lname,
            email: FormData.email,
            phone: FormData.phone,
            company: FormData.company,
            jobtitle: FormData.jobtitle,
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
        await fetch(`https://alkaynaat-hr-website-backend.onrender.com/api/${targetValue}/register-${targetValue}`, {
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
        { value: 'appointments', label: 'Appointments' },
        { value: 'businessenquiry', label: 'Business Enquiry' },
        { value: 'contracts', label: 'Contracts' },
        { value: 'clientqueries', label: 'Client Queries' },
        { value: 'welders', label: 'Welders' },
        { value: 'butchers', label: 'Butchers' },
        { value: 'labourers', label: 'Labourers' },
        { value: 'painters', label: 'Painters' },
        { value: 'busdrivers', label: 'Bus Drivers' },
        { value: 'waitress', label: 'Waitress' },
        { value: 'housekeeping', label: 'House Keeping' },
        { value: 'roomattendant', label: 'Room Attendant' },
        { value: 'packers', label: 'Packers' },
        { value: 'securityguard', label: 'Security Guard' },
        { value: 'cook', label: 'Cook' },
        { value: 'carpenter', label: 'Carpenter' },
        { value: 'massagetherapist', label: 'Massage Therapist'},
        { value: 'others', label: 'Others' }


    ]


    return (
        <form action="https://getform.io/f/997545f2-b658-4097-bfe4-07083390621a" method='POST' onSubmit={sendEmail}>

            <div className="rn-form-group">
                <Select
                    defaultValue={InterestedArea}
                    onChange={setInterestedArea}
                    name="interested_area"
                    placeholder="Tell us what you're interested in"
                    options={options}
                />
            </div>
            <br />
            <br />
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
                <input
                    type="text"
                    name="company"
                    value={FormData.company}
                    placeholder="Enter your company"
                    required
                    onChange={handleInputChnage}
                />
            </div>
            <div className="rn-form-group">
                <input
                    type="text"
                    name="jobtitle"
                    value={FormData.jobtitle}
                    placeholder="Enter your title"
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
export default ContactForm;
