"use client"
import { IphoneAddCart } from '@/context/ContextPages';
import { ChevronLeft } from '@gravity-ui/icons';
import { Button, Card } from '@heroui/react';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CardIphone = ({ iphones }) => {

    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)
    const [clickCart, setClick] = useState(false)

    const handleAddediphoneCart = () => {
        setCartIphone([...iphoneCart, iphones])
        toast.success(`${iphones.model} Add Cart Successful`)
        setClick(true)
    }
    console.log('cart:', iphoneCart);



    return (
        <div>
            <Card className="bg-white rounded-md py-6 hover:shadow-md hover:shadow-neutral-200" variant="tertiary">
                <Card.Header className=' items-center  justify-center space-y-2'>
                    <img className='h-[200px]' src={iphones.img} alt="" />
                    <Card.Title>{iphones.model}</Card.Title>
                    <Card.Title className='font-bold'>{iphones.price}</Card.Title>
                </Card.Header>
                <Card.Content >
                    <div className='flex gap-2 items-center justify-center'>
                        <Button className=' rounded-md w-full' variant='outline'>View</Button>
                        <Button isDisabled={clickCart ? true : false} onClick={handleAddediphoneCart} className='rounded-md w-full bg-black text-white' variant='outline'>Add To Cart !</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};

export default CardIphone;