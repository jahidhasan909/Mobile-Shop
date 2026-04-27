'use client'
import HuaweiBuy from '@/Components/AllByCards/huaweiby/Huaweibuy';
import IphoneBuy from '@/Components/AllByCards/IphoneBy/IphoneBuy';
import KeyboardBuy from '@/Components/AllByCards/Keyboardby/KeyboardBuy';
import LaptopAppleBuy from '@/Components/AllByCards/LaptopApple/LaptopAppleBuy';
import LaptopHpBuy from '@/Components/AllByCards/LaptopHp/LaptopHpBuy';
import MotorolaBuy from '@/Components/AllByCards/motorolaby/MotorolaBuy';
import MouseBuy from '@/Components/AllByCards/Mouseby/MouseBuy';
import NothingBuy from '@/Components/AllByCards/nothingby/NothingBuy';
import PixelBuy from '@/Components/AllByCards/pixel/PixelBuy';
import RedmiBuy from '@/Components/AllByCards/redmiby/RedmiBuy';
import SamsungBuy from '@/Components/AllByCards/Samsungby/SamsungBuy';
import TabletIphoneBuy from '@/Components/AllByCards/TabletIphoneBuy/TabletIphoneBuy';
import TabletSamsungBuy from '@/Components/AllByCards/TabletSamsung/TabletSamsung';
import WatchApple from '@/Components/AllByCards/WatchAppleby/WatchAppleBuy';
import WatchBuySamsung from '@/Components/AllByCards/WatchSamsungby/WatchSamungBuy';
import { GooglePixelAddCart, HuaweiAddCart, IphoneAddCart, IphoneTabletCart, KeyboardAddedCart, LaptopApple, LaptopHPAdded, MotorolaAddCart, MouseAddedCart, NothingAddCart, RedmiAddCart, SamsungAddCart, SamsungTabletCart, WatchAppleAdded, WatchSamsungAdded } from '@/context/ContextPages';
import { Button } from '@heroui/react';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';



