import { LaptopApple, LaptopHPAdded, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const LaptopHpBuy = ({ laptophp }) => {
     const { hPLaptop, setHpLaptop } = useContext(LaptopHPAdded)

    const handleDeletBtn = () => {
        const filterarray = hPLaptop.filter(lap => lap.id !== laptophp.id)
        setHpLaptop(filterarray)
        toast.error(`${laptophp.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={laptophp.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{laptophp.model}</h1>
                    <h3>{laptophp.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default LaptopHpBuy;