import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {jsonPlaceholderService} from "../../services/usersService/usersService";
import {IUser} from "../../models/IUser";
import {getAllUsers, getSingleUser} from "../../redux/usersSlice/usersSlice";
import User from "./User";

const Users = () => {
    const [id, setId] = useState<number|null>(null);
    const userSliceState = useAppSelector(
        (state) =>state.userSlice);
    const dispatch = useAppDispatch();
    useEffect(() => {
      jsonPlaceholderService.users.getAllUsers().then((response:IUser[]) =>{
          dispatch(getAllUsers(response));
      })
    }, [dispatch]);
    useEffect(() => {
       if(id){
           dispatch(getSingleUser(id))
       }
    }, [id,dispatch]);
    return (
        <div>
            <div>
                {userSliceState?.users.map((user:IUser) =>
                    <User user={user} key={user.id} getId={setId}/>)}
            </div>
            <div>
                { userSliceState?.user && userSliceState.user && userSliceState?.user.id}
            </div>

        </div>
    );
};

export default Users;