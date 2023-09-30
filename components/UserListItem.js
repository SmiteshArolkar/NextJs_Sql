import React from 'react';

const UserListItem = ({doc}) => {
    return (
        <div className='my-2  border   p-4 rounded-lg shadow-lg flex justify-between font-semibold mx-2 '>
         <div className=''>
         <h1>     {
                doc.email
            } </h1>
            <h1 className='font-normal text-sm'>
                {doc.name}
                <h1>
                    {doc.role}
                </h1>
            </h1>
         </div>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill='#6979f8'><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/></svg>
        </div>
    );
}

export default UserListItem;
