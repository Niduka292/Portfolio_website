const Projects = {

    template : `
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
                <div class="project-cards-container">
                    <div class="project-cards-row">
                        <div class="project-card-1">
                            <div class="project-image">
                                <img src="./assets/project-1-pic.png"></img>
                            </div>
                            <div class="project-text">
                                <div class="project-title">
                                    <p>Airplane Ticket Booking System</p>
                                </div>
                                <div class="project-description">
                                    <p>
                                        Desktop-based Airplane Ticket Booking Management System developed using JavaFX, Java and PostgreSQL.
                                    </p>
                                </div>
                                <a class="view-details">View Details &#8594;</a>
                            </div>
                        </div>
                        <div class="project-card-2">
                            <div class="project-image">
                                <img src="./assets/project-2-pic.png"></img>
                            </div>
                            <div class="project-text">
                                <div class="project-title">
                                    <p>Online Food Ordering System</p>
                                </div>
                                <div class="project-description">
                                    <p>
                                        A simplified Online Food Ordering System designed using Java as an assignment.
                                    </p><br>
                                </div>
                                <a class="view-details">View Details &#8594;</a>
                            </div>
                        </div>
                        <div class="project-card-3">
                            <div class="project-image">
                                <img src="./assets/project-3-pic.png"></img>
                            </div>
                            <div class="project-text">
                                <div class="project-title">
                                    <p>Wine Analysis </p>
                                </div>
                                <div class="project-description">
                                    <p>
                                        Data analysing and visualization project built using Python,NLP and Dash
                                    </p><br>
                                </div>
                                <a class="view-details">View Details &#8594;</a>
                            </div>  
                        </div>                      
                    </div>
                    <div class="project-cards-row">
                        <div class="project-card-1">
                            <div class="project-image">
                                <img src="./assets/project-4-pic.png"></img>
                            </div>
                            <div class="project-text">
                                <div class="project-title">
                                    <p>Email Application</p>
                                </div>
                                <div class="project-description">
                                    <p>A simple web application with functionality to do basic operations as an email application
                                    </p><br>
                                </div>
                                <a class="view-details">View Details &#8594;</a>
                            </div>
                        </div>    
                        <div class="project-card-2">
                            <div class="project-image">
                                <img src="./assets/project-5-pic.png"></img>
                            </div>
                            <div class="project-text">
                                <div class="project-title">
                                    <p>To Do List</p>
                                </div>
                                <div class="project-description">
                                    <p>
                                        Simple to-do list application built using Javascript and css as a learning project. 
                                    </p><br>
                                </div>
                                <a class="view-details">View Details &#8594;</a>
                            </div>                 
                    </div>

                </div>
            </div><br>
            <div class=tech-stack>
                <div class="projects-title-div">
                    <div class="project-title-container">
                        <div class="projects-header-1">
                            <p>&#128230;</p>
                        </div>
                        <div class="projects-header-2">
                            <p>Tech Stack</p>
                        </div>
                    </div>
                </div>
                <div class="tech-stack-container">
                    <div class="tech-stack-row">
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/java.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>Java</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/python.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>Python</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/javascript.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>Javascript</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/css.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>CSS</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/c.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>C</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/nodejs.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>Node JS</p>
                            </div>
                        </div>
                    </div>
                    <div class="tech-stack-row">
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/react.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>React JS</p>
                            </div>
                        </div>
                        <div class="tech-stack-component">
                            <div class="tech-stack-image">
                                <img src="./assets/html.png"></img>
                            </div>
                            <div class="tech-stack-name">
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default Projects