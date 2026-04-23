import { Button, Card } from '@heroui/react';
import React from 'react';

const Samsungtab = ({samsungtabs}) => {
    return (
        <div>
            <Card className="bg-white rounded-md py-6 hover:shadow-md hover:shadow-neutral-200" variant="tertiary">
                            <Card.Header className=' items-center  justify-center space-y-2'>
                                <img className='h-[200px]' src={samsungtabs.img} alt="" />
                                <Card.Title>{samsungtabs.model}</Card.Title>
                                <Card.Title className='font-bold'>{samsungtabs.price}</Card.Title>
                            </Card.Header>
                            <Card.Content >
                                <div className='flex gap-2 items-center justify-center'>
                                    <Button className=' rounded-md w-full' variant='outline'>View</Button>
                                    <Button className='rounded-md w-full bg-black text-white' variant='outline'>Add To Cart !</Button>
                                </div>
                            </Card.Content>
                        </Card>
        </div>
    );
};

export default Samsungtab;