import Contact from "../contact/contact"
import Home from "../home/home"
import Projects from "../projects/projects"


const dashboard = () => {
    return (
        <>
            <section id="home">
                <Home />
            </section>
            <section className='projects' id="projects">
                <Projects />
            </section>
            <section id="contact">
                <Contact />
            </section>
        </>
    )
}
export default dashboard;