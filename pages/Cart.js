import CartList from '@/components/CartList';
import React from 'react';

const Cart = () => {
    return (
        <div className='mt-8'>
            <div>
                <h1 className='text-center font-bold m-4 text-3xl mt-8'>MANAGE EVENTS</h1>
                <div className='flex justify-center mr-28   -mt-3 my-4  '>
        <div className="w-28  mx-2 h-0 border border-[#6979f8] "></div>
        </div>
         
                <div className='w-3/4 mx-auto border-2 bg-white rounded-xl border-opacity-30 p-1'>
                <CartList>

                </CartList>
                </div>
                
            </div>
        </div>
    );
}

export default Cart;
