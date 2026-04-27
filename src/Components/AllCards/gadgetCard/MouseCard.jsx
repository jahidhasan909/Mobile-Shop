"use client"
import { MouseAddedCart } from '@/context/ContextPages';
import { Button, Card } from '@heroui/react';
import { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const MouseCard = ({ mouses }) => {




    const { MouseCart, setMouseCart } = useContext(MouseAddedCart)
    const [clickCart, setClick] = useState(false)

    const handleAddedMouseCart = () => {
        setMouseCart([...MouseCart, mouses])
        toast.success(`${mouses.model} Add Cart Successful`)
        setClick(true)
    }



    return (
        <div>
            <Card className="bg-white rounded-md py-6 hover:shadow-md hover:shadow-neutral-200" variant="tertiary">
                <Card.Header className=' items-center  justify-center space-y-2'>
                    <img className='h-[200px]' src={mouses.img} alt="" />
                    <Card.Title className='line-clamp-1'>{mouses.model}</Card.Title>
                    <Card.Title className='font-bold'>৳{mouses.price}</Card.Title>
                </Card.Header>
                <Card.Content >
                    <div className='flex gap-2 items-center justify-center'>
                        <Button className=' rounded-md w-full' variant='outline'>View</Button>
                        <Button onClick={handleAddedMouseCart} isDisabled={clickCart ? true : false} className='rounded-md w-full bg-black text-white' variant='outline'>Add To Cart !</Button>
                    </div>
                </Card.Content>
            </Card>
        </div>
    );
};

export default MouseCard;