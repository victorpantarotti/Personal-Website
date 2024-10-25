import { ReactElement } from "react";
import styles from "./Title.module.css";

interface TitleProps {
    text: string | ReactElement,
    align?: "left" | "right"
}

const Title = ({ text, align = "left" }: TitleProps) => {
    return <h1 className={`${styles.title} ${styles[align]}`}>{text}</h1>;
};

export default Title;