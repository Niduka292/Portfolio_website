const Contact = {

    template:`
        <div class="contact">
            <div class="section-title">
                <p>Contact Me</p>
            </div>
            <div class="section-intro">
                <p>Let's connect and build something awesome!</p>
            </div>
            <div class="contact-section-container">
                <div class="connect-with-me">
                    <div class="connect-with-me-title">
                        <p>&#128279; Connect With Me</p>
                    </div>
                    <div class="connects-container">
                        <div class="connect-linkedin">
                            <a class="linkedin-btn" href="https://linkedin.com/in/niduka-jayathunga" target="_blank"> 

                                <div class="connect-with-me-component">
                                    <img src="./assets/linkedin-animated.png" class="linkedin-icon"/>
                                    <div class="connect-with-me-text">
                                        <p class="connect-component-line-1">
                                            Let's Connect
                                        </p>
                                        <p class="connect-component-line-2">
                                            On Linkedin
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>

                        <div class="connect-insta">
                            <a class="linkedin-btn" href="https://www.instagram.com/niduka_065_" target="_blank"> 

                                <div class="connect-with-me-component">
                                    <img src="./assets/insta-animated.png" class="linkedin-icon"/>
                                    <div class="connect-with-me-text">
                                        <p class="connect-component-line-1">
                                            Instagram
                                        </p>
                                        <p class="connect-component-line-2">
                                            @niduka_065_
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div class="connect-github">
                            <a class="linkedin-btn" href="https://github.com/Niduka292" target="_blank"> 

                                <div class="connect-with-me-component">
                                    <img src="./assets/github-animated.png" class="linkedin-icon"/>
                                    <div class="connect-with-me-text">
                                        <p class="connect-component-line-1">
                                            Github
                                        </p>
                                        <p class="connect-component-line-2">
                                            @Niduka292
                                        </p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="contact-me-section">
                    <div class="contact-me-header">
                        <div class="contact-me-title">
                            <p>Get In Touch</p>
                        </div>
                        <div class="contact-me-intro">
                            <p>Have something to discuss? Send me a message and let's talk.</p>
                        </div>
                    </div>
                    <div class="contact-me-form">
                        <div class="contact-name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi-bi-person" viewBox="0 0 16 16">
                                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 
                                1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664
                                C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332
                                c-.678.678-.83 1.418-.832 1.664z"/>
                            </svg>

                            <input class="input-name" type="text" placeholder="Your Name" />
                        </div>

                        <div class="contact-name">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-at" viewBox="0 0 16 16">
                                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
                            </svg>
                            <input class="input-mail" type="text" placeholder="Your Email"/>
                        </div>

                        <div class="contact-msg">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-right" viewBox="0 0 16 16" aria-hidden="true">
                            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z"/>
                            </svg>
                            <textarea class="input-msg" type="text" placeholder="Your Message"></textarea>
                        </div>
                        <button type="submit" class="send-message">
                            <div class="send-msg-btn">
                                <div class="send-msg-svg-div">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-send" viewBox="0 0 16 16">
                                        <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576zm6.787-8.201L1.591 6.602l4.339 2.76z"/>    
                                    </svg> 
                                </div> 
                                <span>Send Message</span> 
                            </div>                
                    </div>
                </div>
            </div>
        </div>
        
    `
}

export default Contact