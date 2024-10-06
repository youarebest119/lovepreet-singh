import Image from 'next/image';
import Link from 'next/link';
import Vr from '../vr/vr';

const Skills = () => {
    const skills = [
        {
            title: "Frontend Development",
            children: [
                {
                    name: "HTML5",
                    progress: 8.8,
                },
                {
                    name: "CSS3",
                    progress: 8.8,
                },
                {
                    name: "Javascript",
                    progress: 8,
                },
                {
                    name: "Typescript",
                    progress: 7,
                },
            ]
        },
        {
            title: "Frameworks & Libraries",
            children: [
                {
                    name: "React (JavaScript/TypeScript)",
                    progress: 8.5,
                },
                {
                    name: "Next.js (JavaScript/TypeScript)",
                    progress: 8,
                },
                {
                    name: "Redux Toolkit",
                    progress: 9,
                },
                {
                    name: "React Bootstrap",
                    progress: 9,
                },
                {
                    name: "Three Js",
                    progress: 2.5,
                },
            ]
        },
        {
            title: "UI/UX Design",
            children: [
                {
                    name: "CSS Animations",
                    progress: 8,
                },
                {
                    name: "Framer Motion",
                    progress: 7.5,
                },
                {
                    name: "GSAP animations",
                    progress: 8.3,
                },
            ]
        },
    ]
    return (
        <section className="skills">
            <h2>Skills</h2>
            <div className="skills_list">
                <ul>
                    {
                        skills.map(item => {
                            return (
                                <li key={item.title}>
                                    <h3>{item.title}</h3>
                                    <div>
                                        <Vr />
                                        <ul>
                                            {
                                                item.children.map(item => {
                                                    return (
                                                        <li key={item.name}>
                                                            <div className="skill_box">
                                                                <h4>{item.name} <span>{item.progress * 10}%</span></h4>
                                                                <div className="skill_box_progress">
                                                                    <div className="skill_box_progress_done" style={{ width: `${item.progress * 10}%` }}></div>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default Skills
