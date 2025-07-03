import './Contact.css';

const Contact = () => {
  return (
    <>
          <section className="contact-section">
        <h1 className="section-title autoDisplay">Let's Talk😊</h1>

        <div className="social-box autoBlur">
            <a href="#" className="fadeInRight"><i className="bx bxs-phone-call"></i>+251928092976</a>
            <a href="https://t.me/Habib_ya" className="fadeInRight"><i className="bx bxl-telegram"></i>Contac me in Telegram</a>
            <a href="https://www.linkedin.com/in/mohammed-seid-2b906232a/" className="fadeInRight"><i className="bx bxl-linkedin"></i>Contact me in Linkedin</a>

            <div className="social-icons">
                <a href="https://t.me/Habib_ya" target='-blank'><i className="bx bxl-telegram"></i></a>
                <a href="https://www.linkedin.com/in/mohammed-seid-2b906232a/" target='-blank'><i className="bx bxl-linkedin-square"></i></a>
                <a href="https://x.com/MohammedSe61822" target='-blank'><i className="bx bxl-twitter"></i></a>
             </div>
        </div>

        <div className="contact-box autoBlur">
            <p>Whether you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help.</p>

            <p>Full Name</p>
            <input type="text" placeholder="Your Full Name" />

            <p>Email Address</p>
            <input type="text" placeholder="Your Email" />

            <p>Your Message</p>
            <input type="text" placeholder="Share your thoughts..." />

            <button><i className="bx bx-send"></i> Send Message</button>
        </div>
       </section>
       <footer>
            <h1>© {new Date().getFullYear()} habib. All rights reserved</h1>
        </footer>
       </>
  )
}

export default Contact;
