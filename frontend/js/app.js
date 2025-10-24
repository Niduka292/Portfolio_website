import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact.js"
import About from "./components/About.js"
import Projects from "./components/Projects.js"
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";

const PortfolioApp = {
    data(){
        return{
            currentSection: 'home'
        }
    },
    components:{
        Header, Footer, About, Contact, Projects
    },
    template:`
        <div>
            <Header @navigate="scrollRoSection"/>
            <main>
                <section id="home"><Home/></section>
                <section id="about"><About/></section>
                <section id="projects"><Projects/></section>
                <section id="contact"><Contact/></section>
            </main>
            <Footer/>
        </div>
    `,
    methods:{
        scrollToSection(id){
            document.getElementById(id).scrollIntoView({behavior:"smooth"});
        }
    }
}

const app = createApp(PortfolioApp);
app.mount("#app");