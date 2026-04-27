import { KeyboardAddedCart, LaptopApple, MotorolaAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const KeyboardBuy = ({ keyboards }) => {
    const { KeyboardCart, setKeyboardCart } = useContext(KeyboardAddedCart)


    const handleDeletBtn = () => {
        const filterarray = KeyboardCart.filter(key => key.id !== keyboards.id)
        setKeyboardCart(filterarray)
        toast.error(`${keyboards.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={keyboards.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{keyboards.model}</h1>
                    <h3>{keyboards.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default KeyboardBuy;