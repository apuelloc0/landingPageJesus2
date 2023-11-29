import React, { useEffect, useState } from 'react'
import "./Navbar.css";
import logo from "../images/logoo.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const [show, setShow] = useState(true)

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShow(false)
        }
        else {
            setShow(true)

        }
    }



    return (
        <div className={`Header ${show && 'Header-show'}`}>

            <div className="Header-ul">
                <div className="Header-img">
                    <img className={show && 'img-show'} src={logo} alt="" />
                </div>

                <div className="Header-list">
                    <ul >
                        <li className="btnlist">
                            <span>Home</span>
                        </li>
                        <li className="btnlist">
                            <span>About Us</span>
                        </li>
                        <li className="btnlist">
                            <span>Call Us</span>
                        </li>
                        <li className="btnlist">
                            <span>Contact</span>
                        </li>
                        <li className="btnlist">

                        </li>
                    </ul>
                </div>
            </div>

            <div className={show && 'Header-ul-2-show' || 'Header-ul-2'}>
                <div className="item">
                    <div className="info-text">
                        <h3><FontAwesomeIcon icon={faLocationDot} /> Our Location</h3>
                        <span>California, TX 70240</span>
                    </div>
                </div>
                <div className="item">
                    <div className="info-text">
                        <h3><FontAwesomeIcon icon={faPhone} /> Call Us</h3>
                        <span>+123 456 7890</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header
