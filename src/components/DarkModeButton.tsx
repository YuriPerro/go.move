import { useEffect, useState } from 'react'
import styles from '../styles/components/DarkModeButton.module.css'

import { FaCloudMoon, FaSun } from 'react-icons/fa';

export function DarkModeButton() {

    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active);
    }

    useEffect(() => {
        /*active ?
            document.getElementById('divContr').className = styles.divContainerDark
            :
            document.getElementById('divContr').className = styles.divContainer*/
    }, [active])

    return (
        <div id="divContr" className={styles.divContainer}>
            <FaSun size={15} className={styles.faSun} style={{ position: 'absolute', top: 5 }} color='#ffe923'/>
            <FaCloudMoon size={15} className={styles.faMoon} style={{ position: 'absolute', bottom: 5 }} color='#4722ac'/>
            <input onClick={toggle} type="checkbox" className={styles.BtnContainer} />
        </div>
    )
}