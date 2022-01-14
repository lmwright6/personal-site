import React, { PropsWithChildren, useEffect, useState } from "react";


export const AboutContext = React.createContext<{
    aboutName: string,
    setAboutName: (newName: string) => void;
}>
({
    aboutName: "",
    setAboutName: () => {}
});



export function AboutContextProvider({children, }: PropsWithChildren<any>) {
    const [aboutName, setAboutName] = useState("test");


    return (
        <AboutContext.Provider value={{
            aboutName,
            setAboutName
            }}>
            {children}
        </AboutContext.Provider>
    )
}