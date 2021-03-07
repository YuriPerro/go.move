import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <p>
                <img src="/userImage.png" alt="Foto perfil" />
            </p>
            <div>
                <strong>#user1707</strong>
                <p>
                    <img className={styles.svgLevel} src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}