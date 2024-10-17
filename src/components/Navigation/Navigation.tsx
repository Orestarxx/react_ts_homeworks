import React, {FC} from 'react';
import {Link} from "react-router-dom";
import './navigationStyle.css';

const Navigation:FC = () => {
    return (
        <nav id={'navigation'}>
            <ul>
                <li><Link to={'/'}>Home</Link></li>
                <li><Link to={'users'}>Users</Link> </li>
                <li><Link to={'posts'}>Posts</Link></li>
                <li><Link to={'comments'}>Comments</Link></li>
            </ul>

        </nav>
    );
};

export default Navigation;