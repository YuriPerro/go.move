import { createContext, ReactNode, useEffect, useState } from "react";
import { HOME, RANKING } from "../constants/variables";
import Cookies from 'js-cookie';

interface SideBarData {
    currentRoute: string
    changeRoute: (route: string) => void
}

interface SideBarProviderProps {
    children: ReactNode;
    route: string;
}

export const SideBarContext = createContext({} as SideBarData);

export function SideBarProvider({ children, ...props }: SideBarProviderProps) {
    const [currentRoute, setCurrentRoute] = useState(props.route != null ? props.route : HOME);

    function changeRoute(route: string) {
        setCurrentRoute(route)
    }

    useEffect(() => {
        Cookies.set('route', currentRoute);
    }, [currentRoute])

    return (
        <SideBarContext.Provider value={{ currentRoute, changeRoute }}>
            {children}
        </SideBarContext.Provider>
    )
}