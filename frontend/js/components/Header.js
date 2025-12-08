const Header = {
  template: `
    <header>
      <div class="header">
        <div class="header-name">
          <h3>Niduka</h3>
        </div>
        <div class="nav-bar">
          <nav id="nav-menu" class="nav-menu">
            <a class="nav-menu-btn" href="#about">About</a>
            <a class="nav-menu-btn" href="#projects">Projects</a>
            <a class="nav-menu-btn" href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      <div class="about-me">
        <div class="about-me-elements">
          <p class="about-line-1">Enthusiastic</p>
          <p class="about-line-2">Developer</p>
          <p class="role-text">Computer Science Undergraduate</p>
          <div class="buttons-line-1">
            <a class="a-button-projects" href="#projects">
              <span>View My Work</span>
              </a> &nbsp;
            <a class="a-button-contact" href="#contact">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
            </a>
          </div>
          <br><br><br>
          <div class="buttons-line-2">
            <a class="a-button-linkedin" href="https://linkedin.com/in/niduka-jayathunga">
              <img src="./assets/linkedin-logo.png" alt="LinkedIn"/>
            </a>
            <a class="a-button-github" href="https://github.com/Niduka292">
              <img src="./assets/github-logo.png" alt="GitHub"/>
            </a>
            <a class="a-button-insta" href="https://www.instagram.com/niduka_065_">
              <img src="./assets/insta-logo.png" alt="Instagram"/>
            </a>
          </div>
        </div>
        <div class="demo-vid">
          <video width="320" height="240" autoplay loop muted playsinline>
            <source src="./assets/demo-vid.mp4" type="video/mp4"/>
          </video>
        </div>
      </div>

      <div class="section-title">
        <p>About Me</p>
      </div>
      <div class="section-intro">
        <p>Exploring creativity and innovation</p>
      </div>
      <br>
    </header>
  `
};

export default Header;