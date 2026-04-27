import { GooglePixelAddCart, IphoneAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PixelBuy = ({ pixel }) => {
    const { googlePixelCart, setCartGooglePixel } = useContext(GooglePixelAddCart)

    const handleDeletBtn = () => {
        const filterarray = googlePixelCart.filter(pix => pix.id !== pixel.id)
        setCartGooglePixel(filterarray)
        toast.error(`${pixel.model} Removed`)
    }



    const handleQuantity = () => {
        const updateQuantity = googlePixelCart.map(phone =>
            phone.id === pixel.id ? {
                ...phone, quantity: (phone.quantity || 1) + 1
            } : phone
        )
        setCartGooglePixel(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = googlePixelCart.map(phone =>
            phone.id === pixel.id && phone.quantity > 1 ? {
                ...phone, quantity: phone.quantity - 1
            } : phone
        )
        setCartGooglePixel(updateQuantity)
    }



    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={pixel.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{pixel.model}</h1>
                    <h3>৳{pixel.price}</h3>
                </div>
            </div>
            <div className='flex flex-col items-center gap-2'>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                <div className='flex items-center gap-2'>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                    <p className='bg-neutral-300 px-2 rounded-md'>{pixel.quantity || 1}</p>
                    <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                </div>
            </div>
        </div>
    );
};

export default PixelBuy;