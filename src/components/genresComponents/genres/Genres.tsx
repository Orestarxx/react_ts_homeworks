import React, {useEffect, useState} from 'react';
import {movieService} from "../../../service/api.service";
import {IGenre, IGenreData} from "../../../models/IGenre";
import Genre from "../genre/Genre";
import './genresStyle.css'
import {colorGenre} from "../../../helpers/colorGenre";
import {useSearchParams} from "react-router-dom";


const Genres = () => {
    const [query,setQuery] = useSearchParams({page:'1'})

    const [genres, setGenres] = useState<IGenre[] | null>(null);
    useEffect(() => {
        movieService.genres.getGenres(+query).then((genres:IGenreData) =>setGenres(genres.genres));
    }, [query]);
    return (
        <ul id={'genreHolder'}>
            {genres?.length && genres.map((genre:IGenre) => <Genre key={genre.id} genre={genre} colorGenre={colorGenre}/>)}
        </ul>
    );
};

export default Genres;