import { useLocation, useNavigate } from "react-router-dom";
import { useTranslator } from "@/utils";

import TextPressure from "@/components/TextPressure";
import SplitText from "@/components/SplitText";

import styles from "./NotFound.module.scss";

function NotFound() {
    const location = useLocation();
    const navigate = useNavigate();

    const title = useTranslator("notFound.title");
    const description = useTranslator("notFound.description");
    const button = useTranslator("notFound.button");
    
    const goBack = () => {
        console.log("click")
        if (location.key === 'default') {
            navigate("/", { replace: true });
        } else {
            navigate(-1);
        }
    }

    return (
        <main className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.title}>
                    <TextPressure
                        text={title}
                        flex={false}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={36}
                    />
                </div>
                <div className={styles.mobileTitle}>
                    <SplitText
                        text={title}
                        className={styles.mobileTitle}
                        delay={150}
                        animationFrom={{ opacity: 0, transform: 'translate3d(0,50px,0)' }}
                        animationTo={{ opacity: 1, transform: 'translate3d(0,0,0)' }}
                        threshold={0.2}
                        rootMargin="-50px"
                    />
                </div>
                <p className={styles.description}>{description}</p>
                <button className={styles.button} onClick={() => goBack()}>{`< ${button}`}</button>
            </div>
        </main>
    );
}

export default NotFound;