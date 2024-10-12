"use client";
import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import Education from "@/components/education/education";
import Experience from "@/components/experience/experience";
import Hr from "@/components/hr/hr";
import Skills from "@/components/skills/skills";
import SocialMedia from "@/components/social-media/social-media";
import "./home.scss";
import useAnimate from "@/utils/useAnimate";

export default function Home() {
    useAnimate();
    return (
        <main className="home">
            <div className="container">
                <div className="home_in">
                    <SocialMedia />
                    <About />
                    <div data-animate>
                        <Hr />
                    </div>
                    <Experience />
                    <div data-animate>
                        <Hr />
                    </div>
                    <Education />
                    <div data-animate>
                        <Hr />
                    </div>
                    <Skills />
                    <div data-animate>
                        <Hr />
                    </div>
                    <Contact />
                </div>
            </div>
        </main>
    );
}
