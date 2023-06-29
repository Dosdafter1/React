import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UsersContext from '../../contexts/UsersContext';

const UserInfo = () => {
    const users = useContext(UsersContext);
    const {id} = useParams()
    const [user, setUser] = useState({});
    const getUser = async () => {
        //const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id);
        //const result = await response.json();
        //const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id)
        //setUser(response.data)
        setUser(users.find(user => user.id.toString() === id.toString() ))
    }
    useEffect(()=>{
        getUser();
    },[id, users]);
    return (
        <div>
            <h1>{user?.name}</h1>
            {user?.email}
        </div>
    );
}

export default UserInfo;
