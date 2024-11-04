import React from 'react';
import styles from './pagination.module.css'
import {useSearchParams} from "react-router-dom";
const Pagination = () => {
   const page =  useSearchParams({page:'1'});
    console.log(page);
    return (
        <div id={styles.buttonHolder}>
            <button>Prev</button>
            <button>Next</button>
        </div>
    );
};

export default Pagination;