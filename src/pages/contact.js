import '../App.css';
import React from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

const  serviceID ="service_og4kzix";
const templateID = "template_0pdsqwx";
const publicKey = "_N1YXFhn1X19WTxu0";

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const sendEmail = (e) => {
      e.persist();
      e.preventDefault();
      setIsSubmitting(true);
      emailjs
        .sendForm(
            serviceID,
            templateID,
          e.target,
          publicKey
        )
        .then(
          (result) => {
            setStateMessage('Email sent!');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); 
          },
          (error) => {
            setStateMessage('Something went wrong, please try again later');
            setIsSubmitting(false);
            setTimeout(() => {
              setStateMessage(null);
            }, 5000); 
          }
        );
      e.target.reset();
    };
    return (
        <div className='formContainer'>
        <h3 aria-label='Contact Form'>Send me a message!</h3>
        <p></p>
        <form onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" id='form_name'/>
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" disabled={isSubmitting} />
          {stateMessage && <p>{stateMessage}</p>}
        </form>
        </div>
      );
    };
    export default ContactForm;
