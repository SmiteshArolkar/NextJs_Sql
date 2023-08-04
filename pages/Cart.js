import CartList from '@/components/CartList';
import React from 'react';

const Cart = () => {
    return (
        <div className='mt-8'>
            <div>
                <h1 className='text-center font-bold m-4 text-3xl mt-8'>YOUR REQUEST</h1>
         
                <div className='w-3/4 mx-auto border-2 bg-white border-red-400 rounded-xl border-opacity-30 p-1'>
                <CartList>

                </CartList>
                </div>
                
            </div>
        </div>
    );
}

export default Cart;
