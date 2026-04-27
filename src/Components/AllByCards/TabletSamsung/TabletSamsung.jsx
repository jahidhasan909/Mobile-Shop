import {  SamsungTabletCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const TabletSamsungBuy = ({ samtab }) => {
    const { samsungTapletCart, setsamsungTabletCart } = useContext(SamsungTabletCart)
    const handleDeletBtn = () => {
        const filterarray = samsungTapletCart.filter(samtab => samtab.id !== samtab.id)
        setsamsungTabletCart(filterarray)
        toast.error(`${samtab.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = samsungTapletCart.map(tablet =>
            tablet.id === samtab.id ? {
                ...tablet, quantity: (tablet.quantity || 1) + 1
            } : tablet
        )
        setsamsungTabletCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = samsungTapletCart.map(tablet =>
            tablet.id === samtab.id && tablet.quantity > 1 ? {
                ...tablet, quantity: tablet.quantity - 1
            } : tablet
        )
        setsamsungTabletCart(updateQuantity)
    }

    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={samtab.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{samtab.model}</h1>
                        <h3>৳{samtab.price}</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                    <div className='flex items-center gap-2'>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                        <p className='bg-neutral-300 px-2 rounded-md'>{samtab.quantity || 1}</p>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletSamsungBuy;