"use client"
import React, { useEffect, useState } from 'react';
import { IphoneAddCart, SamsungAddCart } from './ContextPages';


const ContextProvider = ({ children }) => {

    const [iphoneCart, setCartIphone] = useState([])
    const [samsungCart, setCartSamsung] = useState([])

    useEffect(() => {
        const saveIphone = localStorage.getItem('iphone_Cart')
        const saveSamsung = localStorage.getItem('samsung_Cart')
        if (saveIphone) {
            setCartIphone(JSON.parse(saveIphone))
        }
        if (saveSamsung) {
            setCartSamsung(JSON.parse(saveSamsung))
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('iphone_Cart', JSON.stringify(iphoneCart))
        localStorage.setItem('samsung_Cart', JSON.stringify(samsungCart))

    }, [iphoneCart, samsungCart])




    return <IphoneAddCart.Provider value={{ iphoneCart, setCartIphone }}>
        <SamsungAddCart.Provider value={{ samsungCart, setCartSamsung }}>
            {children}
        </SamsungAddCart.Provider>
    </IphoneAddCart.Provider>
};

export default ContextProvider;