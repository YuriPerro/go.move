import { createContext, ReactNode, useState } from "react";
import { HOME, RANKING } from "../constants/variables";

interface SideBarData {
    changeTab: () => void
}

interface SideBarProviderProps {
    children: ReactNode;
}

export const SideBarContext = createContext({} as SideBarData);

export function SideBarProvider({ children }: SideBarProviderProps) {
    const [tableActive, setTableActive] = useState(HOME);

    function changeTab() {
        tableActive == HOME ? setTableActive(RANKING) : setTableActive(HOME)
    }

    return (
        <SideBarContext.Provider value={{changeTab}}>
            {children}
        </SideBarContext.Provider>
    )
}