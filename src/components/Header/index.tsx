// import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Translator from "../Translator";

// import { CgSun } from "react-icons/cg";
import { MdTranslate } from "react-icons/md";

import styles from "./Header.module.scss";

const Header = () => {
    const { i18n } = useTranslation();

    const handleChangeLanguage = () => i18n.changeLanguage(i18n.language === "pt-BR" ? "en-US" : "pt-BR");

    return (
        <header className={styles.header}>
            <p>victorpantarotti</p>
            {/* <ul>
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
            </ul> */}
            <ul>
                <li>
                    <button onClick={handleChangeLanguage}>
                        <MdTranslate />
                    </button>
                </li>
                {/* <li>
                    <button>
                        <CgSun />
                    </button>
                </li> */}
            </ul>
        </header>
    );
};

export default Header;