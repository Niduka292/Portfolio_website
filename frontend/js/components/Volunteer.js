const Volunteer = {
  data: () => ({ expanded: [false, false, false] }),
  template: `
    <div class="volunteer-section">
      <div class="section-title">
        <h2>Leadership & Volunteering</h2>
      </div>
      <div class="section-intro">
        <p>Leadership & Community</p>
      </div>



      <div class="volunteer-container">

        <!-- JpuraXtreme 3.0 -->
        <div class="volunteer-card">
          <div class="card-header">
            <div class="card-header-main">

              <div class="role-title-group">
                <h4 class="volunteer-role">Member - Web Development committee - J'puraXtreme 3.0</h4>
                <p class="volunteer-location">Organized by the IEEE CS Student Branch Chapter - University of Sri Jayewardenepura</p>
                <p class="volunteer-org"><time datetime="2026-05">May 2026</time> - Present</p>
              </div>
            </div>
            <span class="volunteer-tag dev-tag">Web Dev</span>
          </div>
          <button type="button" class="volunteer-details-toggle" :aria-expanded="expanded[0]" aria-controls="volunteer-details-0" @click="expanded[0] = !expanded[0]">
            {{ expanded[0] ? 'Hide details' : 'Show details' }} <span aria-hidden="true">{{ expanded[0] ? '−' : '+' }}</span>
          </button>
          <div id="volunteer-details-0" class="volunteer-details" :class="{ 'is-expanded': expanded[0] }">
          <ul class="volunteer-highlights">
            <li>Collaborated on designing and developing web assets and platform features for JpuraXtreme 3.0, an inter-university competitive programming hackathon.</li>
            <li>Assisted in optimizing site performance and ensuring responsive UI components for participant registration and event information.</li>
          </ul>
          <ul class="academic-tags volunteer-skills" aria-label="Skills"><li class="academic-tag">Next.js</li><li class="academic-tag">Web Project Management</li></ul>
          </div>
        </div>

        <!-- Beauty of Cloud 2.0 -->
        <div class="volunteer-card">
          <div class="card-header">
            <div class="card-header-main">

              <div class="role-title-group">
                <h4 class="volunteer-role">Member - Programming and Web development committee - Beauty of Cloud 2.0</h4>
                <p class="volunteer-location">Organized by the IEEE CS Student Branch Chapter - University of Sri Jayewardenepura</p>
                <p class="volunteer-org"><time datetime="2026-04">Apr 2026</time> - Present</p><p class="volunteer-location">Nugegoda, Western Province, Sri Lanka</p>
              </div>
            </div>
            <span class="volunteer-tag dev-tag">Web Dev</span>
          </div>
          <button type="button" class="volunteer-details-toggle" :aria-expanded="expanded[1]" aria-controls="volunteer-details-1" @click="expanded[1] = !expanded[1]">
            {{ expanded[1] ? 'Hide details' : 'Show details' }} <span aria-hidden="true">{{ expanded[1] ? '−' : '+' }}</span>
          </button>
          <div id="volunteer-details-1" class="volunteer-details" :class="{ 'is-expanded': expanded[1] }">
          <ul class="volunteer-highlights">
            <li>Contributed to problem drafting, platform testing, and technical logistics for Beauty of Cloud 2.0, a cloud-based ideathon.</li>
            <li>Supported participant technical queries and evaluation workflows during the event lifecycle.</li>
          </ul>
          <ul class="academic-tags volunteer-skills" aria-label="Skills"><li class="academic-tag">Next.js</li><li class="academic-tag">Web Project Management</li></ul>
          </div>
        </div>

      <article class="volunteer-card representative-card">
        <div class="card-header">
          <div class="role-title-group">
            <h3 class="volunteer-role">Subject Combination Representative</h3>
            <p class="volunteer-org"><time datetime="2025-03">March 2025</time> - <time datetime="2026-09">September 2026</time></p>
            <p class="volunteer-location">University of Sri Jayewardenepura</p>
          </div>
          <span class="volunteer-tag">Leadership</span>
        </div>
        <button type="button" class="volunteer-details-toggle" :aria-expanded="expanded[2]" aria-controls="volunteer-details-2" @click="expanded[2] = !expanded[2]">
            {{ expanded[2] ? 'Hide details' : 'Show details' }} <span aria-hidden="true">{{ expanded[2] ? '−' : '+' }}</span>
          </button>
          <div id="volunteer-details-2" class="volunteer-details" :class="{ 'is-expanded': expanded[2] }">
          <ul class="volunteer-highlights">
          <li>Represented a subject combination of 30+ students.</li>
          <li>Communicated student concerns to lecturers and coordinated academic updates for the group.</li>
        </ul>
        <ul class="academic-tags volunteer-skills" aria-label="Skills">
          <li class="academic-tag">Student Representation</li>
          <li class="academic-tag">Communication</li>
          <li class="academic-tag">Academic Coordination</li>
        </ul>
          </div>
      </article>
      </div>
    </div>
  `
};

export default Volunteer;
