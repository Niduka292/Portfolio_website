const Header = {
  template: `
    <header>
      <div class="header">
        <h3 class="header-name">Niduka</h3>
        <div class="nav-bar">
          <button class="nav-toggle" id="nav-toggle" aria-expanded="false" aria-controls="nav-menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-list">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h14a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
            </svg>
          </button>
          <nav id="nav-menu" class="nav-menu">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
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
            <a class="a-button-linkedin" href="https://linkedin.com/in/niduka-jayathunga"><img src="./assets/linkedin-logo.png"/></a>
            <a class="a-button-github" href="https://github.com/Niduka292"><img src="./assets/github-logo.png"/></a>
            <a class="a-button-insta" href="https://www.instagram.com/niduka_065_"><img src="./assets/insta-logo.png"/></a>
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
        <p>Exploring creativity and innovation through practical web solutions</p>
      </div>
      <br>
    </header>
  `,
  mounted() {
    const toggle = document.getElementById('nav-toggle');
    const menu = document.getElementById('nav-menu');
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('active');
    });
  }
}

export default Header;
