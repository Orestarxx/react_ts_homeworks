import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const LayOut = () => {
    return (
        <div>
            <Navigation/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default LayOut;