import React from 'react';
import Posts from "../components/postsComponents/posts/Posts";
import {Outlet} from "react-router-dom";

const MainLayOut = () => {
    return (
        <div>
      <Outlet/>
        </div>
    );
};

export default MainLayOut;