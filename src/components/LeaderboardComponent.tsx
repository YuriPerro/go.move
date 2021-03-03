import { useState } from 'react'
import { FaLeaf } from 'react-icons/fa'
import styles from '../styles/components/Leaderboard.module.css'
import { Profile } from './Profile'

export default function LeaderboardComponent() {

    const [usersData, setUsersData] = useState([
        {
            nome: "Yuri Perro",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 16,
            experience: 2146
        },
        {
            nome: "Yuri Perro",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 16,
            experience: 2146
        },
        {
            nome: "Yuri Perro",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 16,
            experience: 2146
        },
        {
            nome: "Yuri Perro",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 16,
            experience: 2146
        },
        {
            nome: "Yuri Perro",
            level: 120,
            picture: "https://github.com/YuriPerro.png",
            challenges: 16,
            experience: 2146
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
                {usersData.map((user) =>
                    <div className={styles.bodyListUsers}>
                        <div>
                            1
                        </div>
                        <div>
                            <div className={styles.divProfile}>
                                <img className={styles.userImage} src={user.picture} alt="Users images" />
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
                            <p>{user.challenges}</p>
                            <p>{user.experience}xp</p>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}