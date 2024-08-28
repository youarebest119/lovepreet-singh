import Image from 'next/image'
import React from 'react'

const Education = () => {
    return (
        <section className="education">
            <h2>Education</h2>
            <div className="education_list">
                <ul>
                    <li>
                        <div className="education_item">
                            <Image
                                src=""
                                alt="punjabi university, patiala"
                            />
                            <div className="education_item_detail">
                                <h3>Punjabi University, Patiala</h3>
                                <p>Bachelor’s Degree of Computer Science (BCA)</p>
                            </div>
                            <div className="education_item_dates">
                                <p>January 2021 - April 2024</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Education
