import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const useAnimate = () => {

    useGSAP(() => {
        const tl = gsap.timeline();

        // social media header
        tl.from("[data-animate]", {
            yPercent: -30,
            opacity: 0,
            filter: "blur(10px)",
            stagger: 0.05,
        })

        gsap.from(".skill_box_progress_done", {
            width: 0,
            delay: 0.3,
            ease: "back",
            duration: 0.5,
            stagger: 0.05,
            scrollTrigger: {
                trigger: ".skill_box_progress_done",
            }
        })

    })
    return null;
}

export default useAnimate
