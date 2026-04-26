import { LaptopApple, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaptopAppleBuy = ({ applaptop }) => {
    const { appleLaptop, setAppleLaptop } = useContext(LaptopApple)

    const handleDeletBtn = () => {
        const filterarray = appleLaptop.filter(lap => lap.id !== applaptop.id)
        setAppleLaptop(filterarray)
        toast.error(`${applaptop.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={applaptop.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{applaptop.model}</h1>
                    <h3>{applaptop.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default LaptopAppleBuy;