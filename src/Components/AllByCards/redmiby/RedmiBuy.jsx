import {  RedmiAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const RedmiBuy = ({ redmi }) => {
    const { redmiCart, setRedmiCart } = useContext(RedmiAddCart)

    const handleDeletBtn = () => {
        const filterarray = redmiCart.filter(mi => mi.id !== redmi.id)
        setRedmiCart(filterarray)
        toast.error(`${redmi.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={redmi.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{redmi.model}</h1>
                    <h3>{redmi.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default RedmiBuy;