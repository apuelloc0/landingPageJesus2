import React from 'react'
import "./Information.css";
import tuberia2 from '../images/tuberia2.jpg'
import tuberia from '../images/tuberia.jpg'

const Information = () => {
    return (
        <div className="Information">
            <div className="info">
                <span>We are the solution to your plumbing problems!</span>
                <h2>Local Plumbing Company Serving The Community Proudly</h2>
                <p>With more than 30 years of experience, the Plumbing services company has become the largest Plumbing company in the country.If you require Plumbing services or Plumbing solutions? Please Call:</p>
            </div>


            <div className="Information-images">
                <img src={tuberia} />
                <img src={tuberia2} />
            </div>
        </div>

    )
}

export default Information