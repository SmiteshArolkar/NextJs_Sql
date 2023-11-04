import React, { useState } from 'react';
import Loader from './Loader';
import axios from 'axios';
import { useRouter } from 'next/router';

const UserListItem = ({doc}) => {

    const [isLoading,setLoading] = useState(false)
    const router = useRouter()

    const handleRevertSupplier = (emailId) => {
     
        const data = {
            email: emailId,
            role : "user"
        }


    if(data){
        axios.post("api/ChangeUserMode",data).then((response) => {
            console.log(response)
            router.reload()
        }).catch((error) => {
    
            console.log(error.message)
        })
    }
    }

    

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
         {
            doc.role === "supplier" && (
                <div>
                    {
                      <button className='bg-[#6979f8] text-white p-2 rounded-lg' onClick={() => {
                           handleRevertSupplier(doc.email)
                        }}>
                        Revert to user
                    </button>
                    }
                </div>
            )
         }
        </div>
    );
}

export default UserListItem;
