import AboutMe from "./sections/about";
import Contact from "./sections/contact";
import Frameworks from "./sections/frameworks";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";

function Portfolio() {
    return (
        <div className="w-screen min-h-screen font-lato text-black">
            <Navbar />
            <Hero />
            <AboutMe />
            <Frameworks />
            <Projects />
            <Contact />
        </div>
    )
}

export default Portfolio;