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
    const {state} = useLocation()
    const {genre} = useParams()
    console.log(movies);
    useEffect(() => {
        const page = query.get('page')|| '1';
        if( page &&  genre){
          movieService.genres.getMoviesWithGenre(genre.toString(),+page)
            .then((movies:IDataMovie & {results:IMovie[]}) =>setMovies(movies))
        }

    }, [state?.id ,query,genre]);
    return (
        <div>
            <div id={'moviesHolder'}>
                {movies ? movies.results.map((movie) => <Movie key={movie.id} movie={movie} genre={state}/>) :
                    <div>Error</div>}
            </div>
            <Pagination/>
        </div>
    );
};

export default MovieGenre;