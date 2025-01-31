import { FaGithub, FaGlobe, FaTools } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

import projects from "@/db/projects";

import { useTranslator } from "@/utils";

import styles from "./ProjectsContainer.module.scss";

const ProjectsContainer = ({ numItems }: { numItems?: number }) => {
    const publicTitle = useTranslator("general.public");
    const localhostTitle = useTranslator("general.localhost");
    const developmentTitle = useTranslator("general.development");
    const seeRepoTitle = useTranslator("general.seeRepo");

    return (
        <div className={styles.projectsContainer}>
            {projects.map((project, i) => {
                if (numItems && i > numItems - 1) return;

                const name = useTranslator(`projects.${project.id}.name`);

                return <a key={i} href={project.url ? project.url : project.githubRepo} className={styles.card}>
                    <div className={styles.cover} style={{ backgroundImage: `url(${project.image})` }}>
                        <div className={styles.logoDiv}>
                            <img src={project.logo} alt={name} title={name} />
                        </div>
                        <div className={styles.devStatus}>
                            {project.devStatus === "public" && <FaGlobe title={publicTitle} /> }
                            {project.devStatus === "localhost" && <FaComputer title={localhostTitle} /> }
                            {project.devStatus === "development" && <FaTools title={developmentTitle} /> }
                        </div>
                        <a href={project.githubRepo} className={styles.github}>
                            <FaGithub title={seeRepoTitle} />
                        </a>
                    </div>
                </a>;
            })}
        </div>
    )
};

export default ProjectsContainer;