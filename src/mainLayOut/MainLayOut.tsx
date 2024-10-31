import React from 'react';
import Genres from "../components/genresComponents/genres/Genres";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
         <Genres/>
            <hr/>
           <Outlet/>
        </div>
    );
};

export default MainLayOut;