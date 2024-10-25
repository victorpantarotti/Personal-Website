import { Link } from "react-router-dom";
import Translator from "../Translator";

import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <p>victorpantarotti</p>
            <ul>
                <li>
                    <Link to="/" className={styles.links}>
                        <Translator path="header.homeLink" />
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.links}>
                        <Translator path="header.aboutMeLink" />
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.links}>
                        <Translator path="header.projectsLink" />
                    </Link>
                </li>
                <li>
                    <Link to="/" className={styles.links}>
                        <Translator path="header.postsLink" />
                    </Link>
                </li>
            </ul>
        </header>
    );
};

export default Header;