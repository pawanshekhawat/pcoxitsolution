import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const Result = () => {
    return (
        <p className="success-message">Your Message has been successfully sent. I will contact you soon.</p>
    );
};

function MainForm({ props }) {
    const [result, showResult] = useState(false);
    const [FormData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        message: ""
    });
    const { t, i18n } = useTranslation();

    // Check if the current language is Arabic
    const isArabic = i18n.language === 'ar';

    const handleInputChange = (e) => {
        // Check if the event is from PhoneInput (it might not have 'e.target')
        if (typeof e === 'string') {
            // This is the phone input case, where 'e' is the phone number string
            setFormData({ ...FormData, phone: e });
        } else {
            // For regular inputs, handle like normal
            const { name, value } = e.target;
            setFormData((prevData) => ({
                ...prevData,
                [name]: value,
            }));
        }
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ugq0h5p',
                'template_gzsif4t',
                e.target,
                'zBxfkmAk1QRYw3STT'
            )
            .then(
                (result) => {
                    console.log(result.text);
                    showResult(true);

                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        e.target.reset();
        // Reset form data properly
        setFormData({
            fname: "",
            lname: "",
            email: "",
            phone: "",
            message: ""
        });
    };

    return (
        <>
            <form method="POST" onSubmit={sendEmail}>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="fname"
                        value={FormData.fname}
                        placeholder={t("first_name_form")}
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="rn-form-group">
                    <input
                        type="text"
                        name="lname"
                        value={FormData.lname}
                        placeholder={t("last_name_form")}
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <input
                        type="email"
                        name="email"
                        value={FormData.email}
                        placeholder={t("email_form")}
                        required
                        onChange={handleInputChange}
                    />
                </div>

                <div className={`rn-form-group ${isArabic ? 'rtl-flag' : ''}`}>
                    <PhoneInput
                        className={`phoneInput ${isArabic ? 'text-right' : ''}`}
                        country={"in"}
                        type="text"
                        value={FormData.phone}
                        autoFormat={true}
                        inputClass={`w ${isArabic ? 'rtl-input' : ''}`} // Conditional RTL class
                        placeholder={t("num_code_form")}  // Translated placeholder
                        required
                        name="phone"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="rn-form-group">
                    <textarea
                        name="message"
                        className="textAreaPadd"
                        value={FormData.message}
                        placeholder={t("msg_form")}
                        required
                        onChange={handleInputChange}
                    />
                </div>
                <div className="rn-form-group">
                    <button className="rn-button-style--2 btn-solid" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
                        {t("submit")}
                    </button>
                </div>
                <div className="rn-form-group">
                    {result ? <Result /> : null}
                </div>
            </form>
        </>
    );
}

export default MainForm;
