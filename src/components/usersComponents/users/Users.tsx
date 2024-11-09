import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {usersActions} from "../../../redux/usersSlice/usersSlice";
import User from "../user/User";
import {IUser} from "../../../models/IUser";
import '../../../index.css'

const Users = () => {
    const [singleUser,setUser] = useState<IUser | null>(null);
    const {users,user} = useAppSelector(state => state.usersReducer);
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(usersActions.getAllUsers())
    }, [dispatch,]);
    useEffect(() => {
        singleUser && dispatch(usersActions.getSingleUser(singleUser))
    }, [singleUser,dispatch]);
    return (
        <div className={'mainHolder'}>
           <div> {users.length && users.map((user: IUser) => <User key={user.id} user={user} setID={setUser}/>)}</div>
            <div>{user && user.username}</div>
        </div>
    );
};

export default Users;