import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
            <Link to={'/'}>Home page</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/products'}>Products</Link>
        </div>
    );
};

export default Navigation;