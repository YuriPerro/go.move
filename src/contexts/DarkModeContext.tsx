import { createContext, ReactNode, useEffect, useState } from "react";
import Cookies from 'js-cookie';
import { DARK, LIGHT } from "../constants/variables";

interface DarkModeData {
    toggleTheme: () => void
    DarkModeActive: boolean
}

interface DarkModeProviderProps {
    children: ReactNode;
    theme: string
}

export const DarkModeContext = createContext({} as DarkModeData);

export function DarkModeProvider({ children, ...rest }: DarkModeProviderProps) {
    const [DarkModeActive, setActive] = useState(rest.theme != null && rest.theme === DARK ? true : false);

    useEffect(() => {
        let root = document.documentElement.style;

        if (DarkModeActive) {
            Cookies.set('theme', DARK);

            root.setProperty('--background', '#1C1C1C')
            root.setProperty('--text', "#AEAEAE")
            root.setProperty('--primary', "#1abeb6")
            root.setProperty('--white', "#262626")
            root.setProperty('--secondary-hover', "#18ABA4")
            root.setProperty('--background-modal', "rgba(0, 0, 0, 0.6)")
            root.setProperty('--background-modal-center', "rgba(20, 20, 20, 1)")
            root.setProperty('--title', "#E7E7E7")
        }
        else {
            Cookies.set('theme', LIGHT);

            root.setProperty('--background', "#F2F3F5")
            root.setProperty('--text', "#666666")
            root.setProperty('--primary', "#ff8282")
            root.setProperty('--white', "#fff")
            root.setProperty('--secondary-hover', "#D9706E")
            root.setProperty('--background-modal', "rgba(242, 243, 245, 0.8)")
            root.setProperty('--background-modal-center', "rgba(242, 243, 245, 0.8)")
            root.setProperty('--title', "#2e384d")
        }

        //console.warn(root.getPropertyValue("--background"))

    }, [DarkModeActive])


    function toggleTheme() {
        setActive(!DarkModeActive);
    }

    return (
        <DarkModeContext.Provider value={{ toggleTheme, DarkModeActive }}>
            {children}
        </DarkModeContext.Provider>
    )
}