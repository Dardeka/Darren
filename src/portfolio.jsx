import AboutMe from "./sections/about";
import Frameworks from "./sections/frameworks";
import Hero from "./sections/hero";
import Navbar from "./sections/navbar";
import Projects from "./sections/projects";

function Portfolio() {
    return (
        <div className="min-h-screen bg-[#F8FAFC] font-lora">
            <Navbar />
            <Hero />
            <AboutMe />
            <Frameworks />
            <Projects />
        </div>
    )
}

export default Portfolio;