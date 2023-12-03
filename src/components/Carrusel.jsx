import carrusel1 from '../images/carrusel1.jpg'
import carrusel2 from '../images/carrusel2.jpg'
import carrusel3 from '../images/carrusel3.jpg'
import "./Carrusel.css"

function Carrusel() {

  return (
    <div className="Carrusel" id="carrusel">

      <div className="Carrusel-principalText">
        <h2>WHY CHOOSE US?</h2>
        <p>Our plumbing group stands out for its ability to solve problems efficiently and effectively. We have a team of highly trained professionals with extensive experience in the plumbing industry, allowing us to quickly identify and diagnose any problem related to water systems, pipes, drains and more.</p>
      </div>

      <div className="Carrusel-items">
        <img src={carrusel1} alt="" />
        <div className="Carrusel-text">
          <span>Our ability to solve problems</span>
          <p>It is essential to provide quality service to our clients. We have a team of highly trained professionals with extensive experience in the plumbing industry.</p>
        </div>
      </div>
      <div className="Carrusel-items">
        <img src={carrusel2} alt="" />
        <div className="Carrusel-text">
          <span>
            Our ability to quickly identify and diagnose any problem related to water systems, pipes, drains.</span>
          <p>
            Allows us to offer efficient and effective solutions. We use the most advanced tools and techniques to ensure that each task is completed accurately and lastingly.</p>
        </div>
      </div>
      <div className="Carrusel-items">
        <img src={carrusel3} alt="" />
        <div className="Carrusel-text">
          <span>We are characterized by our ability to adapt to any situation.</span>
          <p>
            Whether it's a minor problem in a home or an emergency in a commercial building, we are prepared to face any challenge and find the best possible solution.</p>
        </div>
      </div>
    </div>
  )
}

export default Carrusel