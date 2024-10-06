// import { data } from '@/utils/projects-data'

const Projects = () => {
    return (
        <div className="projects">
            <h2>Projects</h2>
            {/* <ul>
                {
                    data.map((item) => {
                        return (
                            <li key={item.name}>
                                <div className="project_box">
                                    <Image src={item.logo} alt={item.name} />
                                    <h3>
                                        {item.name}
                                        <Link
                                            href={item.url}
                                            rel="noreferrer"
                                            target='_blank'
                                            aria-label={`open the official website for ${item.name}`}
                                        >
                                            <RedirectIcon />
                                        </Link>
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul> */}
        </div>
    )
}

export default Projects
