import React from "react";
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();
    const sendEmail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_61lfw6i', 'template_vwi4ghv', form.current,'IvdNXHLWsdCU20i3S')
            .then((result)=>{
                console.log(result.text);
                e.target.reset();
                alert('Email send !');
                
            },(error)=>{
                console.log(error.text);
                console.log("jdtd")
            });
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My clients</h1>
                <p className="clientDesc">
                    I have had the opportunity to work with a diverse grop of companies. Some of the notable companies .I have worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Walmart} alt="Client" className="clientImg"/>
                    <img src={Adobe} alt="Client" className="clientImg"/>
                    <img src={Microsoft} alt="Client" className="clientImg"/>
                    <img src={Facebook} alt="Client" className="clientImg"/>
                </div>
            </div>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                    <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value='Send' className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="Facebook" className="link"/>
                        <img src={TwitterIcon} alt="twitter" className="link"/>
                        <img src={YouTubeIcon} alt="YouTube" className="link"/>
                        <img src={InstagramIcon} alt="Instagram" className="link"/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;