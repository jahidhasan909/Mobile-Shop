import { IphoneTabletCart, SamsungTabletCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const TabletSamsungBuy = ({ samtab }) => {
    const { samsungTapletCart, setsamsungTabletCart } = useContext(SamsungTabletCart)
    const handleDeletBtn = () => {
        const filterarray = samsungTapletCart.filter(samtab => samtab.id !== samtab.id)
        setsamsungTabletCart(filterarray)
        toast.error(`${samtab.model} Removed`)
    }

    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={samtab.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{samtab.model}</h1>
                        <h3>{samtab.price}</h3>
                    </div>
                </div>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
            </div>
        </div>
    );
};

export default TabletSamsungBuy;