
import {  WatchAppleAdded } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const WatchApple = ({ watchapples }) => {
    const { watchapple, setAppleWatchCart } = useContext(WatchAppleAdded)
    const handleDeletBtn = () => {
        const filterarray = watchapple.filter(watch => watch.id !== watchapples.id)
        setAppleWatchCart(filterarray)
        toast.error(`${watchapples.model} Removed`)
    }




    const handleQuantity = () => {
        const updateQuantity = watchapple.map(watch =>
            watch.id === watchapples.id ? {
                ...watch, quantity: (watch.quantity || 1) + 1
            } : watch
        )
        setAppleWatchCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = watchapple.map(watch =>
            watch.id === watchapples.id && watch.quantity > 1 ? {
                ...watch, quantity: watch.quantity - 1
            } : watch
        )
        setAppleWatchCart(updateQuantity)
    }



    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={watchapples.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{watchapples.model}</h1>
                        <h3>৳{watchapples.price}</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                    <div className='flex items-center gap-2'>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                        <p className='bg-neutral-300 px-2 rounded-md'>{watchapples.quantity || 1}</p>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchApple;