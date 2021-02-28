import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/LevelUpModal.module.css'
 
export function LevelUpModal () {

    const { level, closeLevelUpModal } = useContext(ChallengesContext)

    return(
        <div className={styles.overlay} onClick={() => closeLevelUpModal()}>
            <div className={styles.container}>
                <header> {level} </header>

                <strong> Parabéns! </strong>
                <p> Você alcançou um novo nível </p>
                
                <button
                    onClick={closeLevelUpModal}
                    type="button"
                >
                    <img src="/icons/close.svg" alt="Fechar modal"></img>
                </button>
            </div>
        </div>
    )
}