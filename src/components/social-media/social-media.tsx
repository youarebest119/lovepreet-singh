import { DocIcon, Github, Instagram, MailIcon, NPMIcon, PhoneIcon } from '@/assets/icons/icons'
import { SOCIAL_MEDIA } from '@/utils/constants'
import Link from 'next/link'
import { useRef } from 'react'
import Hr from '../hr/hr'

const SocialMedia = () => {
    const socialmedia = [
        {
            url: SOCIAL_MEDIA.GITHUB,
            name: "github",
            icon: <Github />,
        },
        // {
        //     url: SOCIAL_MEDIA.INSTAGRAM,
        //     name: "instagram",
        //     icon: <Instagram />,
        // },
        {
            url: `mailto:${SOCIAL_MEDIA.MAIL}`,
            name: "mail",
            icon: <MailIcon />,
        },
        {
            url: `tel:${SOCIAL_MEDIA.PHONE}`,
            name: "phone",
            icon: <PhoneIcon />,
        },
        {
            url: SOCIAL_MEDIA.NPM,
            name: "NPM",
            icon: <NPMIcon />
        }
    ]
    const ref = useRef(null);
    return (
        <section ref={ref} className="social-media">
            <ul data-animate>
                <li>
                    <h3>Lovepreet Singh</h3>
                </li>
                {
                    socialmedia.map((item) => {
                        return (
                            <li key={item.name}>
                                <Link aria-label={item.name} href={item.url} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })
                }
                <li>
                    <Link aria-label="resume" href={SOCIAL_MEDIA.RESUME} target="_blank" rel="noreferrer" download={"lovepreet-resume"}>
                        <DocIcon />
                    </Link>
                </li>
                <li>
                    <Link aria-label="resume-pdf-form" title="PDF Form Resume" href={SOCIAL_MEDIA.RESUME_PDF} target="_blank" rel="noreferrer" download={"lovepreet-resume"}>
                        <DocIcon />
                    </Link>
                </li>
            </ul>
            <Hr />
        </section>
    )
}

export default SocialMedia
