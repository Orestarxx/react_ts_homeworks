import React, {useEffect, useState} from 'react';
import {IDataDummy, IUser} from "../../../models/IUser";
import dummyService from "../../../services/api.dummyJSON.service";
import User from "../user/User";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import './usersStyle.css';

const Users = () => {

    const [users, setUsers] = useState<IDataDummy & {users:IUser[]}>({
        skip:0,
        total:0,
        limit:0,
        users:[],
        next:false,
        prev:false
    });
    const [query] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page')
        if (page)
            dummyService.users.getAllUsers(+page).then((response: IDataDummy & { users: IUser[] }) => {
                setUsers(response)

            })
    }, [query]);
    return (
        <div>
            <div id={'usersHolder'}> {users.users.map((user: IUser) => <User key={user.id} user={user}/>)}</div>
            <hr/>
            <PaginationComponent data={{next:users.next,prev:users.prev}}/>
        </div>
    );
};

export default Users;