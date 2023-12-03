import React from 'react'
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

    return (
        <div className='Contact' id="contact">

            <div className="GetInTouch">
                <div className="Licensed-Plumbers">
                    <span>Licensed Plumbers</span>
                    <p>On our plumbing page, we are proud to have highly trained and licensed plumbers. We know how important it is for our clients to have the peace of mind that they are trusting professionals who are experts in the field of plumbing. Our team is made up of specialists who have received extensive training and have obtained the necessary certifications to perform any type of plumbing-related work. In addition, we have current licenses that support us as a reliable company committed to providing quality service. You can rest assured that by choosing us, you will be hiring the best plumbers in the industry.</p>
                </div>
            </div>

            <div className="GetInTouch">
                <span>Attention schedule</span>

                <div className="contact-us">
                    <div className="Schedule-item">
                        <span>Monday-Friday</span>
                    </div>
                    <div className="Schedule-item">
                        <span>24H</span>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="Schedule-item">
                        <span>Saturday</span>
                    </div>
                    <div className="Schedule-item">
                        <span>24H</span>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="Schedule-item">
                        <span>Sunday</span>
                    </div>
                    <div className="Schedule-item">
                        <span>24H</span>
                    </div>
                </div>
                <span>WE WORK EVERY DAY 24 HOURS!!
                </span>
            </div>

            <div className="Contact-flex">

                <form action="https://formsubmit.co/andresfpuello16@gmail.com" method="POST" className="Contact-form">
                    <input type="text" name="Nombre" placeholder='Your Name' />
                    <input type="email" name="Correo" placeholder='Your Phone Number' />
                    <textarea type="text" name="Mensaje" placeholder='Your Message' />
                    <input onClick={() => alert("Your message has been sent!")} type="submit" placeholder='' value="Send Message" />

                    <input type="hidden" name="_next" value='http://localhost:5173/' />
                    <input type="hidden" name="_captcha" value='false' />
                </form>
            </div>


        </div>
    )
}

export default Contact


