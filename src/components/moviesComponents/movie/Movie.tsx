import React, {FC} from 'react';
import {IMovie} from "../../../modules/IMovie";
import { imgBaseURL} from "../../../data/urls";
import styles from './movieStyles.module.css'
import {Link} from "react-router-dom";
type MovieProps = {
    movie:IMovie,
    genreName:string|undefined
}
const Movie:FC<MovieProps> = ({movie,genreName}) => {
    return (
        <Link state={movie} className={styles.movie} to={`/${genreName}/${movie.id}`}>
            <img src={imgBaseURL + movie.poster_path} alt="poster"/></Link>
    );
};

export default Movie;