import { MotorolaAddCart, MouseAddedCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const MouseBuy = ({ mouses }) => {
    const { MouseCart, setMouseCart } = useContext(MouseAddedCart)

    const handleDeletBtn = () => {
        const filterarray = MouseCart.filter(mo => mo.id !== mouses.id)
        setMouseCart(filterarray)
        toast.error(`${mouses.model} Removed`)
    }


    const handleQuantity = () => {
        const updateQuantity = MouseCart.map(phone =>
            phone.id === mouses.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setMouseCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = MouseCart.map(phone =>
            phone.id === mouses.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setMouseCart(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={mouses.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{mouses.model}</h1>
                    <h3>৳{mouses.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{mouses.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default MouseBuy;