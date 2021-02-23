import styles from '../styles/components/Profile.module.css'

export function Profile(){
    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/YuriPerro.png" alt="Yuri Perro"/>
            <div>
                <strong>Yuri Perro</strong>
                <p>Level 1</p>
            </div>
        </div>
    )
}