import { useContext, useEffect } from 'react'
import styles from '../styles/components/SideBar.module.css'
import { HOME, RANKING } from "../constants/variables";

import { SideBarContext } from '../contexts/SideBarContext';
import { DarkModeContext } from '../contexts/DarkModeContext';

export function SideBar() {

    const { DarkModeActive } = useContext(DarkModeContext)
    const { changeTab, tableActive } = useContext(SideBarContext)

    useEffect(() => {
    }, [DarkModeActive])

    return (
        <div className={styles.container}>
            {DarkModeActive ?
                <img src="/LogoBranca-png.png" alt="Logo colorida side bar" />
                :
                <img src="/LogoColorida.png" alt="Logo colorida side bar" />
            }
            <div className={styles.divIcons}>

                <input onClick={() => changeTab(HOME)} className={styles.iconHome} type="image" src={tableActive == HOME ? "/icons/home.svg" : "/icons/home-active.svg"} />

                <input onClick={() => changeTab(RANKING)} className={styles.iconMedal} type="image" src={tableActive == RANKING ? "/icons/medal.svg" : "/icons/medal-active.svg"} />

            </div>
        </div>
    )
}