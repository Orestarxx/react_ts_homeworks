import React from 'react';
import {NavLink} from "react-router-dom";
import './navigationStyle.css';

const Navigation = () => {
    return (
        <div id={'navigation'}>
            <NavLink to={'/'} className={'navigationLink'}>Home</NavLink>
            <NavLink to={'posts'} className={'navigationLink'}>Posts</NavLink>
            <NavLink to={'users'} className={'navigationLink'}>Users</NavLink>
            <NavLink to={'products'} className={'navigationLink'}>Products</NavLink>
            <NavLink to={'characters'} className={'navigationLink'}>Characters</NavLink>
        </div>
    );
};

export default Navigation;