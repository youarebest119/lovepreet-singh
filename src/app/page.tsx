import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Projects from "@/components/projects/projects";
import Skills from "@/components/skills/skills";
import { Container } from "react-bootstrap";
import "./home.scss";
import Hr from "@/components/hr/hr";

export default function Home() {
    return (
        <main className="home">
            <Container>
                <div className="home_in">
                    <About />
                    <Hr />
                    <Experience />
                    <Hr />
                    <Education />
                    <Hr />
                    <Skills />
                    <Projects />
                    <Hr />
                    <Contact />
                </div>
            </Container>
        </main>
    );
}
