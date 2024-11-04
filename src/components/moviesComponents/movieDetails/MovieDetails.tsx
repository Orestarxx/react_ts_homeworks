import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {movieService} from "../../../service/api.service";
import {ISingleMovie} from "../../../models/ISingleMovie";
import {IDataVideo} from "../../../models/IVideo";


const MovieDetails = () => {
    const [detailsOfMovie, setDetailsOfMovie] = useState<ISingleMovie | null>(null);
    const [videos, setVideos] = useState<IDataVideo | null>(null);
    const {details} = useParams();
    useEffect(() => {
        details ? movieService.movies.getSingleMovieById(details)
            .then((response:ISingleMovie) =>setDetailsOfMovie(response)) : console.log('something went wrong');
        details? movieService.movies.getVideos(details)
            .then((response:IDataVideo) =>setVideos(response)) : console.log('something went wrong')
    }, [details]);
    console.log(detailsOfMovie);
    console.log(videos)
    return (
        <div>
            details
        </div>
    );
};

export default MovieDetails;