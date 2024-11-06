import React from 'react';
import {Link} from "react-router-dom";
import styles from './Navigation.module.css'

const Navigation = () => {
    return (
        <div id={styles.navigation}>
            <Link to={'/'}>Home Page</Link>
            <Link to={'users'}>Users</Link>
            <Link to={'Posts'}>Posts</Link>
            <Link to={'comments'}>Comments</Link>
            <Link to={'commentsOfPosts'}>Posts Of Comments</Link>
        </div>
    );
};

export default Navigation;