import { IphoneAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const IphoneBuy = ({ iphones }) => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)

    const handleDeletBtn = () => {
        const filterarray = iphoneCart.filter(iphoness => iphoness.id !== iphones.id)
        setCartIphone(filterarray)
        toast.error(`${iphones.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = iphoneCart.map(phone =>
            phone.id === iphones.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setCartIphone(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = iphoneCart.map(phone =>
            phone.id === iphones.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setCartIphone(updateQuantity)
    }





    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={iphones.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{iphones.model}</h1>
                    <h3>৳{iphones.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{iphones.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default IphoneBuy;