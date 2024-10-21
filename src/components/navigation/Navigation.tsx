import React from 'react';
import {NavLink} from "react-router-dom";
import './navigationStyle.css';

const Navigation = () => {
    return (
        <div id={'navigation'}>
            <NavLink to={'/'} className={'navigationLink'}>Home</NavLink>
            <NavLink to={'posts'} className={'navigationLink'}>Posts</NavLink>
            <NavLink to={'users'} className={'navigationLink'}>users</NavLink>
            <NavLink to={'products'} className={'navigationLink'}>products</NavLink>
        </div>
    );
};

export default Navigation;