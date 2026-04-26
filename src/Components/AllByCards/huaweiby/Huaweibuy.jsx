import { HuaweiAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const HuaweiBuy = ({ huawei }) => {
       const { huaweiCart, setCartHuawei } = useContext(HuaweiAddCart)

    const handleDeletBtn = () => {
        const filterarray = huaweiCart.filter(huw => huw.id !== huawei.id)
        setCartHuawei(filterarray)
        toast.error(`${huawei.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={huawei.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{huawei.model}</h1>
                    <h3>{huawei.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default HuaweiBuy;