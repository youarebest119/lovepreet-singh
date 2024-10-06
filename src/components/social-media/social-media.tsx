import { Github, Instagram, MailIcon, PhoneIcon } from '@/assets/icons/icons'
import { SOCIAL_MEDIA } from '@/utils/constants'
import Link from 'next/link'
import Hr from '../hr/hr'

const SocialMedia = () => {
    const socialmedia = [
        {
            url: SOCIAL_MEDIA.GITHUB,
            name: "github",
            icon: <Github />,
        },
        {
            url: SOCIAL_MEDIA.INSTAGRAM,
            name: "instagram",
            icon: <Instagram />,
        },
        {
            url: SOCIAL_MEDIA.MAIL,
            name: "mail",
            icon: <MailIcon />,
        },
        {
            url: SOCIAL_MEDIA.PHONE,
            name: "phone",
            icon: <PhoneIcon />,
        },
    ]
    return (
        <div className="social-media">
            <ul>
                <li>
                    <h3>Lovepreet</h3>
                </li>
                {
                    socialmedia.map((item) => {
                        return (
                            <li key={item.name}>
                                <Link href={item.url} target="_blank" rel="noreferrer">
                                    {item.icon}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Hr />
        </div>
    )
}

export default SocialMedia
