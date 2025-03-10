import About from "../about/about"
import Contact from "../contact/contact"
import Home from "../home/home"
import Nav from "../nav/nav"
import Projects from "../projects/project"
import Techs from "../tech/tech"


const dashboard = () => {
    return (
        <>
            <Nav/>
            <Home />
            <About />
            <Projects />
            <Techs />
            <Contact />
        </>
    )
}
export default dashboard;