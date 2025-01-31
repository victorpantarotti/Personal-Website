import { useRef } from "react";

import skills from "@/db/skills";

import styles from "./SkillsContainer.module.scss";

const SkillsContainer = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        
        const container = containerRef.current;
        let startX = e.clientX;
        let scrollLeft = container.scrollLeft;

        const handleMouseMove = (e: MouseEvent) => {
            const walk = (startX - e.clientX) * 2;
            container.scrollLeft = scrollLeft + walk;
        };

        const handleMouseUp = () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("mouseup", handleMouseUp);
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div ref={containerRef} className={styles.skills} onMouseDown={handleMouseDown}>
            {skills.map((skill, i) => (
                <div key={i} className={styles.skill} data-tooltip={skill.name}>
                    <img src={skill.logo} alt={skill.name} draggable={false} title={skill.name} />
                </div>
            ))}
        </div>
    );
};

export default SkillsContainer;