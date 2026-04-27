import { LaptopApple, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaptopAppleBuy = ({ applaptop }) => {
    const { appleLaptop, setAppleLaptop } = useContext(LaptopApple)

    const handleDeletBtn = () => {
        const filterarray = appleLaptop.filter(lap => lap.id !== applaptop.id)
        setAppleLaptop(filterarray)
        toast.error(`${applaptop.model} Removed`)
    }


       const handleQuantity = () => {
        const updateQuantity = appleLaptop.map(phone =>
            phone.id === applaptop.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setAppleLaptop(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = appleLaptop.map(phone =>
            phone.id === applaptop.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setAppleLaptop(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={applaptop.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{applaptop.model}</h1>
                    <h3>৳{applaptop.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{applaptop.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default LaptopAppleBuy;