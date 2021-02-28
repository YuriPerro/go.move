import { createContext, ReactNode, useState } from "react";
import { HOME, RANKING } from "../constants/variables";


interface SideBarData {
    tableActive: string
    changeTab: (route: string) => void
}

interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext({} as SideBarData);

export function SideBarProvider({ children }: SideBarProviderProps) {
    const [tableActive, setTableActive] = useState(RANKING);

    function changeTab(route: string) {
        route == HOME ? setTableActive(RANKING) : setTableActive(HOME)
    }

    return (
        <SideBarContext.Provider value={{ changeTab, tableActive }}>
            {children}
        </SideBarContext.Provider>
    )
}