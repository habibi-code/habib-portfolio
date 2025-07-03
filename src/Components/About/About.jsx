import './About.css'
import habib_profile from '/images/habibi-profile.png';
import grid2 from '/images/grid2.png';
import Glob_vid from '/videos/glob.mp4';
import grid4 from '/images/grid4.png';

const About = () => {
  return (
    <section id="about" className="info-section">
        <h1 className="section-title autoDisplay">Hello, There!👋</h1>
        <div className="info-cards">
            <div className="card habib-profile">
                <h1>Hi there! I'm <span className="gradient">Habib</span></h1>
                <p> a passionate full-stack web developer with a love for creating clean, responsive, and user-friendly websites. </p>

                <img src={habib_profile} alt="card-image" />
            </div>


            <div className="card habib-profile">
                <h1>🧠 My Tech <span className="gradient">Stack</span></h1>
                <p> I build full-stack web apps using modern tools. On the frontend, I work with HTML, CSS, JavaScript, and React—styled with Tailwind. 
                </p>
                <img src={grid2} alt="card-image" />
            </div>

            <div className="card">
                <h1>I'm Very flexible with time zone communication & location,</h1>
                <p>For the backend, I use Node.js, Express, and MySQL to create powerful APIs, and I also explore Firebase for simple auth and hosting.</p>
                
                <video autoPlay loop muted playsInline src={Glob_vid} type="video/mp4"></video>

                <button><i className='bx bx-link-external' ></i></button>
            </div>

            <div className="card">
                <h1><span className="gradient">My Passion</span> for Coding</h1>
                <p> 
                    Coding isn’t just a skill for me—it’s my creative outlet. I love turning ideas into real, working web applications that people can actually use. Every challenge I face while coding is a chance to learn, grow, and get better.
                    </p>
                <img src={grid4} alt="card-image" />
            </div>
        </div>
    </section>
  )
}

export default About;
