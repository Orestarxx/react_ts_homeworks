import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../mainLayOut/MainLayOut";
import HomePage from "../pages/homePage/HomePage";
import UsersPage from "../pages/usersPage/UsersPage";
import PostsPage from "../pages/postsPage/PostsPage";
import CommentsPage from "../pages/commentsPage/CommentsPage";
import PostsAndComments from "../components/postsAndCommentsComponents/postsAndComments/PostsAndComments";

export const router =createBrowserRouter([
    {path:'/', element:<MainLayOut/>,children:[
            {index:true,element:<HomePage/>},
            {path:'/users',element:<UsersPage/>},
            {path:'/posts', element:<PostsPage/>},
            {path:'/comments',element:<CommentsPage/>},
            {path:'/postsWithComments',element:<PostsAndComments/>}
        ]}
])