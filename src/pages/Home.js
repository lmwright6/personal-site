import * as React from 'react';
import { AboutContext } from '../context/AboutContext';


export default function Home() {

    const { aboutName, setAboutName } = React.useContext(AboutContext);


    return(
        <>
        <div>Hello! {aboutName} </div>
        </>
    );
}