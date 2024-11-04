import React, {FC} from 'react';
import {IMovie} from "../../../models/IMovie";
import './movieStyle.css'
import {imgPath} from "../../../data/data";
import {Link} from "react-router-dom";
type MovieProps ={
    movie:IMovie,
    genre?:string
}
const Movie:FC<MovieProps> = ({movie,genre}) => {
    return (
        <Link to={`/movie/${genre}/details/${movie.id}`}>
            <div className={'movie'}>
                <img src={imgPath + movie.poster_path} alt="poster"/>
            </div>
        </Link>
    );
};

export default Movie;