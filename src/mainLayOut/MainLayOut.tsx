import React from 'react';
import {Outlet} from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

const MainLayOut = () => {
    return (
        <div>
            <Navigation/>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;