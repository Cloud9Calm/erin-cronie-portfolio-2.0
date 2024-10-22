import './ContactForm.scss';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import ReCAPTCHA from 'react-google-recaptcha';
import erinCronie from '../../assets/images/erin-cronie.jpg';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [recaptchaResponse, setRecaptchaResponse] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaResponse(value);
  };

  const isLocalhost = window.location.hostname === 'localhost';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!recaptchaResponse) {
      alert('Please complete the reCAPTCHA');
      return;
    }
  
    const formElement = e.target;
    const formDataWithRecaptcha = new FormData(formElement);
    formDataWithRecaptcha.append('g-recaptcha-response', recaptchaResponse);
  
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formElement,
        process.env.REACT_APP_EMAILJS_USER_ID,
        {
          name: formData.name,
          email: formData.email
        } 
      );
      console.log('Email sent successfully:', result.text);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message');
    }
  };

  return (
    <section className='contact' id="contact">

      <div className='contact__main-container'>
        <div className='contact__connect-div'>
            <h2 className='contact__connect title'>Let's Connect!</h2>
            <img src={erinCronie} className='contact__img' alt="Image of Erin Cronie" />
            <p className='contact__thank-you'>Thank you for visiting my portfolio! I'm always open to new opportunities, collaborations, and feedback. Interested in working together? Let's chat! Social media is linked below:</p>
        </div>

        <div className='contact__form-div'>
          <h3 className='contact__title title'>Contact Me</h3>
          <form onSubmit={handleSubmit} className='contact__form'>
            <input
            className='contact__name'
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
            className='contact__email'
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
            className='contact__message'
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <ReCAPTCHA
              sitekey={isLocalhost ? process.env.REACT_APP_RECAPTCHA_SITE_KEY_LOCALHOST : process.env.REACT_APP_RECAPTCHA_SITE_KEY_PROD}
              onChange={handleRecaptchaChange}
            />
            <button type="submit" className='contact__button'>Send Message</button>
          </form>
          </div>
        </div>
    </section>
  );
};

export default ContactForm;