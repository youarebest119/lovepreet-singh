import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Vr = () => {
    const ref = useRef(null);
    useGSAP(() => {
        gsap.from(".custom_vr span", {
            height: 0,
            ease: "back",
            scrollTrigger: ".custom_vr span",
        })
    }, { scope: ref })
    return (
        <span ref={ref} className="custom_vr">
            <span></span>
        </span>
    )
}

export default Vr
