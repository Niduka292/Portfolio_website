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
            <a class="a-button-projects" href="#projects">View My Work</a> &nbsp;
            <a class="a-button-contact" href="#contact">Get In Touch &#128386;</a>
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