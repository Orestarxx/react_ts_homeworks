import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import Users from "../components/usersComponents/users/Users";
import Comments from "../components/CommentsComponents/comments/Comments";
import Posts from "../components/postsComponents/posts/Posts";
import HomePage from "../components/homePage/HomePage";
import UserDetails from "../components/usersComponents/userDetails/UserDetails";

export const routes = createBrowserRouter([
    {path:'/', element:<MainLayOut/>,children:[
            {index:true,element:<HomePage/>},
            {path:'users', element:<Users/>},
            {path:'users/:id',element:<UserDetails/>},
            {path:'comments', element:<Comments/>},
            {path:'posts', element:<Posts/>}
        ]}
]);