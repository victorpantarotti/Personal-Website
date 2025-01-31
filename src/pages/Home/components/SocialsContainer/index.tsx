import { FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import styles from "./SocialsContainer.module.scss";

const SocialsContainer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.grid}>
                <a href="https://github.com/victorpantarotti">
                    <FaGithub />
                </a>
                <a href="https://www.instagram.com/victorhugobergano/">
                    <FaInstagram />
                </a>
                <a href="mailto:contato@victorpantarotti.com.br">
                    <MdOutlineEmail />
                </a>
            </div>
        </div>
    );
};

export default SocialsContainer;