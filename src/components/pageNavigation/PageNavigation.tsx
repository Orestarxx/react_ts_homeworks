import React from 'react';
import {Link} from "react-router-dom";
import './pageNavigationStyle.css'

const PageNavigation = () => {
    return (
        <div id={'navigation'}>
            <Link to={'/'}>Home</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
            <Link to={'/postsWithComments'}>Posts and Comments</Link>
        </div>
    );
};

export default PageNavigation;