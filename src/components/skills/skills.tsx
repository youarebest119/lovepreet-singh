import React from 'react'
import ts from "../../assets/images/ts.png";
import js from "../../assets/images/js.png";
import html5 from "../../assets/images/html5.png";
import css3 from "../../assets/images/css3.png";
import react from "../../assets/images/react-js.png";
import Image from 'next/image';
import Link from 'next/link';

const Skills = () => {
    const skills = [
        {
            icon: html5,
            name: "HTML5",
        },
        {
            icon: css3,
            name: "CSS3",
        },
        {
            icon: js,
            name: "Javascript",
        },
        {
            icon: ts,
            name: "Typescript",
        },
        {
            icon: react,
            name: "React Js",
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
                                <li key={item.name}>
                                    <Link
                                        href=""
                                        target='_blank'
                                        rel="noreferrer"
                                    >
                                        <Image
                                            src={item.icon}
                                            alt={item.name}
                                        />
                                    </Link>
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
