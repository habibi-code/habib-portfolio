import './Skills.css';
import Brain_img from '/images/digital brain.png';
import image1 from '/images/1.png';
import image2 from '/images/2.png';
import image3 from '/images/3.png';
import image4 from '/images/4.png';
import image5 from '/images/5.png';
import image6 from '/images/6.png';
import image7 from '/images/7.png';
import image8 from '/images/8.png';
import image9 from '/images/9.png';

const Skills = () => {
  const sliderImages = [
    image1, image2, image3, image4, image5,
    image6, image7, image8, image9,
  ];

  return (
    <section id="skills" className="skills-section">
      <h1 className="section-title autoDisplay">My skills 💪</h1>

      <div className="skills-box">
        <img className="skills-image" src={Brain_img} alt="skills-brain" />

        <div className="designer autoDisplay">
          <h1 className="gradient">
            DESIGNER <i className="bx bx-laptop"></i>
          </h1>
          <p>
            I have built beautiful website designs thanks to my long-time
            experience with UI/UX and Figma design!
          </p>
        </div>

        <div className="coder autoDisplay">
          <h1 className="gradient">
            CODER <i className="bx bx-code-block"></i>
          </h1>
          <p>
            I'm familiar with full-stack web development using Express.js, Node.js,
            and MySQL on the backend.
          </p>
        </div>

        {/* Technologies Slider */}
        <div
          className="slider"
          style={{
            "--width": "100px",
            "--height": "100px",
            "--quantity": sliderImages.length,
          }}
        >
          <div className="list">
            {sliderImages.map((img, index) => (
              <div
                className="item"
                style={{ "--position": index + 1 }}
                key={index}
              >
                <img src={img} alt={`tech-${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
