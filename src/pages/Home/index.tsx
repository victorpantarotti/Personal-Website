import Translator from "@/components/Translator";

import styles from "./Home.module.css";
import Title from "@/components/Title";

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
                <div className={styles.mainContainer}>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                </div>
            </section>
        </main>
    );
}

export default Home;