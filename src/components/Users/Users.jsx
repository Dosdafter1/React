import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import './Users.css';
import UsersContext from '../../contexts/UsersContext';

const Users = () => {
    const users = useContext(UsersContext)
    const [search,setSearch] =  useSearchParams();
    const [textSearch, setTextSearch] = useState(search.get('q') ?? '');

    
   
    const filterUsers = (user) => {
        if(search.get('q'))
            return new RegExp(search.get('q'), 'i').test(user.name)
        return user
    }
    const searchHandler = (e) => {
        setTextSearch(e.target.value)
        setSearch({q: e.target.value})
    }

   
    return (
        <div className='users'>
            <div className='users-list'>
                <input type="text" value={textSearch} onChange={searchHandler}/>

                {users.filter(filterUsers).map(user => <NavLink to={`/users/${user.id}`} key={user.id}>{user.name}</NavLink>)}
            </div>
            <Outlet/>
        </div>
    );
}

export default Users;
