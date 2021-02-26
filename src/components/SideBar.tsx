import { useContext } from 'react'
import styles from '../styles/components/SideBar.module.css'

import { SideBarContext } from '../contexts/SideBarContext';

export function SideBar() {

    const { changeTab } = useContext(SideBarContext)

    return (
        <div className={styles.container}>
            <img src="/LogoColorida.png" alt="Logo colorida side bar" />
            <div className={styles.divIcons}>

                <input onClick={changeTab} className={styles.iconHome} type="image" src="/icons/home.svg" />

                <input onClick={changeTab} className={styles.iconMedal} type="image" src="/icons/medal.svg" />

            </div>
        </div>
    )
}