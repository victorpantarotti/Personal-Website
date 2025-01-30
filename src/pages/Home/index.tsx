import Translator from "@/components/Translator";
import Title from "@/components/Title";
import MainContainer from "@/pages/Home/components/MainContainer";
import ProjectsContainer from "@/components/ProjectsContainer";

import myPhoto from "@/assets/myPhoto.png";

import styles from "./Home.module.scss";

function Home() {
    return (
        <main>
            <section className={styles.greeting}>
                <div className={styles.container}>
                    <h1><Translator path="home.greeting" /></h1>
                    <h3><Translator path="home.greetingCompliment" /></h3>
                </div>
            </section>
            <section className={styles.whoAmI}>
                <Title><Translator path="home.whoAmITitle" /></Title>
                <MainContainer myPhoto={myPhoto} text={<Translator path="home.whoAmIText" />} />
            </section>
            <section className={styles.projects}>
                <Title><Translator path="header.projectsLink" /></Title>
                <ProjectsContainer numItems={3} />
            </section>
            <section className={styles.skills}>
                <Title><Translator path="components.SkillsContainer.title" /></Title>
                
            </section>
        </main>
    );
}

export default Home;