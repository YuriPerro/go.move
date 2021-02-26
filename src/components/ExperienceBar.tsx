import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ExperienceBar.module.css';

export function ExperienceBar() {
    const { currentXp, experienceToNextLevel } = useContext(ChallengesContext)

    const percentToNextLevel = Math.round(currentXp * 100) / experienceToNextLevel

    return (
        <header className={styles.experienceBar}>
            <span> 0xp </span>
            <div>
                <div style={{ width: `${percentToNextLevel}%` }} />
                <span className={styles.currentExperience} style={{ left: `${percentToNextLevel}%` }}> {currentXp}xp </span>
            </div>
            <span> {experienceToNextLevel}xp </span>
        </header>
    );
}