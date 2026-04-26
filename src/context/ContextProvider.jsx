"use client"
import React, { useEffect, useState } from 'react';
import { GooglePixelAddCart, HuaweiAddCart, IphoneAddCart, SamsungAddCart } from './ContextPages';


const ContextProvider = ({ children }) => {

    const [iphoneCart, setCartIphone] = useState([])
    const [samsungCart, setCartSamsung] = useState([])
    const [huaweiCart, setCartHuawei] = useState([])
    const [googlePixelCart, setCartGooglePixel] = useState([])

    useEffect(() => {
        const saveIphone = localStorage.getItem('iphone_Cart')
        const saveSamsung = localStorage.getItem('samsung_Cart')
        const saveHuawei = localStorage.getItem('huawei_Cart')
        const saveGooglePixel = localStorage.getItem('pixel_Cart')
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
    }, [])

    useEffect(() => {
        localStorage.setItem('iphone_Cart', JSON.stringify(iphoneCart))
        localStorage.setItem('samsung_Cart', JSON.stringify(samsungCart))
        localStorage.setItem('huawei_Cart', JSON.stringify(huaweiCart))
        localStorage.setItem('pixel_Cart', JSON.stringify(googlePixelCart))

    }, [iphoneCart, samsungCart, huaweiCart, googlePixelCart])




    return <IphoneAddCart.Provider value={{ iphoneCart, setCartIphone }}>
        <SamsungAddCart.Provider value={{ samsungCart, setCartSamsung }}>
            <HuaweiAddCart.Provider value={{ huaweiCart, setCartHuawei }}>
                <GooglePixelAddCart.Provider value={{ googlePixelCart, setCartGooglePixel }}>
                    {children}
                </GooglePixelAddCart.Provider>
            </HuaweiAddCart.Provider>
        </SamsungAddCart.Provider>
    </IphoneAddCart.Provider>
};

export default ContextProvider;