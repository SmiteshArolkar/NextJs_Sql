import React from 'react';

const UserListItem = ({doc}) => {
    return (
        <div className='my-2'>
            {
                doc.email
            }
        </div>
    );
}

export default UserListItem;
