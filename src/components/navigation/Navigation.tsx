import React, {FC} from 'react';
import {Link} from "react-router-dom";
 type LogoProps = {
     logo:string
 }
const Navigation:FC<LogoProps> = ({logo}) => {
    return (
        <div>
            <Link to={'/'}>Home page</Link>
            <Link to={'/login'}>Login</Link>
            <Link to={'/products'}>Products</Link>
            <div>
                {logo && <img src={logo} alt="logo"/>}
            </div>
        </div>
    );
};

export default Navigation;