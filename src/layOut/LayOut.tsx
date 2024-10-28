import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const LayOut = () => {
    const [logo, setLogo] = useState<string>('');
    const getLogo = (logo:string) =>{
        setLogo(logo)
    }
    return (
        <div>
            <Navigation logo={logo}/>
            <hr/>
            <Outlet context={getLogo}/>
        </div>
    );
};

export default LayOut;