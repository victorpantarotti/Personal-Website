import Translator from "@/components/Translator";
import Title from "@/components/Title";
import MainContainer from "@/components/MainContainer";
import ProjectsContainer from "@/components/ProjectsContainer";

import myPhoto from "@/assets/myPhoto.png";

import styles from "./Home.module.css";

function Home() {
    return (
        <main>
            <section className={styles.greeting} style={{ backgroundImage: `url(/Topography-Background.webp)` }}>
                <div className={styles.container}>
                    <h1><Translator path="home.greeting" /></h1>
                    <h3><Translator path="home.greetingCompliment" /></h3>
                </div>
            </section>
            <section className={styles.whoAmI}>
                <Title text={<Translator path="home.whoAmITitle" />} />
                <MainContainer myPhoto={myPhoto} text={<Translator path="home.whoAmIText" />} />
            </section>
            <section className={styles.projects}>
                <Title text={<Translator path="header.projectsLink" />} />
                <ProjectsContainer numItems={3} />
            </section>
            <section className={styles.skills}>
                <Title text={<Translator path="components.SkillsContainer.title" />} />
                
            </section>
        </main>
    );
}

export default Home;