import {  IphoneTabletCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';


const TabletIphoneBuy = ({iphonetablet}) => {
      const { iphonTapletCart, setIphoneTabletCart } = useContext(IphoneTabletCart)
    
        const handleDeletBtn = () => {
            const filterarray = iphonTapletCart.filter(iptab => iptab.id !== iphonetablet.id)
            setIphoneTabletCart(filterarray)
            toast.error(`${iphonetablet.model} Removed`)
        }
    
    return (
        <div>
              <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
                        <div className='flex items-center'>
                            <Image src={iphonetablet.img} height={120} width={120} alt='iphone'></Image>
                            <div>
                                <h1 className='font-semibold'>{iphonetablet.model}</h1>
                                <h3>{iphonetablet.price}</h3>
                            </div>
                        </div>
                        <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
                    </div>
        </div>
    );
};

export default TabletIphoneBuy;