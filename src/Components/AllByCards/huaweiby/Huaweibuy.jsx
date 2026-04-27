import { HuaweiAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const HuaweiBuy = ({ huawei }) => {
    const { huaweiCart, setCartHuawei } = useContext(HuaweiAddCart)

    const handleDeletBtn = () => {
        const filterarray = huaweiCart.filter(huw => huw.id !== huawei.id)
        setCartHuawei(filterarray)
        toast.error(`${huawei.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = huaweiCart.map(phone =>
            phone.id === huawei.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setCartHuawei(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = huaweiCart.map(phone =>
            phone.id === huawei.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone

        )
        setCartHuawei(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={huawei.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{huawei.model}</h1>
                    <h3>৳{huawei.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{huawei.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default HuaweiBuy;