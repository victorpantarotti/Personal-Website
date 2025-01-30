import { ReactElement } from "react";

import { useTranslator } from "@/utils";

import gradientCircle from "@/assets/gradientCircle.png";

import styles from "./MainContainer.module.scss";

interface MainContainerProps {
    myPhoto: string,
    text: ReactElement
}

const MainContainer = ({ myPhoto, text }: MainContainerProps) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.images}>
                <img src={gradientCircle} className={styles.gradientCircle} alt={useTranslator("components.MainContainer.gradientCircleAlt")} />
                <img src={myPhoto} className={styles.myPhoto} alt={useTranslator("components.MainContainer.myPhotoAlt")} />
            </div>
            <div className={styles.text}>
                <p>
                    {text}
                </p>
            </div>
        </div>
    );
};

export default MainContainer;