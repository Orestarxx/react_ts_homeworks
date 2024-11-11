import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {movieActions} from "../../../redux/moviesSlice/moviesSlice";
import Movie from "../movie/Movie";
import {IMovie} from "../../../modules/IMovie";
import {useLocation} from "react-router-dom";
import styles from './moviesStyle.module.css'
import Pagination from "../../pagination/Pagination";

const Movies = () => {

    const {movies} = useAppSelector(state => state.moviesReducer);
    let  dispatch = useAppDispatch();
    const{state:{name,id}} = useLocation();
    console.log(name,id);

 let page = 1
    useEffect(() => {

        dispatch(movieActions.getAllMovies({id,page}))

    }, [dispatch,id,page]);
    console.log(movies);
    return (
        <div>
            <div id={styles.moviesHolder}>
                {movies?.results && movies.results.map((movie: IMovie) => <Movie key={movie.id} movie={movie} genreName={name}/>)}
            </div>
            <Pagination/>
        </div>
    );
};

export default Movies;