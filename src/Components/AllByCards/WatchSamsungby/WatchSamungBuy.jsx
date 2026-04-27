
import { WatchSamsungAdded } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const WatchBuySamsung = ({ watchsSamung }) => {
    const { watchSamsung, setSamsungWatchCart } = useContext(WatchSamsungAdded)
    const handleDeletBtn = () => {
        const filterarray = watchSamsung.filter(watch => watch.id !== watchsSamung.id)
        setSamsungWatchCart(filterarray)
        toast.error(`${watchsSamung.model} Removed`)
    }

    const handleQuantity = () => {
        const updateQuantity = watchSamsung.map(watch =>
            watch.id === watchsSamung.id ? {
                ...watch, quantity: (watch.quantity || 1) + 1
            } : watch
        )
        setSamsungWatchCart(updateQuantity)
    }
    const handleQuantityMi = () => {
        const updateQuantity = watchSamsung.map(watch =>
            watch.id === watchsSamung.id && watch.quantity > 1 ? {
                ...watch, quantity: watch.quantity - 1
            } : watch
        )
        setSamsungWatchCart(updateQuantity)
    }


    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={watchsSamung.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{watchsSamung.model}</h1>
                        <h3>৳{watchsSamung.price}</h3>
                    </div>
                </div>
                <div className='flex flex-col items-center gap-2'>
                    <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                    <div className='flex items-center gap-2'>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantity}>+</Button>
                        <p className='bg-neutral-300 px-2 rounded-md'>{watchsSamung.quantity || 1}</p>
                        <Button className={' rounded-md font-bold'} variant='outline' onClick={handleQuantityMi}>-</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WatchBuySamsung;