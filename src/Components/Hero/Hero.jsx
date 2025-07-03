import './Hero.css'
import Hero_video from '/videos/hero-video.mp4';

const Hero = () => {
  return (
    <section className="hero">
        <div className="hero-info autoBlur">
            <div className="hero-info-title">
                <i className='bx bxl-sketch'></i>
                Full Stack Developer portfolio
            </div>

            <h1>Providing <span className="gradient">the best</span> project <span className="gradient">Experience</span></h1>

            <p>I'm a passionate full-stack developer who believes that every idea can be transformed into something powerful through code. I specialize in creating clean, scalable, and user-centered web applications.</p>

            <button><i className='bx bx-send' ></i>Contact Me</button>
        </div>
        <div className="hero-vid-box">
            <video className="autoBlur" src={Hero_video} muted loop autoPlay playsInline type="video/mp4"></video>
        </div>
        <div className="scroll-down"></div>
    </section>
  )
}

export default Hero;
