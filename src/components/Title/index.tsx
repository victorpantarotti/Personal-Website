import { ReactElement } from "react";

import styles from "./Title.module.scss";

const Title = ({ children, align }: { children: string | ReactElement, align?: "left" | "right" }) => {
    return <h1 className={`${styles.title} ${styles[align ? align : "left"]}`}>{children}</h1>;
};

export default Title;