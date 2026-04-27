import { MotorolaAddCart, MouseAddedCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const MouseBuy = ({ mouses }) => {
    const { MouseCart, setMouseCart } = useContext(MouseAddedCart)

    const handleDeletBtn = () => {
        const filterarray = MouseCart.filter(mo => mo.id !== mouses.id)
        setMouseCart(filterarray)
        toast.error(`${mouses.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={mouses.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{mouses.model}</h1>
                    <h3>{mouses.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default MouseBuy;