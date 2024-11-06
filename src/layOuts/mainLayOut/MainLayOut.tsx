import React from 'react';
import Navigation from "../../components/navigationComponent/Navigation";
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