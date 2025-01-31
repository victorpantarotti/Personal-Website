import { FaGithub, FaInstagram } from "react-icons/fa";

import styles from "./SocialsContainer.module.scss";

const SocialsContainer = () => {
    return (
        <div className={styles.container}>
            <div>
                <a href="https://github.com/victorpantarotti">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/victorhugobergano/">
                    <FaInstagram />
                </a>
            </div>
        </div>
    );
};

export default SocialsContainer;