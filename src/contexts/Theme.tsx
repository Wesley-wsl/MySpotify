import { parseCookies } from "nookies";
import {
    createContext,
    Dispatch,
    SetStateAction,
    useEffect,
    useState,
} from "react";
import { ThemeProvider } from "styled-components";

import { dark, light } from "../styles/theme";

interface IThemeContext {
    setLightMode: Dispatch<SetStateAction<boolean>>;
    lightMode: boolean;
}

interface IChildren {
    children: JSX.Element;
}

export const ThemeContext = createContext({} as IThemeContext);

export function ThemeContextProvider({ children }: IChildren) {
    // eslint-disable-next-line prettier/prettier
    const { theme: theme } = parseCookies(null);

    const [lightMode, setLightMode] = useState(false);

    useEffect(() => {
        setLightMode(theme ? true : false);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{
                setLightMode,
                lightMode,
            }}
        >
            <ThemeProvider theme={lightMode === false ? dark : light}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
}
