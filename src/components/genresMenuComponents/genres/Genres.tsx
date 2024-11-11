import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {genresActions} from "../../../redux/genresSlice/genresSlice";
import Genre from "../genre/Genre";
import {IGenre} from "../../../modules/IGenre";
import styles from './genresStyle.module.css'


const Genres = () => {
    const useSelector = useAppSelector(state => state.genresReducer);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(genresActions.getGenres())
    }, [dispatch]);
    return (
        <div id={styles.header}>
            <div id={styles.genresHolder}>
                {useSelector.genres.length && useSelector.genres.map((genre: IGenre) => <Genre key={genre.id}
                                                                                               genre={genre}/>)}
            </div>
                <hr/>
        </div>
    );
};

export default Genres;