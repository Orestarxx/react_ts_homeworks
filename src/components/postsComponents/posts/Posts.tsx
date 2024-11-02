import React, {useEffect} from 'react';
import {dummyService} from "../../../servises/api.dummyService";

const Posts = () => {
    useEffect(() => {
        dummyService.posts.getAllPosts().then().catch(reason => {
            console.log(reason);
            dummyService.auth.refresh().then()
        })
    }, []);
    return (
        <div>
            Posts
        </div>
    );
};

export default Posts;