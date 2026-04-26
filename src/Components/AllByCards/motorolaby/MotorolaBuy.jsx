import {  MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const MotorolaBuy = ({ motorola }) => {
    const { motorolaCart, setMotorolaCart } = useContext(MotorolaAddCart)

    const handleDeletBtn = () => {
        const filterarray = motorolaCart.filter(moto => moto.id !== motorola.id)
        setMotorolaCart(filterarray)
        toast.error(`${motorola.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={motorola.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{motorola.model}</h1>
                    <h3>{motorola.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default MotorolaBuy;