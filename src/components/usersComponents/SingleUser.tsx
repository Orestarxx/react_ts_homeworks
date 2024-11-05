import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {getSingleUser} from "../../redux/usersSlice/usersSlice";
import User from "./User";

const SingleUser = () => {
    const usersSliceState = useAppSelector(state => state.usersSlice);
    const dispatch = useAppDispatch()
    const {id} = useParams();
    useEffect(() => {
        id && dispatch(getSingleUser(+id))
    }, [id,dispatch]);

    return (
        <div>
            {usersSliceState.user &&  <User user={usersSliceState.user}/>}
        </div>
    );
};

export default SingleUser;