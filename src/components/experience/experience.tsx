import Image from 'next/image'
import React from 'react'
import antiersolutions from "../../assets/images/antier-solutions.png";
import Link from 'next/link';
import { LeftArrow, RedirectIcon, RightArrow } from '@/assets/icons/icons';

const Experience = () => {
    return (
        <section className="experience">
            <h2 data-animate>Experience</h2>
            <div className="experience_list">
                <div data-animate className="experience_slides">
                    {/* <button
                        className="slider_arrow prev_arrow disabled"
                    >
                        <LeftArrow />
                    </button> */}
                    <ul>
                        <li>
                            <div className="experience_box">
                                <h3>
                                    <Image
                                        src={antiersolutions}
                                        alt="antier solutions"
                                    />
                                    <span>
                                        Antier Solutions Pvt. Ltd.
                                    </span>
                                    <Link
                                        href="https://www.antiersolutions.com/"
                                        target="_blank"
                                        aria-label={`open the official website for antier solutions`}
                                        rel="noreferrer"
                                    >
                                        <RedirectIcon />
                                    </Link>
                                </h3>
                                <p>Antier Solutions is a technology and consulting company that specializes in blockchain development, cryptocurrency solutions, and fintech services.</p>
                            </div>
                        </li>
                    </ul>
                    {/* <button
                        className="slider_arrow right_arrow"
                    >
                        <RightArrow />
                    </button> */}
                </div>
                {/* <div className="slider_bullets">
                    <button className="active"></button>
                    <button></button>
                </div> */}
            </div>
        </section>
    )
}

export default Experience
