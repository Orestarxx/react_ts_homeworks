import React from 'react';
import {useAppSelector} from "../../redux/store";

const Pagination = () => {
    const  {} = useAppSelector(state => state.moviesReducer)
    return (
        <div>
            <button>Previous Page</button>
            <button>Next Page</button>
        </div>
    );
};

export default Pagination;