import React from 'react';
import UserListItem from './UserListItem';

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
    return (
        <div>
            {
                data && data.map((doc) => (
                    <div className='grid '>
                    <UserListItem doc={doc}></UserListItem>
                    </div>
                ))
            }
        </div>
    );
}

export default AdminUserList;
