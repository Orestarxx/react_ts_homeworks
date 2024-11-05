import React from 'react';
import {Link} from "react-router-dom";
import styles from './NavigationStyle.module.css'

const Navigation = () => {
    return (
        <div id={styles.navigation}>
            <Link to={'/'}>Users</Link>
            <Link to={'/posts'}>Posts</Link>
            <Link to={'/comments'}>Comments</Link>
        </div>
    );
};

export default Navigation;