"use client"
import React, { useEffect, useState } from 'react';
import { GooglePixelAddCart, HuaweiAddCart, IphoneAddCart, IphoneTabletCart, KeyboardAddedCart, LaptopApple, LaptopHPAdded, MotorolaAddCart, MouseAddedCart, NothingAddCart, RedmiAddCart, SamsungAddCart, SamsungTabletCart, WatchAppleAdded, WatchSamsungAdded } from './ContextPages';
import HpLaptop from '@/app/laptop/hp/page';
import HpLaptopCard from '@/Components/AllCards/laptopCard/HpLaptopCard';
import { Watch } from 'react-hook-form';


const ContextProvider = ({ children }) => {

    const [iphoneCart, setCartIphone] = useState([])
    const [samsungCart, setCartSamsung] = useState([])
    const [huaweiCart, setCartHuawei] = useState([])
    const [googlePixelCart, setCartGooglePixel] = useState([])
    const [motorolaCart, setMotorolaCart] = useState([])
    const [nothingCart, setNothingCart] = useState([])
    const [redmiCart, setRedmiCart] = useState([])
    const [iphonTapletCart, setIphoneTabletCart] = useState([])
    const [samsungTapletCart, setsamsungTabletCart] = useState([])
    const [appleLaptop, setAppleLaptop] = useState([])
    const [hPLaptop, setHpLaptop] = useState([])
    const [watchapple, setAppleWatchCart] = useState([])
    const [watchSamsung, setSamsungWatchCart] = useState([])
    const [KeyboardCart, setKeyboardCart] = useState([])
    const [MouseCart, setMouseCart] = useState([])

    useEffect(() => {
        const saveIphone = localStorage.getItem('iphone_Cart')
        const saveSamsung = localStorage.getItem('samsung_Cart')
        const saveHuawei = localStorage.getItem('huawei_Cart')
        const saveGooglePixel = localStorage.getItem('pixel_Cart')
        const saveMotorola = localStorage.getItem('motorola_Cart')
        const saveNothing = localStorage.getItem('nothing_Cart')
        const saveRedmi = localStorage.getItem('redmi_Cart')
        const saveIphoneTablet = localStorage.getItem('iphonetablet_Cart')
        const saveSamsungTablet = localStorage.getItem('samsungtablet_Cart')
        const saveAppleLaptop = localStorage.getItem('laptopapple_Cart')
        const saveKeyBoard = localStorage.getItem('keyboard_Cart')
        const saveMouse = localStorage.getItem('mouse_Cart')


        const saveHpLaptop = localStorage.getItem('hplaptop_Cart')
        const saveWatchApple = localStorage.getItem('watchapple_Cart')
        const saveWatchSamsung = localStorage.getItem('watchsamsung_Cart')


        if (saveIphone) {
            setCartIphone(JSON.parse(saveIphone))
        }
        if (saveSamsung) {
            setCartSamsung(JSON.parse(saveSamsung))
        }
        if (saveHuawei) {
            setCartHuawei(JSON.parse(saveHuawei))
        }
        if (saveGooglePixel) {

            setCartGooglePixel(JSON.parse(saveGooglePixel))
        }
        if (saveMotorola) {
            setMotorolaCart(JSON.parse(saveMotorola))
        }
        if (saveNothing) {
            setNothingCart(JSON.parse(saveNothing))
        }
        if (saveRedmi) {
            setRedmiCart(JSON.parse(saveRedmi))
        }
        if (saveIphoneTablet) {
            setIphoneTabletCart(JSON.parse(saveIphoneTablet))
        }
        if (saveSamsungTablet) {
            setsamsungTabletCart(JSON.parse(saveSamsungTablet))
        }
        if (saveAppleLaptop) {
            setAppleLaptop(JSON.parse(saveAppleLaptop))
        }

        if (saveHpLaptop) {
            setHpLaptop(JSON.parse(saveHpLaptop))
        }
        if (saveWatchApple) {
            setAppleWatchCart(JSON.parse(saveWatchApple))
        }
        if (saveWatchSamsung) {
            setSamsungWatchCart(JSON.parse(saveWatchSamsung))
        }
        if (saveKeyBoard) {
            setKeyboardCart(JSON.parse(saveKeyBoard))
        }
        if (saveMouse) {
            setMouseCart(JSON.parse(saveMouse))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('iphone_Cart', JSON.stringify(iphoneCart))
        localStorage.setItem('samsung_Cart', JSON.stringify(samsungCart))
        localStorage.setItem('huawei_Cart', JSON.stringify(huaweiCart))
        localStorage.setItem('pixel_Cart', JSON.stringify(googlePixelCart))
        localStorage.setItem('motorola_Cart', JSON.stringify(motorolaCart))
        localStorage.setItem('nothing_Cart', JSON.stringify(nothingCart))
        localStorage.setItem('redmi_Cart', JSON.stringify(redmiCart))
        localStorage.setItem('iphonetablet_Cart', JSON.stringify(iphonTapletCart))
        localStorage.setItem('samsungtablet_Cart', JSON.stringify(samsungTapletCart))
        localStorage.setItem('laptopapple_Cart', JSON.stringify(appleLaptop))
        localStorage.setItem('hplaptop_Cart', JSON.stringify(hPLaptop))
        localStorage.setItem('watchapple_Cart', JSON.stringify(watchapple))
        localStorage.setItem('watchsamsung_Cart', JSON.stringify(watchSamsung))
        localStorage.setItem('keyboard_Cart', JSON.stringify(KeyboardCart))
        localStorage.setItem('mouse_Cart', JSON.stringify(MouseCart))

    }, [iphoneCart, samsungCart, huaweiCart, googlePixelCart,
        motorolaCart, nothingCart, redmiCart, iphonTapletCart,
        samsungTapletCart, appleLaptop, hPLaptop, watchapple, watchSamsung, KeyboardCart, MouseCart])




    return <IphoneAddCart.Provider value={{ iphoneCart, setCartIphone }}>
        <SamsungAddCart.Provider value={{ samsungCart, setCartSamsung }}>
            <HuaweiAddCart.Provider value={{ huaweiCart, setCartHuawei }}>
                <GooglePixelAddCart.Provider value={{ googlePixelCart, setCartGooglePixel }}>
                    <MotorolaAddCart.Provider value={{ motorolaCart, setMotorolaCart }}>
                        <NothingAddCart.Provider value={{ nothingCart, setNothingCart }}>
                            <RedmiAddCart.Provider value={{ redmiCart, setRedmiCart }}>
                                <IphoneTabletCart.Provider value={{ iphonTapletCart, setIphoneTabletCart }}>
                                    <SamsungTabletCart.Provider value={{ samsungTapletCart, setsamsungTabletCart }}>
                                        <LaptopApple.Provider value={{ appleLaptop, setAppleLaptop }}>
                                            <LaptopHPAdded.Provider value={{ hPLaptop, setHpLaptop }}>
                                                <WatchAppleAdded.Provider value={{ watchapple, setAppleWatchCart }}>
                                                    <WatchSamsungAdded.Provider value={{ watchSamsung, setSamsungWatchCart }}>
                                                        <KeyboardAddedCart.Provider value={{ KeyboardCart, setKeyboardCart }}>
                                                            <MouseAddedCart.Provider value={{ MouseCart, setMouseCart }}>
                                                                {children}
                                                            </MouseAddedCart.Provider>
                                                        </KeyboardAddedCart.Provider>
                                                    </WatchSamsungAdded.Provider>
                                                </WatchAppleAdded.Provider>
                                            </LaptopHPAdded.Provider>
                                        </LaptopApple.Provider>
                                    </SamsungTabletCart.Provider>
                                </IphoneTabletCart.Provider>
                            </RedmiAddCart.Provider>
                        </NothingAddCart.Provider>
                    </MotorolaAddCart.Provider>
                </GooglePixelAddCart.Provider>
            </HuaweiAddCart.Provider>
        </SamsungAddCart.Provider>
    </IphoneAddCart.Provider>
};

export default ContextProvider;