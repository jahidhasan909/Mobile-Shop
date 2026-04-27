import { IphoneTabletCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const TabletIphoneBuy = ({ iphonetablet }) => {
    const { iphonTapletCart, setIphoneTabletCart } = useContext(IphoneTabletCart)

    const handleDeletBtn = () => {
        const filterarray = iphonTapletCart.filter(iptab => iptab.id !== iphonetablet.id)
        setIphoneTabletCart(filterarray)
        toast.error(`${iphonetablet.model} Removed`)
    }


    const handleQuantity = () => {
        const updateQuantity = iphonTapletCart.map(tablet =>
            tablet.id === iphonetablet.id ? {
                ...tablet, quantity: (tablet.quantity || 1) + 1
            } : tablet
        )
        setIphoneTabletCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = iphonTapletCart.map(tablet =>
            tablet.id === iphonetablet.id && tablet.quantity > 1 ? {
                ...tablet, quantity: tablet.quantity - 1
            } : tablet
        )
        setIphoneTabletCart(updateQuantity)
    }



    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={iphonetablet.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{iphonetablet.model}</h1>
                        <h3>৳{iphonetablet.price}</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                    <div className='flex items-center gap-2'>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                        <p className='bg-neutral-300 px-2 rounded-md'>{iphonetablet.quantity || 1}</p>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabletIphoneBuy;