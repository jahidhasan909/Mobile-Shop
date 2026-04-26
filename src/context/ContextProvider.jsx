"use client"
import React, { useEffect, useState } from 'react';
import { GooglePixelAddCart, HuaweiAddCart, IphoneAddCart, IphoneTabletCart, LaptopApple, MotorolaAddCart, NothingAddCart, RedmiAddCart, SamsungAddCart, SamsungTabletCart } from './ContextPages';


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

    }, [iphoneCart, samsungCart, huaweiCart, googlePixelCart,
        motorolaCart, nothingCart, redmiCart, iphonTapletCart, samsungTapletCart, appleLaptop])




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
                                            {children}

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