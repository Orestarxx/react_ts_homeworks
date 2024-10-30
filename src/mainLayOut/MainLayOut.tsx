import React from 'react';
import {Outlet} from "react-router-dom";
import PageNavigation from "../components/pageNavigation/PageNavigation";

const MainLayOut = () => {
    return (
        <div>
            <PageNavigation/>
             <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;