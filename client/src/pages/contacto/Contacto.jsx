import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contacto.css";

export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('hukniray_2003', 'template_6oafxx7', form.current, 'GlaN3T74vlIK1GEwO')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        alert("Email enviado");
    };

    return (
        <div className="contacto">
              <span className="contactTitle">Contáctanos</span>

        <form className="contactForm" ref={form} onSubmit={sendEmail}>
            <label>Nombre</label>
            <input className="contactInput" type="text" name="user_name" />
            <label>Email</label>
            <input className="contactInput" type="email" name="user_email" />
            <label>Mensaje</label>
            <textarea  className="contactMessage"  name="message" />
            <input  className="contactButton" type="submit" value="Send" />
        </form>
        </div>
    );
}