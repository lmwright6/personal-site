import React, { useEffect, useState } from "react";


const AboutContext = React.createContext({
    aboutName: "",
    setAboutName: () => {}
});



const AboutContextProvider = ({children}) => {
    const [aboutName, setAboutName] = useState("test");

    const setMyAboutName = (newName) => {
        setAboutName(newName);
        console.log("set my name: ", newName)
      };

    return (
        <AboutContext.Provider value={{
            aboutName,
            setAboutName: setMyAboutName
            }}>
            {children}
        </AboutContext.Provider>
    )
}
export { AboutContext, AboutContextProvider }