const CartPage = () => {
    const { iphoneCart, setCartIphone } = useContext(IphoneAddCart)
    const { samsungCart, setCartSamsung } = useContext(SamsungAddCart)
    const { huaweiCart, setCartHuawei } = useContext(HuaweiAddCart)
    const { googlePixelCart, setCartGooglePixel } = useContext(GooglePixelAddCart)
    const { motorolaCart, setMotorolaCart } = useContext(MotorolaAddCart)
    const { nothingCart, setNothingCart } = useContext(NothingAddCart)
    const { redmiCart, setRedmiCart } = useContext(RedmiAddCart)
    const { iphonTapletCart, setIphoneTabletCart } = useContext(IphoneTabletCart)
    const { samsungTapletCart, setsamsungTabletCart } = useContext(SamsungTabletCart)
    const { appleLaptop, setAppleLaptop } = useContext(LaptopApple)
    const { hPLaptop, setHpLaptop } = useContext(LaptopHPAdded)
    const { watchapple, setAppleWatchCart } = useContext(WatchAppleAdded)
    const { watchSamsung, setSamsungWatchCart } = useContext(WatchSamsungAdded)
    const { KeyboardCart, setKeyboardCart } = useContext(KeyboardAddedCart)
    const { MouseCart, setMouseCart } = useContext(MouseAddedCart)






    let arrayCopy = [
        { items: iphoneCart, id: Date.now() || [] },
        { items: samsungCart, id: Date.now() || [] },
        { items: huaweiCart, id: Date.now() || [] },
        { items: googlePixelCart, id: Date.now() || [] },
        { items: motorolaCart, id: Date.now() || [] },
        { items: nothingCart, id: Date.now() || [] },
        { items: redmiCart, id: Date.now() || [] },
        { items: iphonTapletCart, id: Date.now() || [] },
        { items: samsungTapletCart, id: Date.now() || [] },
        { items: appleLaptop, id: Date.now() || [] },
        { items: hPLaptop, id: Date.now() || [] },
        { items: watchapple, id: Date.now() || [] },
        { items: watchSamsung, id: Date.now() || [] },
        { items: KeyboardCart, id: Date.now() || [] },
        { items: MouseCart, id: Date.now() || [] }

    ].filter(cart => cart.items.length > 0)


    const totalOf = [

        MouseCart, KeyboardCart, watchSamsung, watchapple, hPLaptop, appleLaptop, samsungTapletCart, iphonTapletCart, redmiCart, nothingCart, motorolaCart, googlePixelCart, huaweiCart, samsungCart, iphoneCart
    ].flat().reduce((total, item) => {
        const price = Number(item.price) || 0
        const quantity = Number(item.quantity) || 1
        return total + (price * quantity)
    }, 0)



    const handleCheckOut = () => {
        setCartIphone([])
        setCartSamsung([])
        setCartHuawei([])
        setCartGooglePixel([])
        setMotorolaCart([])
        setNothingCart([])
        setRedmiCart([])
        setIphoneTabletCart([])
        setsamsungTabletCart([])
        setAppleLaptop([])
        setHpLaptop([])
        setAppleWatchCart([])
        setSamsungWatchCart([])
        setKeyboardCart([])
        setMouseCart([])
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
                {
                    motorolaCart.map(motorola => <MotorolaBuy key={motorola.id} motorola={motorola}></MotorolaBuy>)
                }
                {
                    nothingCart.map(nothing => <NothingBuy key={nothing.id} nothing={nothing}></NothingBuy>)
                }
                {
                    redmiCart.map(redmi => <RedmiBuy key={redmi.id} redmi={redmi}></RedmiBuy>)
                }
                {
                    iphonTapletCart.map(iphonetablet => <TabletIphoneBuy key={iphonetablet.id} iphonetablet={iphonetablet}></TabletIphoneBuy>)
                }
                {
                    samsungTapletCart.map(samtab => <TabletSamsungBuy key={samtab.id} samtab={samtab}></TabletSamsungBuy>)
                }
                {
                    appleLaptop.map(applaptop => <LaptopAppleBuy key={applaptop.id} applaptop={applaptop}></LaptopAppleBuy>)
                }

                {
                    hPLaptop.map(laptophp => <LaptopHpBuy key={laptophp.id} laptophp={laptophp}></LaptopHpBuy>)
                }
                {
                    watchapple.map(watchapples => <WatchApple key={watchapples.id} watchapples={watchapples}></WatchApple>)
                }
                {
                    watchSamsung.map(watchsSamung => <WatchBuySamsung key={watchsSamung.id} watchsSamung={watchsSamung}></WatchBuySamsung>)
                }
                {
                    KeyboardCart.map(keyboards => <KeyboardBuy key={keyboards.id} keyboards={keyboards}></KeyboardBuy>)
                }
                {
                    MouseCart.map(mouses => <MouseBuy key={mouses.id} mouses={mouses}></MouseBuy>)
                }
            </div>

            }
            <div className='bg-black text-white w-full flex justify-between w-3xl rounded-md p-2 font-bold'>
                <h2>Total</h2>
                <p>৳{totalOf}</p>
            </div>
            <div className='flex justify-center my-3'>
                <div className='flex bg-white items-center px-2 border gap-1 py-2'>
                    <Image className='' src='https://i.ibb.co.com/YFddC0mr/bkash-logo-mobile-banking-app-icon-transparent-background-free-png-removebg-preview.png' width={30} height={20} alt=''></Image>
                    <h2 className='font-semibold'>Bkash</h2>
                </div>
                <div className='flex bg-white items-center px-2 border gap-1 py-2'>
                    <Image width={30} height={30} src={'https://i.ibb.co.com/6Knmw7v/images.png'} alt=''></Image>
                    <h2 className='font-semibold'>Nagad</h2>
                </div>

                <div className='flex bg-white items-center px-2 border gap-1 py-2'>
                    <Image src={'https://i.ibb.co.com/yvX5RkC/dutch-bangla-rocket-logo-png-seeklogo-317692.png'} width={30} height={30} alt=''></Image>
                    <h2 className='font-semibold'>Rocket</h2>
                </div>
                <div className='flex bg-white items-center px-2 border gap-1 py-2'>
                    <Image src={'https://i.ibb.co.com/4Rb6Xc7S/visa-payment-card1873.jpg'} width={30} height={30} alt=''></Image>
                    <h2 className='font-semibold'>Visa</h2>
                </div>

            </div>
            <Button onClick={handleCheckOut} variant='outline' className={'text-white bg-black w-full rounded-md h-14 text-[17px] font-semibold'}>proceed to Checkout</Button>
        </div>
    );
};

export default CartPage;