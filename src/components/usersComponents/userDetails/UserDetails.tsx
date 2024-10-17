import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../../../models/IUser";
import './userDetails.css';
import {postService} from "../../../services/jsonPlaceHolder.service";
import {IPost} from "../../../models/IPost";
import PostOfUser from "../../postsComponents/postOfUser/PostOfUser";


const UserDetails = () => {
   const {state} =  useLocation();
    const {id,username,email,website,phone,name,
        address:{street,suite,city,zipcode,
            geo:{lng,lat}},
        company:{bs,catchPhrase,name:companyName}}:IUser = state;
    const [userPosts,setUsersPosts] = useState<IPost[]>([]);
    useEffect(():void =>{
       postService.getPostsOfUser(id).then((response:IPost[]) =>{setUsersPosts(response)})
    },[id])
    return (
        <div className={'userInfoWrap'}>
            <div className={'userInfo'}>
               <div>
                   <h3>{name}</h3>
                   <div>{username}</div>
                   <div>{email}</div>
                   <div>{website}</div>
                   <div>{phone}</div>
               </div>
                <div>
                    <h3>Address</h3>
                    <div>{street}</div>
                    <div>{city}</div>
                    <div>{suite}</div>
                    <div>{zipcode}</div>
                    <h3>GEO</h3>
                    <div>{lng}</div>
                    <div>{lat}</div>
                </div>

               <div>
                   <h3>Company</h3>
                   <div>{bs}</div>
                   <div>{catchPhrase}</div>
                   <div>{companyName}</div>
               </div>
            </div>
            <div>{userPosts.map((post:IPost) =><PostOfUser key={post.id} post={post}/>)}</div>
        </div>
    );
};

export default UserDetails;