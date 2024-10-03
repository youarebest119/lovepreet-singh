import Image from 'next/image'
import pup from "../../assets/images/pup.png";
import jnv from "../../assets/images/jnv.png";
import React from 'react'
import Vr from '../vr/vr';

const Education = () => {
    return (
        <section className="education">
            <div className="education_in">
                <h2>Education</h2>
                <div className="education_list">
                    <ul>
                        <li>
                            <div className="education_item">
                                <Image
                                    src={jnv}
                                    alt="jawahar navodaya vidyalaya, sri muktsar sahib"
                                />
                                <div className="education_item_detail">
                                    <h3>JNV, Muktsar</h3>
                                    <p>Higher Secondary School</p>
                                </div>
                                <div className="education_item_dates">
                                    <p>January 2021 - April 2022</p>
                                </div>
                            </div>
                            <Vr />
                        </li>
                        <li>
                            <div className="education_item">
                                <Image
                                    src={pup}
                                    alt="punjabi university, patiala"
                                />
                                <div className="education_item_detail">
                                    <h3>Punjabi University, Patiala</h3>
                                    <p>Bachelor’s Degree of Computer Science (BCA)</p>
                                </div>
                                <div className="education_item_dates">
                                    <p>July 2022</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Education
