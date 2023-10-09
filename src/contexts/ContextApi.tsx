"use client"

import { ReactNode ,createContext, useState } from "react";

type ContextProps = {
    children: ReactNode;
}

export const Context = createContext({
    id: 0,
    setId: (value: number) => {},
});

export const ContextApiProvider = ({ children }: ContextProps) => {
    const [id, setId] = useState<number>(2);
    return (
        <Context.Provider value={{id, setId}}>
            {children}
        </Context.Provider>
    )
}