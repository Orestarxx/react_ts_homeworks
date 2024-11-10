import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {genresActions} from "../../../redux/genresSlice/genresSlice";
import Genre from "../genre/Genre";
import {IGenre} from "../../../modules/IGenre";

const Genres = () => {
    const useSelector = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch]);
    return (
        <div>
            {useSelector.genres.length && useSelector.genres.map((genre:IGenre) =><Genre key={genre.id} genre={genre}/>)}
        </div>
    );
};

export default Genres;