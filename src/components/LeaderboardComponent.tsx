import { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import styles from '../styles/components/Leaderboard.module.css'
import { Profile } from './Profile'

export default function LeaderboardComponent() {

    const [usersData, setUsersData] = useState([
        {
            nome: "#user2120",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 21,
            experience: 2146
        },
        {
            nome: "#user2653",
            level: 80,
            picture: "https://github.com/YuriPerro.png",
            challenges: 17,
            experience: 2130
        },
        {
            nome: "#user2101",
            level: 77,
            picture: "https://github.com/YuriPerro.png",
            challenges: 14,
            experience: 1940
        },
        {
            nome: "#user2169",
            level: 55,
            picture: "https://github.com/YuriPerro.png",
            challenges: 12,
            experience: 1980
        },
        {
            nome: "#user213",
            level: 46,
            picture: "https://github.com/YuriPerro.png",
            challenges: 10,
            experience: 214
        },
    ])

    return (
        <div className={styles.container}>
            <h3> Leaderboard </h3>

            <div className={styles.headerListUsers}>
                <div>
                    <h4 className={styles.position}> Posição </h4>
                </div>
                <div>
                    <h4 className={styles.user}> Usuário </h4>
                    <h4 className={styles.challenges}> Desafios </h4>
                    <h4 className={styles.experience}> Experiência </h4>
                </div>
            </div>
            <div style={{ marginTop: 15 }}>
                {usersData.map((user, index) =>
                    <div className={styles.bodyListUsers}>
                        <div>
                            {index + 1}
                        </div>
                        <div>
                            <div className={styles.divProfile}>
                                <img className={styles.userImage} src="/userImage.png" alt="Users images" />
                                <div style={{ display: "flex", flexDirection: "column", marginLeft: "1rem" }}>
                                    <p className={styles.userName}>
                                        {user.nome}
                                    </p>
                                    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                        <img src="icons/level.svg" alt="level" />
                                        <p className={styles.userLevel}>
                                            Level {user.level}
                                        </p>
                                    </div>
                                </div>
                            </div>      
                            <p className={styles.textChallenges}>{user.challenges}</p>
                            <p className={styles.textExperience}>{user.experience}xp</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}