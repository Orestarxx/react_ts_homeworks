import React, {useEffect, useState} from 'react';
import {movieService} from "../../../service/api.service";
import {IDataMovie} from "../../../models/IDataMovie";
import {IMovie} from "../../../models/IMovie";
import {useLocation,} from "react-router-dom";
import Movie from "../movie/Movie";
import './moviesStyle.css'

const MovieGenre = () => {
    const [movies, setMovies] = useState<IDataMovie & {results:IMovie[]} | null>(null);
    const {state:{id}} = useLocation()
    useEffect(() => {
        movieService.genres.getMoviesWithGenre(id.toString()).then((movies:IDataMovie & {results:IMovie[]}) =>setMovies(movies))
    }, [id]);
    console.log(movies,id);
    return (
        <div id={'moviesHolder'}>
            {movies ? movies.results.map((movie)=><Movie key={movie.id} movie={movie}/>) : <div>Error</div>}
        </div>
    );
};

export default MovieGenre;