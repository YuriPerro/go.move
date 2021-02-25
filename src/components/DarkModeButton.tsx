import styles from '../styles/components/DarkModeButton.module.css'

export function DarkModeButton() {
    return (
        <div className={styles.divContainer}>
            <button className={styles.BtnContainer}>

                <div className={styles.divCircle} />
            </button>
        </div>
    )
}