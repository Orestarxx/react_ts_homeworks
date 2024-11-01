import React, {FC} from 'react';
import {IMovie} from "../../../models/IMovie";
import './movieStyle.css'
import {imgPath} from "../../../data/data";
type MovieProps ={
    movie:IMovie
}
const Movie:FC<MovieProps> = ({movie:{poster_path}}) => {
    return (
        <div className={'movie'}>
            <img src={imgPath+poster_path} alt="poster"/>
        </div>
    );
};

export default Movie;