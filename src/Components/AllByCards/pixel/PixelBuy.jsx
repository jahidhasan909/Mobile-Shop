import { GooglePixelAddCart, IphoneAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const PixelBuy = ({ pixel }) => {
    const { googlePixelCart, setCartGooglePixel } = useContext(GooglePixelAddCart)

    const handleDeletBtn = () => {
        const filterarray = googlePixelCart.filter(pix => pix.id !== pixel.id)
        setCartGooglePixel(filterarray)
        toast.error(`${pixel.model} Removed`)
    }


    return (
        <div className='bg-white px-5 flex items-center rounded-md shadow-md justify-between'>
            <div className='flex items-center'>
                <Image src={pixel.img} height={120} width={120} alt='iphone'></Image>
                <div>
                    <h1 className='font-semibold'>{pixel.model}</h1>
                    <h3>{pixel.price}</h3>
                </div>
            </div>
            <Button onClick={handleDeletBtn} variant='outline' className={'rounded-md'}>X</Button>
        </div>
    );
};

export default PixelBuy;