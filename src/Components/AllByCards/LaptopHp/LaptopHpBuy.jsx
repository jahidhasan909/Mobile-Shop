import { LaptopApple, LaptopHPAdded, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaptopHpBuy = ({ laptophp }) => {
    const { hPLaptop, setHpLaptop } = useContext(LaptopHPAdded)

    const handleDeletBtn = () => {
        const filterarray = hPLaptop.filter(lap => lap.id !== laptophp.id)
        setHpLaptop(filterarray)
        toast.error(`${laptophp.model} Removed`)
    }

    const handleQuantity = () => {
        const updateQuantity = hPLaptop.map(phone =>
            phone.id === laptophp.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setHpLaptop(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = hPLaptop.map(phone =>
            phone.id === laptophp.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setHpLaptop(updateQuantity)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={laptophp.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{laptophp.model}</h1>
                    <h3>৳{laptophp.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{laptophp.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default LaptopHpBuy;