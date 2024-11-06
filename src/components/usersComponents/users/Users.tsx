import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {usersActions} from "../../../redux/usersSlice/usersSlice";
import User from "../user/User";
import {IUser} from "../../../models/IUser";

const Users = () => {
    const {users} = useAppSelector(state => state.usersReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersActions.getAllUsers())
    }, [dispatch]);
    return (
        <div>
            {users? users.map((user:IUser) =><User key={user.id} user={user}/>):
                <div></div>}
        </div>
    );
};

export default Users;