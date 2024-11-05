import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {usersService} from "../../services/usersService/usersService";
import {IUser} from "../../models/IUser";
import {getAllUsers} from "../../redux/usersSlice/usersSlice";
import User from "./User";

const Users = () => {

    const userSliceState = useAppSelector(
        (state) =>state.usersSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
      usersService.users.getAllUsers().then((response:IUser[]) =>{
          dispatch(getAllUsers(response));
      })
    }, [dispatch]);
    useEffect(() => {

    }, [dispatch]);
    return (
        <div>
            <div>
                {userSliceState?.users.map((user:IUser) =>
                    <User user={user} key={user.id} />)}
            </div>
        </div>
    );
};

export default Users;