import React from 'react';
import './Contact.css';
import PhoneIcon from '@material-ui/icons/Phone';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Instagram from '@material-ui/icons/Instagram';
import EmailIcon from '@material-ui/icons/Email';
 
function Contact() {
    return (
        <>
            {/*HeroSeaction*/}
            <div className='heroseaction'>
                <span id="cont">Contact Us </span>  
                
            </div>

            <div className="contactdetail">
                <div className="cd">
                    <PhoneIcon id="phoneicon"/>
                    <span className='context'>Phone</span>
                    9882641949
                </div>
                <div className="cd">
                    <LocationOnIcon id="locationicon"/>
                    <span className='context'>Location</span>
                    Chandigarh University, Mohali
                </div>
                <div className="cd">
                    <Instagram id="instaicon"/>
                    <span className='context'>Instagram</span>
                    Kpg
                </div>
                <div className="cd">
                    <EmailIcon id="emailicon"/>
                    <span className='context'>Email</span>
                    ceo.gurjot@gmail.com
                </div>
            </div>

            
            <iframe id='maps' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7236.865895387318!2d76.58002420813956!3d30.769880247884622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sin!4v1643193164330!5m2!1sen!2sin" allowfullscreen="" title="gg" loading="lazy"/>

            <div className="contact-section">
                <div className="contact-form">
                <span className="cu">Contact Us
                </span>
                <form className="contact" action="index.html" method="post">
                   <div id="display">
                    <input type="text" name="name" className="textbox" placeholder="Your Name" required/>
                   <input type="email" name="email" className="textbox" placeholder="Your Email" required/>
                   </div>
                   <textarea name="message" rows="5" placeholder="Your Feedback" required/>
                   <input type="submit" name="submit" className="send-btn" value="Send"/>

                </form>
                </div>
            </div>
        </>
    )
}

export default Contact
