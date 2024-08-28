import Image from 'next/image'
import React from 'react'
import profilePicture from "../../assets/images/profile.png";

const About = () => {
    return (
        <section className="about">
            <div className="about_banner">
                <Image
                    src={profilePicture}
                    alt="lovepreet singh"
                />
                <div className="about_banner_content">
                    <h1>Hi, I’m Lovepreet 👋</h1>
                    <p>Professional web developer and designer with 2 years of experience and extensive knowledge in web development and design. </p>
                </div>
            </div>
            <span className="vr" />
            <div className="about_content">
                <h2>About</h2>
                <p>
                    I am a professional web developer and designer with <span>2 years of experience</span>, possessing extensive knowledge in web development and design. My skills include creating <span>visually appealing</span> and highly functional websites using the latest technologies and best practices.
                </p>
            </div>
        </section>
    )
}

export default About
