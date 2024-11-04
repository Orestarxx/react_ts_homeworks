import React, {useEffect} from 'react';
import styles from './pagination.module.css'
import {useSearchParams} from "react-router-dom";
const Pagination = () => {
   const [query,setQuery] =  useSearchParams({page:'1'});
    useEffect(() => {
        const page = query.get('page') || '1';
    }, [query]);
    const prev = () =>{
        const page = query.get('page') || '1';
        if(page){
         let pageToNumber = +page;
            pageToNumber--;
            setQuery({page:pageToNumber.toString()})
        }
    }
    const next = () =>{
        const page = query.get('page') || '1';
        if(page){
            let pageToNumber = +page;
            pageToNumber++;
            setQuery({page:pageToNumber.toString()})
        }
    }
    return (
        <div id={styles.buttonHolder}>
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export default Pagination;