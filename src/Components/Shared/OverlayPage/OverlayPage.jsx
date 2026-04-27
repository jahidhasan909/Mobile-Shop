"use client"


import { Button } from '@heroui/react';

import { createPortal } from 'react-dom';

const OverlayPage = ({ closeOverlay }) => {



    return createPortal(
        <div className=' fixed inset-0 z-[9999] flex mt-20 justify-center top-0'>
            <div className='bg-white w-[1000px] h-[400px] shadow border rounded-md '>
                <div className='flex items-center justify-between p-2'>
                    <h1 className='px-3 pt-3 py-1 font-semibold '>products</h1>
                    <Button onClick={closeOverlay} variant='outline' className={'rounded-md bg-red-300'}>X</Button>
                </div>
                <div className='border-b my-2'></div>
                <div className="grid grid-cols-4 gap-4 my-5">
                </div>
            </div>

        </div>,
        document.body
    );
};

export default OverlayPage;