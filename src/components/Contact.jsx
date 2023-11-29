import React from 'react'
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmerica, faLocationCrosshairs, faPhone } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {

    return (
        <div className='Contact'>

            <div className="GetInTouch">
                <div className="contact-us">
                    <div className="info-text">
                        <h3><FontAwesomeIcon icon={faLocationCrosshairs} /> Our Location</h3>
                        <span>California, TX 70240</span>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="info-text">
                        <h3><FontAwesomeIcon icon={faPhone} /> Call Us</h3>
                        <span>+123 456 7890</span>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="info-text">
                        <h3><FontAwesomeIcon icon={faEarthAmerica} /> Our Location</h3>
                        <span>California, TX 70240</span>
                    </div>
                </div>
            </div>

            <div className="Contact-flex">

                <form action="https://formsubmit.co/andresfpuello16@gmail.com" method="POST" className="Contact-form">
                    <input type="text" name="Nombre" placeholder='Your Name' />
                    <input type="email" name="Correo" placeholder='Your Phone Number' />
                    <textarea type="text" name="Mensaje" placeholder='Your Message' />
                    <input type="submit" placeholder='' value="Send Message" />

                    <input type="hidden" name="_next" value='http://localhost:5173/' />
                    <input type="hidden" name="_captcha" value='false' />
                </form>
            </div>
        </div>
    )
}

export default Contact