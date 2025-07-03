import './Navbar.css';
import Logo from '/title.png';
import blackhole_back from '/videos/blackhole.mp4';
import { useState } from 'react';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <header>
        <div className="left">
          <img src={Logo} alt="Logo" />
          <h1><span className="gradient">Hab</span>ib</h1>
        </div>

        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#project">Projects</a></li>
          <li><a href="#blogs">Blogs</a></li>
        </ul>

        <div className="box-icons">
          <a href="https://www.instagram.com/habibcode28/" target='-blank'><i className='bx bxl-instagram'></i></a>
          <a href="https://github.com/habibi-code" target='-blank'><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/mohammed-seid-2b906232a/" target='-blank'><i className='bx bxl-linkedin'></i></a>
        </div>

        <div className="menu-icon" onClick={() => setSidebarOpen(true)}>
          <i className='bx bx-menu'></i>
        </div>
      </header>

      {/* Sidebar */}
      <div className={`sidebar ${sidebarOpen ? 'open-sidebar' : 'close-sidebar'}`}>
        <div className="close-icon" onClick={() => setSidebarOpen(false)}>
          <i className="bx bx-x"></i>
        </div>

        <ul>
          <li><a href="#" onClick={() => setSidebarOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setSidebarOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setSidebarOpen(false)}>Skills</a></li>
          <li><a href="#project" onClick={() => setSidebarOpen(false)}>Projects</a></li>
          <li><a href="#blogs" onClick={() => setSidebarOpen(false)}>Blogs</a></li>
        </ul>

        <div className="social-icons">
          <a href="https://t.me/Habib_ya"><i className='bx bxl-telegram'></i></a>
          <a href="https://github.com/habibi-code" target='-blank'><i className='bx bxl-github'></i></a>
          <a href="https://www.linkedin.com/in/mohammed-seid-2b906232a/" target='-blank'><i className='bx bxl-linkedin-square'></i></a>
        </div>
      </div>

      <div className="blackhole-back">
        <video loop muted autoPlay playsInline src={blackhole_back} type="video/mp4"></video>
      </div>
    </>
  );
};

export default Navbar;
