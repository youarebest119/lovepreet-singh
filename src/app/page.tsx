"use client";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Hr from "@/components/hr/hr";
import Skills from "@/components/skills/skills";
import SocialMedia from "@/components/social-media/social-media";
import "./home.scss";

export default function Home() {
    return (
        <main className="home">
            <div className="container">
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
            </div>
        </main>
    );
}
