import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Hr = () => {
    const ref = useRef(null);
    useGSAP(() => {
        gsap.fromTo(".custom_hr", {
            width: 0,
            ease: "back",
        }, {
            width: "100%",
            scrollTrigger: ".custom_hr",
        })
    }, {})
    return (
        <hr ref={ref} className="custom_hr" />
    )
}

export default Hr
