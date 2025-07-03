import { useEffect, useRef } from "react";
import "./Projects.css";
import { projectInfos } from "../../assets/ProjectInfos";

const Projects = () => {
  const videoRefs = useRef([]);
  const hoverRefs = useRef([]);

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      const hoverSign = hoverRefs.current[index];

      if (!video || !hoverSign) return;

      video.addEventListener("mouseover", () => {
        video.play();
        hoverSign.classList.add("active");
      });

      video.addEventListener("mouseout", () => {
        video.pause();
        hoverSign.classList.remove("active");
      });
    });

    return () => {
      videoRefs.current.forEach((video, index) => {
        const hoverSign = hoverRefs.current[index];

        if (!video || !hoverSign) return;

        video.removeEventListener("mouseover", () => {});
        video.removeEventListener("mouseout", () => {});
      });
    };
  }, []);

  return (
    <section id="project" className="my-projects">
      <h1 className="section-title autoDisplay">My Projects 🎯</h1>

      {projectInfos.map((info, index) => (
        <div className="project-card" key={index}>
          <div className="project-vidbox autoBlur">
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={info.Video}
              muted
              loop
            ></video>
            <div
              className="hover-sign"
              ref={(el) => (hoverRefs.current[index] = el)}
            ></div>
          </div>
          <div className="project-info fadeInRight">
            <h1>{info.websiteName}</h1>
            <p>{info.description}</p>
            <button>
              <i className="bx bx-link-external"></i> Website
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
