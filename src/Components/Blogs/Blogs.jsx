import './Blogs.css';
import { blogData } from '../../assets/blogData';

const Blogs = () => {
  return (
    <section className="blogs-section" id="blogs">
      <h1 className="section-title autoDisplay">My Blogs ✍️</h1>
      <div className="blogs-container">
        {blogData.map((blog) => (
          <div className="blog-card fadeInRight" key={blog.id}>
            <img src={blog.image} alt={blog.title} className="blog-img" />
            <div className="blog-content">
              <h2>{blog.title}</h2>
              <p className="blog-date">{blog.date}</p>
              <p className="blog-summary">{blog.summary}</p>
              <a href={blog.link} className="read-more">Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
