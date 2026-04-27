"use client"
import { SamsungAddCart } from '@/context/ContextPages';
import { Button, Card } from '@heroui/react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const SamsungCard = ({ samsungs }) => {
    const { samsungCart, setCartSamsung } = useContext(SamsungAddCart)
    const [clickCart, setClick] = useState(false)

    const handleAddedSamsungCart = () => {
        setCartSamsung([...samsungCart, samsungs])
        toast.success(`${samsungs.model} Add Cart Successful`)
        setClick(true)
    }
    return (
        <div>
            <Card className="bg-white rounded-md py-6 hover:shadow-md hover:shadow-neutral-200" variant="tertiary">
                <Card.Header className=' items-center  justify-center space-y-2'>
                    <img className='h-[200px]' src={samsungs.img} alt="" />
                    <Card.Title>{samsungs.model}</Card.Title>
                    <Card.Title className='font-bold'>৳{samsungs.price}</Card.Title>
                </Card.Header>
                <Card.Content >
                    <div className='flex gap-2 items-center justify-center'>
                        <Button className=' rounded-md w-full' variant='outline'>View</Button>
                        <Button isDisabled={clickCart ? true : false} onClick={handleAddedSamsungCart} className='rounded-md w-full bg-black text-white' variant='outline'>Add To Cart !</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};

export default SamsungCard;