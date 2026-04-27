import { RedmiAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const RedmiBuy = ({ redmi }) => {
    const { redmiCart, setRedmiCart } = useContext(RedmiAddCart)

    const handleDeletBtn = () => {
        const filterarray = redmiCart.filter(mi => mi.id !== redmi.id)
        setRedmiCart(filterarray)
        toast.error(`${redmi.model} Removed`)
    }


    const handleQuantity = () => {
        const updateQuantity = redmiCart.map(phone =>
            phone.id === redmi.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setRedmiCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = redmiCart.map(phone =>
            phone.id === redmi.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setRedmiCart(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={redmi.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{redmi.model}</h1>
                    <h3>৳{redmi.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{redmi.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default RedmiBuy;