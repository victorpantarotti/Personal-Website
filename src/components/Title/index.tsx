import { ReactElement } from "react";
import styles from "./Title.module.css";

interface TitleProps {
    text: string | ReactElement,
    align?: "left" | "right"
}

const Title = ({ text, align }: TitleProps) => {
    return <h1 className={`${styles.title} ${styles[align ? align : "left"]}`}>{text}</h1>;
};

export default Title;