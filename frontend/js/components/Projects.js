import projectsData from "./projects-data.js";
import techStackData from "./tech-stack-data.js";

const Projects = {
  template: `
    <div class="projects-section">
      <div class="section-title">
        <p>Portfolio Showcase</p>
      </div>
      <div class="section-intro">
        <p>
          A glimpse into the projects I’ve built where ideas meet code to create functional, user-centered web experiences.
        </p>
      </div>

      <div class="projects">
        <div class="projects-title-div">
          <div class="project-title-container">
            <div class="projects-header-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-code-slash" viewBox="0 0 16 16">
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0"/>
              </svg>
            </div>
            <div class="projects-header-2">
              <p>Projects</p>
            </div>
          </div>
        </div>

        <div class="project-cards-container" id="projectsCardContainer"></div>
      </div>

      <br>

      <div class="tech-stack">
        <div class="projects-title-div">
          <div class="project-title-container">
            <div class="projects-header-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-seam" viewBox="0 0 16 16">
                <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2zm3.564 1.426L5.596 5 8 5.961 14.154 3.5zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z"/>
              </svg>
            </div>
            <div class="projects-header-2">
              <p>Tech Stack</p>
            </div>
          </div>
        </div>
        <div class="tech-stack-container" id="techStackContainer"></div>
      </div>
    </div>
  `,

  mounted() {
    // PROJECTS SECTION
    const projectsContainer = document.getElementById("projectsCardContainer");
    let projectsHTML = "";

    for (let i = 0; i < projectsData.length; i += 3) {
      const rowProjects = projectsData.slice(i, i + 3);
      projectsHTML += `<div class="project-cards-row">`;

      rowProjects.forEach(p => {
        projectsHTML += `
          <div class="project-card">
            <div class="project-image">
              <img src="${p.img}" alt="${p.title}">
            </div>
            <div class="project-text">
              <div class="project-title">
                <p>${p.title}</p>
              </div>
              <div class="project-description">
                <p>${p.description}</p>
              </div>
              <a href="${p.link}" class="view-details">
                <span>View Details</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                </svg>
              </a>
            </div>
          </div>
        `;
      });

      projectsHTML += `</div>`;
    }

    projectsContainer.innerHTML = projectsHTML;

    // TECH STACK SECTION
    const techContainer = document.getElementById("techStackContainer");
    let techHTML = "";

    for (let i = 0; i < techStackData.length; i += 4) {
      const rowStack = techStackData.slice(i, i + 4);
      techHTML += `<div class="tech-stack-row">`;

      rowStack.forEach(t => {
        techHTML += `
          <div class="tech-stack-component">
            <div class="tech-stack-image">
              <img src="${t.img}" alt="${t.name}">
            </div>
            <div class="tech-stack-name">
              <p>${t.name}</p>
            </div>
          </div>
        `;
      });

      techHTML += `</div>`;
    }

    techContainer.innerHTML = techHTML;
  }
};

export default Projects;
