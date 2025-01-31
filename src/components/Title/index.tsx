import { ReactElement } from "react";

import styles from "./Title.module.scss";

const Title = ({ children, align }: { children: string | ReactElement, align?: "left" | "right" }) => {
    return <h2 className={`${styles.title} ${styles[align ? align : "left"]}`}>{children}</h2>;
};

export default Title;