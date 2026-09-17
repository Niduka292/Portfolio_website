const Header = {
  data: () => ({ menuOpen: false }),
  methods: {
    closeMenu(restoreFocus = false) {
      this.menuOpen = false;
      if (restoreFocus) this.$refs.menuToggle.focus();
    }
  },
  template: `
    <header id="home">
      <div class="header" @keydown.esc="closeMenu(true)">
        <div class="header-name">
          <a href="#home" aria-label="Niduka home">Niduka<span aria-hidden="true">.</span></a>
        </div>
        <button ref="menuToggle" class="nav-toggle" type="button" :aria-expanded="menuOpen" aria-controls="nav-menu" :aria-label="menuOpen ? 'Close navigation menu' : 'Open navigation menu'" @click="menuOpen = !menuOpen">
          <svg v-if="!menuOpen" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
          <svg v-else width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18"/></svg>
        </button>
        <div class="nav-bar" :class="{ 'is-open': menuOpen }">
          <nav id="nav-menu" class="nav-menu" aria-label="Main navigation" @click="closeMenu()">
            <a class="nav-menu-btn" href="#about">About</a>
            <a class="nav-menu-btn" href="#projects">Projects</a>
            <a class="nav-menu-btn" href="#certifications">Certifications</a>
            <a class="nav-menu-btn" href="#contact">Contact</a>
          </nav>
        </div>
      </div>

      <div class="about-me">
        <div class="about-me-elements">
          <h1 class="split-text-name" aria-label="Niduka Jayathunga">
            <span v-for="(word, index) in ['Niduka', 'Jayathunga']" :key="word" :class="index === 0 ? 'about-line-1' : 'about-line-2'" class="split-text-line" aria-hidden="true">
              <span v-for="(letter, position) in word" :key="position" class="split-text-letter" :style="{ '--letter-delay': ((index === 0 ? 0 : 6) + position) * 0.055 + 's' }">{{ letter }}</span>
            </span>
          </h1>
          <p class="role-text">Computer Science Undergraduate</p>
          <div class="buttons-line-1">

            <a class="a-button-projects" href="#projects">
              <span>View My Work</span>
              </a>
            <a class="a-button-contact" href="#contact">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">

                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </a>
            <a href="/CV.pdf" class="a-button-cv" download="Niduka Jayathunga - CV.pdf">
                <span class="cv-button">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
                    <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z"/>
                    <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
                  </svg>
                  <span> Download CV</span>
                </span>
            </a>
          </div>
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
        <div class="profile-pic hero-profile">
          <img src="./assets/profile-pic.jpg" alt="Niduka Jayathunga" fetchpriority="high">
          <span class="work-status"><span class="work-status-dot" aria-hidden="true"></span>Open to work</span>
        </div>
      </div>

    </header>
  `
};

export default Header;
