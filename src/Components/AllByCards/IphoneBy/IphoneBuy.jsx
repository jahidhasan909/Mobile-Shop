import { IphoneAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';

const IphoneBuy = ({ iphones }) => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)

    const handleDeletBtn = () => {
        const filterarray = iphoneCart.filter(iphoness => iphoness.id !== iphones.id)
        setCartIphone(filterarray)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={iphones.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{iphones.model}</h1>
                    <h3>{iphones.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default IphoneBuy;