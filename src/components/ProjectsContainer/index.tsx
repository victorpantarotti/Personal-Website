import projects from "@/db/projects";

import { useTranslator } from "@/utils";
import logo from "@/assets/Savey-NoBGLogo.png";

import styles from "./ProjectsContainer.module.scss";

const ProjectsContainer = ({ numItems }: { numItems?: number }) => {
    return (
        <div className={styles.projectsContainer}>
            {projects.map((e, i) => {
                if (numItems && i > numItems - 1) return;

                const name = useTranslator(`projects.${e.id}.name`);

                return <div key={i} className={styles.card}>
                    <div className={styles.cover} style={{ backgroundImage: `url(${e.image})` }}>
                        <div>
                            <img src={logo} alt={`${name}`} />
                        </div>
                    </div>
                </div>;
            })}
        </div>
    )
};

export default ProjectsContainer;