"use client"
import { GooglePixelAddCart } from '@/context/ContextPages';
import { Button, Card } from '@heroui/react';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const PixelCard = ({ pixels }) => {


    const { googlePixelCart, setCartGooglePixel } = useContext(GooglePixelAddCart)
    const [clickCart, setClick] = useState(false)

    const handleAddedpixelCart = () => {
        setCartGooglePixel([...googlePixelCart, pixels])
        toast.success(`${pixels.model} Add Cart Successful`)
        setClick(true)
    }



    return (
        <div>
            <Card className="bg-white rounded-md py-6 hover:shadow-md hover:shadow-neutral-200" variant="tertiary">
                <Card.Header className=' items-center  justify-center space-y-2'>
                    <img className='h-[200px]' src={pixels.img} alt="" />
                    <Card.Title>{pixels.model}</Card.Title>
                    <Card.Title className='font-bold'>{pixels.price}</Card.Title>
                </Card.Header>
                <Card.Content >
                    <div className='flex gap-2 items-center justify-center'>
                        <Button className=' rounded-md w-full' variant='outline'>View</Button>
                        <Button isDisabled={clickCart ? true : false} onClick={handleAddedpixelCart} className='rounded-md w-full bg-black text-white' variant='outline'>Add To Cart !</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};

export default PixelCard;