import { createContext, ReactNode, useEffect, useState } from "react";
import { HOME, RANKING } from "../constants/variables";

interface DarkModeData {
    toggle: () => void
    DarkModeActive: boolean
}

interface DarkModeProviderProps {
    children: ReactNode;
}

export const DarkModeContext = createContext({} as DarkModeData);

export function DarkModeProvider({ children }: DarkModeProviderProps) {
    const [DarkModeActive, setActive] = useState(false);


    useEffect(() => {
        let root = document.documentElement.style;
        root.setProperty('--background', "#1C1C1C")
        root.setProperty('--white', "#262626")
        root.setProperty('--text', "#AEAEAE")
        root.setProperty('--experience-secondary', '#ff8282')
        
    }, [])
    

    function toggle() {
        console.log("SETANDO")
        setActive(!DarkModeActive);
    }

    return (
        <DarkModeContext.Provider value={{ toggle, DarkModeActive }}>
            {children}
        </DarkModeContext.Provider>
    )
}