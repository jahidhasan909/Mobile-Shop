import { GooglePixelAddCart, IphoneAddCart, NothingAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const NothingBuy = ({ nothing }) => {
    const { nothingCart, setNothingCart } = useContext(NothingAddCart)

    const handleDeletBtn = () => {
        const filterarray = nothingCart.filter(noth => noth.id !== nothing.id)
        setNothingCart(filterarray)
        toast.error(`${nothing.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={nothing.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{nothing.model}</h1>
                    <h3>{nothing.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default NothingBuy;