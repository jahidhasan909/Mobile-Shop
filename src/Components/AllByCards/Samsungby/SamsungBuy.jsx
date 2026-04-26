import { IphoneAddCart, SamsungAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const SamsungBuy = ({ samsung}) => {
  const { samsungCart, setCartSamsung } = useContext(SamsungAddCart)

    const handleDeletBtn = () => {
        const filterarray = samsungCart.filter(sam => sam.id !== samsung.id)
        setCartSamsung(filterarray)
        toast.error(`${samsung.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={samsung.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{samsung.model}</h1>
                    <h3>{samsung.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default SamsungBuy;