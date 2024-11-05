import {createBrowserRouter} from "react-router-dom";
import Users from "../components/usersComponents/Users";
import MainLayOut from "../mainLayOut/MainLayOut";
import Posts from "../components/postsComponents/Posts";
import Comments from "../components/commentsComponents/Comments";
import SingleUser from "../components/usersComponents/SingleUser";

export const router = createBrowserRouter([
    {path:'/',element:<MainLayOut/>,children:[
            {index:true,element:<Users/>},
            {path:'/users/:id',element:<SingleUser/>},
            {path:'/posts',element:<Posts/>},
            {path:'/comments',element:<Comments/>}
        ]},
])