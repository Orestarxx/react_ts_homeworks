import React from 'react';
import Genres from "../../components/genresMenuComponents/genres/Genres";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
            <Genres/>
            <Outlet/>
        </div>
    );
};

export default MainLayOut;