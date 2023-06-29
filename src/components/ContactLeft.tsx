import "./styles.css";

export const ContactLeft = () => {
  return (
    <div className="contact-left">
      <h1 className="sub-title">Contact Me</h1>
      <p>
        <a
          href="mailto:namitg677@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-paper-plane"></i>
        </a>
        namitg677@gmail.com
      </p>
      {/* <p><i className="fas fa-phone-square-alt"></i>0987654321</p> */}
      <div className="social-icons">
        <a
          href="https://facebook.com/namitg677"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://twitter.com/namitg677"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-twitter-square"></i>
        </a>
        <a
          href="https://www.instagram.com/namit.gupta24/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://linkedin.com/in/namitgpta"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <a
        href="https://github.com/namitgpta/Resume-Namit-github/blob/master/Namit%20Resume%20Latest.pdf"
        download
        className="btn btn2"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download Resume
      </a>
    </div>
  );
};
