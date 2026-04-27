import { KeyboardAddedCart, LaptopApple, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const KeyboardBuy = ({ keyboards }) => {
    const { KeyboardCart, setKeyboardCart } = useContext(KeyboardAddedCart)


    const handleDeletBtn = () => {
        const filterarray = KeyboardCart.filter(key => key.id !== keyboards.id)
        setKeyboardCart(filterarray)
        toast.error(`${keyboards.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = KeyboardCart.map(phone =>
            phone.id === keyboards.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setKeyboardCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = KeyboardCart.map(phone =>
            phone.id === keyboards.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setKeyboardCart(updateQuantity)
    }




    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={keyboards.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{keyboards.model}</h1>
                    <h3>৳{keyboards.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{keyboards.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default KeyboardBuy;