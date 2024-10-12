import { TOTAL_EXPERIENCE } from '@/utils/constants';
import Image from 'next/image';
import { useRef } from 'react';
import profilePicture from "../../assets/images/me-hd.png";
import Vr from '../vr/vr';

const About = () => {
    const ref = useRef(null);
    return (
        <section ref={ref} className="about">
            <div className="about_banner" data-animate>
                <Image
                    src={profilePicture}
                    alt="lovepreet singh"
                />
                <div className="about_banner_content">
                    <h1>Hi, I’m Lovepreet 👋</h1>
                    <p>Professional web developer and designer with {TOTAL_EXPERIENCE} years of experience and extensive knowledge in web development and design. </p>
                </div>
            </div>
            <div data-animate>
                <Vr />
            </div>
            <div className="about_content">
                <h2 data-animate>About 🙂‍↕️</h2>
                <p data-animate>
                    I am a professional web developer and designer with <b><span className="underline" />2 years of experience</b>, possessing extensive knowledge in web development and design. My skills include creating <b><span className="underline" />visually appealing</b> and highly functional websites using the latest technologies and best practices.
                </p>
            </div>
            <div data-animate>
                <Vr />
            </div>
            <div className="about_content">
                <h2 data-animate>Hobbies 🙂</h2>
                <p data-animate>
                    My hobbies includes walking, playing games, network surfing and listening to music.
                </p>
            </div>
        </section>
    )
}

export default About
