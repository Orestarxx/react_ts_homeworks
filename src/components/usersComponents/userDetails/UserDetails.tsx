import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../../../models/IUser";
import './userDetails.css';
import {postService} from "../../../services/jsonPlaceHolder.service";
import {IPost} from "../../../models/IPost";
import PostOfUser from "../postOfUser/PostOfUser";


const UserDetails = () => {
   const {state} =  useLocation();
    console.log(state);
    const {id,username,email,website,phone,name,
        address:{street,suite,city,zipcode,
            geo:{lng,lat}},
        company:{bs,catchPhrase,name:companyName}}:IUser = state;
    const [userPosts,setUsersPosts] = useState<IPost[]>([]);
    useEffect(():void =>{
       postService.getPostsOfUser(id).then((response:IPost[]) =>{setUsersPosts(response)})
    },[id])

    console.log(userPosts);
    return (
        <div className={'userInfoWrap'}>
            <div className={'userInfo'}>
                <h3>{name}</h3>
            </div>
            <div>{userPosts.map((post:IPost) =><PostOfUser key={post.id} post={post}/>)}</div>
        </div>
    );
};

export default UserDetails;