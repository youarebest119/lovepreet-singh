import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Hr from "@/components/hr/hr";
import { Container } from "react-bootstrap";
import "./home.scss";
import Skills from "@/components/skills/skills";
import SocialMedia from "@/components/social-media/social-media";

export default function Home() {

    return (
        <main className="home">
            <Container>
                <div className="home_in">
                    <SocialMedia />
                    <About />
                    <Hr />
                    <Experience />
                    <Hr />
                    <Education />
                    <Hr />
                    <Skills />
                    <Hr />
                    <Contact />
                </div>
            </Container>
        </main>
    );
}
