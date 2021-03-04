import { useContext } from 'react'
import styles from '../styles/components/SideBar.module.css'
import { HOME, RANKING } from "../constants/variables";

import { SideBarContext } from '../contexts/SideBarContext';
import { DarkModeContext } from '../contexts/DarkModeContext';

import Link from 'next/link';

export function SideBar() {

    const { DarkModeActive } = useContext(DarkModeContext)
    const { currentRoute, changeRoute } = useContext(SideBarContext)

    return (
        <div className={styles.container}>
            {DarkModeActive ?
                <img src="/LogoBranca-png.png" alt="Logo branca side bar" />
                :
                <img src="/LogoColorida.png" alt="Logo colorida side bar" />
            }
            <div className={styles.divIcons}>
                <Link href="/">
                    <input
                        onClick={() => changeRoute(HOME)}
                        className={styles.iconHome}
                        type="image"
                        src={currentRoute != HOME ? "/icons/home.svg" : "/icons/home-active.svg"}
                    />
                </Link>

                <Link href="/leaderboard">
                    <input
                        onClick={() => changeRoute(RANKING)}
                        className={styles.iconMedal}
                        type="image"
                        src={currentRoute != RANKING ? "/icons/medal.svg" : "/icons/medal-active.svg"}
                    />
                </Link>
            </div>
        </div>
    )
}