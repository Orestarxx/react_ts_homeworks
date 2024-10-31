import React, {useEffect, useState} from 'react';
import {movieService} from "../../../service/api.service";
import {IDataMovie} from "../../../models/IDataMovie";
import {IMovie} from "../../../models/IMovie";
import {useLocation,} from "react-router-dom";

const MovieGenre = () => {
    const [movies, setMovies] = useState<IDataMovie & {results:IMovie[]}>();
    const {state:{id,name}} = useLocation()
    useEffect(() => {
        movieService.genres.getMoviesWithGenre(id.toString()).then((movies:IDataMovie & {results:IMovie[]}) =>setMovies(movies))
    }, [id]);
    console.log(movies,id);
    return (
        <div>
            movieGenre
        </div>
    );
};

export default MovieGenre;