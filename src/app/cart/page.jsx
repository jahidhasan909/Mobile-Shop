'use client'
import IphoneBuy from '@/Components/AllByCards/IphoneBy/IphoneBuy';
import { IphoneAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const CartPage = () => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)

    console.log(iphoneCart, 'iphones');

    // let total = iphoneCart.reduce((total, item) => total + item.price, 0)

    const handleCheckOut = () => {
        setCartIphone([])
        toast.success('proceed to Checkout successful')
    }

    return (
        <div className='container mx-auto flex flex-col gap-3 my-10'>
            <h1 className='text-xl font-bold'>Your Cart</h1>
            {iphoneCart.length == 0 ? <div className='py-10 bg-neutral-200 rounded-md'>
                <img className='w-60 h-52  mx-auto' src="https://i.ibb.co.com/XkrcpC6R/5166615.png" alt="" />
                <p className='text-center text-neutral/50'>Your cart is empty</p>
            </div> : iphoneCart && iphoneCart.map(iphones => <IphoneBuy setCartIphone={setCartIphone} key={iphones.id} iphones={iphones}></IphoneBuy>)}

            {/* <div className='bg-black text-white flex justify-between w-3xl rounded-md p-5 font-bold'>
                <h2>Total</h2>
                <p>${total}</p>
            </div> */}
            <Button onClick={handleCheckOut} variant='outline' className={'text-white bg-black w-full rounded-md'}>proceed to Checkout</Button>
        </div>
    );
};

export default CartPage;