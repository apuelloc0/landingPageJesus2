import React from 'react'
import "./Help.css";
import tuberia2 from '../images/tuberia2.jpg'
import tuberia from '../images/tuberia.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Map from './Map';

const Help = () => {
    return (
        <div className="Help">
            <div className="Need-Help">
                <h2>Do you need Help?</h2>
            </div>

            <div className="Help-container">
                <div className="Location">
                    <Map />
                </div>

                <div className="Contact-Numbers">
                    <div className="Contact-title">
                        <p>Get In Touch</p>
                    </div>

                    <div className="Numbers-List">

                        <div className="numbers">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Los Angeles, CA</span>
                            <span>+123 456 7890</span>
                            {/* <span>70240</span> */}
                        </div>
                        <div className="numbers">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Houston, TX</span>
                            <span>+123 456 7890</span>
                            {/* <span>70240</span> */}
                        </div>
                        <div className="numbers">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Chicago, IL</span>
                            <span>+123 456 7890</span>
                            {/* <span>70240</span> */}
                        </div>
                        <div className="numbers">
                            <FontAwesomeIcon icon={faPhone} />
                            <span>Dallas, TX</span>
                            <span>+123 456 7890</span>
                            {/* <span>70240</span> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Help