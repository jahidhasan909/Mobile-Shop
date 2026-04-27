
import {  WatchSamsungAdded } from '@/context/ContextPages';
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

    return (
        <div>
            <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                <div className='flex items-center'>
                    <Image src={watchsSamung.img} height={120} width={120} alt='iphone'></Image>
                    <div>
                        <h1 className='font-semibold'>{watchsSamung.model}</h1>
                        <h3>{watchsSamung.price}</h3>
                    </div>
                </div>
                <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
            </div>
        </div>
    );
};

export default WatchBuySamsung;