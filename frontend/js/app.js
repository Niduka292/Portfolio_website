import Academic from "./components/Academic.js?v=portfolio-10"
import Header from "./components/Header.js?v=portfolio-9"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact.js"
import About from "./components/About.js?v=portfolio-5"
import Projects from "./components/Projects.js?v=toolkit-3"
import Volunteer from "./components/Volunteer.js"
import Certifications from "./components/Certifications.js?v=portfolio-4"
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const PortfolioApp = {
    data(){
        return{
            currentSection: 'home'
        }
    },
    components:{
        Header, Footer, About, Contact, Projects, Volunteer, Certifications, Academic
    },
    template:`
        <div>
            <a class="skip-link" href="#about">Skip to content</a>
            <Header/>
            <main>
                <section id="about">
                    <div class="section-title"><h2>About Me</h2></div>
                    <div class="section-intro"><p>Exploring creativity and innovation</p></div>
                    <About/>
                </section>
                <section id="academic"><Academic/></section>
                <section id="projects"><Projects/></section>
                <section id="certifications"><Certifications/></section>
                <section id="contact"><Contact/></section>
            </main>
            <Footer/>
        </div>
    `,
    mounted() {
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        this.revealObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.animate([{opacity: 0, transform: 'translateY(18px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 550, easing: 'ease-out'});
                    this.revealObserver.unobserve(entry.target);
                }
            });
        }, {threshold: 0.08});
        document.querySelectorAll('main > section, .project-card, .tech-stack').forEach(el => this.revealObserver.observe(el));
    },
    beforeUnmount() { this.revealObserver?.disconnect(); },
    methods:{
        scrollToSection(id){
            document.getElementById(id).scrollIntoView({behavior:"smooth"});
        }
    }
}

const app = createApp(PortfolioApp);
app.mount("#app");
