import React from 'react';
import {useParams} from "react-router-dom";

const MovieDetails = () => {
   const {details} = useParams()
    console.log(details);
    return (
        <div>
            details
        </div>
    );
};

export default MovieDetails;