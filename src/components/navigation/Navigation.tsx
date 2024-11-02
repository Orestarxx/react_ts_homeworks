import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <div>
          <div>
              <Link to={'/'}>Login</Link>
          </div>
            <div>
                <Link to={'posts'}>Posts</Link>
            </div>
            <hr/>
        </div>
    );
};

export default Navigation;