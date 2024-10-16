import React from 'react';
import Navigation from "../components/Navigation/Navigation";
import {Outlet} from "react-router-dom";

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