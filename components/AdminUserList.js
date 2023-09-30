import React, { useEffect, useState } from 'react';
import UserListItem from './UserListItem';
import axios from 'axios';

const AdminUserList = () => {

    const data = [
        {
            email : 'adshdas@mail.com',
            name: 'hdhaskds asd',
            phone : 'sadsdsad asd',
            role : 'supplier'
        },
        {
            email : 'adshdas@mail.com',
            name: 'hdhaskds asd',
            phone : 'sadsdsad asd',
            role : 'supplier'
        },
        {
            email : 'adshdas@mail.com',
            name: 'hdhaskds asd',
            phone : 'sadsdsad asd',
            role : 'supplier'
        },
        {
            email : 'adshdas@mail.com',
            name: 'hdhaskds asd',
            phone : 'sadsdsad asd',
            role : 'supplier'
        },
    
    ]

    const [users,setUsers] = useState([])

    useEffect(() => {

        const data = {}
        if(users.length === 0 )
        axios.post("api/getUsers",data).then((response) => {
            const docs = []
            response.data.data.forEach((doc) => {
                docs.push(doc)
            })
            setUsers(docs)
        })
    },[])
    return (
        <div className='h-2/3 lg:h-full  overflow-y-scroll my-6 '>
            {
                users && users.map((doc) => (
                    <div className='grid '>
                    <UserListItem doc={doc}></UserListItem>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminUserList;
