import React, {useEffect, useState} from 'react';
import {movieService} from "../../../service/api.service";
import {IDataMovie} from "../../../models/IDataMovie";
import {IMovie} from "../../../models/IMovie";
import {useLocation, useParams, useSearchParams,} from "react-router-dom";
import Movie from "../movie/Movie";
import './moviesStyle.css'
import Pagination from "../../pagination/Pagination";

const MovieGenre = () => {
    const [movies, setMovies] = useState<IDataMovie & {results:IMovie[]} | null>(null);
   const [query] = useSearchParams({page:'1'})
    const {state:{id}} = useLocation()
    const {genre} = useParams()
    console.log(genre);
    console.log(id);
    useEffect(() => {
        const page = query.get('page');
         page && movieService.genres.getMoviesWithGenre(id.toString())
            .then((movies:IDataMovie & {results:IMovie[]}) =>setMovies(movies))
    }, [id,query]);
    return (
        <div>
            <div id={'moviesHolder'}>
                {movies ? movies.results.map((movie) => <Movie key={movie.id} movie={movie} genre={genre}/>) :
                    <div>Error</div>}
            </div>
            <Pagination/>
        </div>
    );
};

export default MovieGenre;