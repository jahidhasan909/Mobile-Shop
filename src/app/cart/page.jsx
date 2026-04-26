'use client'
import HuaweiBuy from '@/Components/AllByCards/huaweiby/Huaweibuy';
import IphoneBuy from '@/Components/AllByCards/IphoneBy/IphoneBuy';
import PixelBuy from '@/Components/AllByCards/pixel/PixelBuy';
import SamsungBuy from '@/Components/AllByCards/Samsungby/SamsungBuy';
import { GooglePixelAddCart, HuaweiAddCart, IphoneAddCart, SamsungAddCart } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const CartPage = () => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)
    const { samsungCart, setCartSamsung } = useContext(SamsungAddCart)
    const { huaweiCart, setCartHuawei } = useContext(HuaweiAddCart)
    const { googlePixelCart, setCartGooglePixel } = useContext(GooglePixelAddCart)



    let arrayCopy = [
        { phone: iphoneCart, id: Date.now() || [] },
        { phone: samsungCart, id: Date.now() || [] },
        { phone: huaweiCart, id: Date.now() || [] },
        { phone: googlePixelCart, id: Date.now() || [] }
    ].filter(cart => cart.phone.length > 0)

    const handleCheckOut = () => {
        setCartIphone([])
        setCartSamsung([])
        setCartHuawei([])
        setCartGooglePixel([])
        toast.success('proceed to Checkout successful')
    }

    return (
        <div className='container mx-auto flex flex-col gap-3 my-10'>
            <h1 className='text-xl font-bold'>Your Cart</h1>
            {arrayCopy.length === 0 ? <div className='py-10 bg-neutral-200 rounded-md'>
                <Image width={240} height={200} className='w-60 h-52  mx-auto' src="https://i.ibb.co.com/XkrcpC6R/5166615.png" alt="" />
                <p className='text-center text-neutral/50'>Your cart is empty</p>
            </div> : <div className='space-y-3'>
                {iphoneCart.map(iphones => <IphoneBuy setCartIphone={setCartIphone} key={iphones.id} iphones={iphones}></IphoneBuy>)}
                {
                    samsungCart.map(samsung => <SamsungBuy key={samsung.id} samsung={samsung}></SamsungBuy>)
                }
                {
                    huaweiCart.map(huawei => <HuaweiBuy key={huawei.id} huawei={huawei}></HuaweiBuy>)
                }
                {
                    googlePixelCart.map(pixel => <PixelBuy key={pixel.id} pixel={pixel}></PixelBuy>)
                }

            </div>

            }


            <Button onClick={handleCheckOut} variant='outline' className={'text-white bg-black w-full rounded-md'}>proceed to Checkout</Button>
        </div>
    );
};

export default CartPage;