import { GooglePixelAddCart, IphoneAddCart, NothingAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const NothingBuy = ({ nothing }) => {
    const { nothingCart, setNothingCart } = useContext(NothingAddCart)

    const handleDeletBtn = () => {
        const filterarray = nothingCart.filter(noth => noth.id !== nothing.id)
        setNothingCart(filterarray)
        toast.error(`${nothing.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = nothingCart.map(phone =>
            phone.id === nothing.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setNothingCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = nothingCart.map(phone =>
            phone.id === nothing.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setNothingCart(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={nothing.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{nothing.model}</h1>
                    <h3>৳{nothing.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{nothing.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default NothingBuy;