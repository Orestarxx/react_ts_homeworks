import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../layOuts/mainLayOut/MainLayOut";
import Movies from "../components/moviesComponents/movies/Movies";
import MovieDetails from "../components/movieDetails/MovieDetails";


export  const router =  createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
            {index:true,element:<Movies/>},
            {path:'/:name',element:<Movies/>},
            {path:'/:name/:details',element:<MovieDetails/>}
        ]}
])