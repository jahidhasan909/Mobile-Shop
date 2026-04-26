'use client'
import IphoneBuy from '@/Components/AllByCards/IphoneBy/IphoneBuy';
import SamsungBuy from '@/Components/AllByCards/Samsungby/SamsungBuy';
import { IphoneAddCart, SamsungAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const CartPage = () => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)
    const { samsungCart, setCartSamsung } = useContext(SamsungAddCart)



    let arrayCopy = [...iphoneCart, samsungCart]
    const handleCheckOut = () => {
        setCartIphone([])
        setCartSamsung([])
        toast.success('proceed to Checkout successful')
    }

    return (
        <div className='container mx-auto flex flex-col gap-3 my-10'>
            <h1 className='text-xl font-bold'>Your Cart</h1>
            {arrayCopy.length === 1 ? <div className='py-10 bg-neutral-200 rounded-md'>
                <Image width={240} height={200} className='w-60 h-52  mx-auto' src="https://i.ibb.co.com/XkrcpC6R/5166615.png" alt="" />
                <p className='text-center text-neutral/50'>Your cart is empty</p>
            </div> : <div className='space-y-3'>
                {iphoneCart.map(iphones => <IphoneBuy setCartIphone={setCartIphone} key={iphones.id} iphones={iphones}></IphoneBuy>)}
                {
                    samsungCart.map(samsung => <SamsungBuy key={samsung.id} samsung={samsung}></SamsungBuy>)
                }

            </div>

            }


            <Button onClick={handleCheckOut} variant='outline' className={'text-white bg-black w-full rounded-md'}>proceed to Checkout</Button>
        </div>
    );
};

export default CartPage;