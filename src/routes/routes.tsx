import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Posts from "../components/postsComponents/posts/Posts";

export const routes = createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
        {index:true, element:<Posts/>}
        ]}
])