import React, {useEffect, useState} from 'react';
import {IDataDummy, IUser} from "../../../models/IUser";
import dummyService from "../../../services/api.dummyJSON.service";
import User from "../user/User";
import {useSearchParams} from "react-router-dom";
import PaginationComponent from "../../paginationComponent/PaginationComponent";
import './usersStyle.css';

const Users = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams({page: '1'})
    useEffect(() => {
        const page = query.get('page')
        if (page)
            dummyService.users.getAllUsers(+page).then((response: IDataDummy & { users: IUser[] }) => {
                setUsers(response.users)
            })
    }, [query]);
    return (
        <div>
            <div id={'usersHolder'}> {users.map((user: IUser) => <User key={user.id} user={user}/>)}</div>
            <hr/>
            <PaginationComponent/>
        </div>
    );
};

export default Users;