
import { IphoneTabletCart, SamsungTabletCart, WatchAppleAdded } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const WatchApple = ({ watchapples }) => {
    const { watchapple, setAppleWatchCart } = useContext(WatchAppleAdded)
    const handleDeletBtn = () => {
        const filterarray = watchapple.filter(watch => watch.id !== watchapples.id)
        setAppleWatchCart(filterarray)
        toast.error(`${watchapples.model} Removed`)
    }

    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={watchapples.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{watchapples.model}</h1>
                        <h3>{watchapples.price}</h3>
                    </div>
                </div>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
            </div>
        </div>
    );
};

export default WatchApple;