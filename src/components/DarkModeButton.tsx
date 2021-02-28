import { useContext, useEffect, useState } from 'react'
import styles from '../styles/components/DarkModeButton.module.css'

import { FaCloudMoon, FaSun } from 'react-icons/fa';
import { DarkModeContext } from '../contexts/DarkModeContext';

export function DarkModeButton() {

    const { toggle } = useContext(DarkModeContext)

    return (
        <div id="divContr" className={styles.divContainer}>
            <FaSun size={15} className={styles.faSun} style={{ position: 'absolute', top: 5 }} color='#ffe923' />
            <FaCloudMoon size={15} className={styles.faMoon} style={{ position: 'absolute', bottom: 5 }} color='#4722ac' />
            <input onClick={() => console.log('OK')} type="checkbox" className={styles.BtnContainer} />
        </div>
    )
}