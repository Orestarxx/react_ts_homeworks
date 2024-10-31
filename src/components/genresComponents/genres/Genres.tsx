import React, {useEffect, useState} from 'react';
import {movieService} from "../../../service/api.service";
import {IGenre, IGenreData} from "../../../models/IGenre";
import Genre from "../genre/Genre";
import './genresStyle.css'
import {colorGenre} from "../../../helpers/colorGenre";


const Genres = () => {
    const [genres, setGenres] = useState<IGenre[] | null>(null);
    useEffect(() => {
        movieService.genres.getGenres().then((genres:IGenreData) =>setGenres(genres.genres));
    }, []);
    return (
        <ul id={'genreHolder'}>
            {genres?.length && genres.map((genre:IGenre) => <Genre key={genre.id} genre={genre} colorGenre={colorGenre}/>)}
        </ul>
    );
};

export default Genres;