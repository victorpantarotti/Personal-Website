import Translator from "@/components/Translator";
import Title from "@/components/Title";
import MainContainer from "@/pages/Home/components/MainContainer";
import ProjectsContainer from "@/components/ProjectsContainer";
import SkillsContainer from "@/components/SkillsContainer";
import ContactContainer from "./components/ContactContainer";

import myPhoto from "@/assets/myPhoto.png";

import styles from "./Home.module.scss";

function Home() {
    return (
        <main>
            <section className={styles.greeting}>
                <div className={styles.container}>
                    <h3><Translator path="home.greeting" /></h3>
                    <h1>Victor Hugo</h1>
                    <h3><Translator path="home.greetingCompliment" /></h3>
                </div>
            </section>
            <section className={styles.whoAmI}>
                <Title><Translator path="home.whoAmITitle" /></Title>
                <MainContainer myPhoto={myPhoto} text={<Translator path="home.whoAmIText" />} />
            </section>
            <section className={styles.projects}>
                <Title><Translator path="general.projects" /></Title>
                <ProjectsContainer />
            </section>
            <section className={styles.skills}>
                <Title><Translator path="general.skills" /></Title>
                <SkillsContainer />
            </section>
            <section className={styles.contact}>
                <Title><Translator path="general.contact" /></Title>
                <ContactContainer />
            </section>
        </main>
    );
}

export default Home;