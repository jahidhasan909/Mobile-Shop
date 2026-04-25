"use client"
import React, { useEffect, useState } from 'react';
import { IphoneAddCart } from './ContextPages';


const ContextProvider = ({ children }) => {

    const [iphoneCart, setCartIphone] = useState([])

    useEffect(() => {
        const data = localStorage.getItem('iphone_Cart')
        if (data) {
            setCartIphone(JSON.parse(data))
        }
    }, [])

    useEffect(() => {
        if (iphoneCart.length > 0) {
            localStorage.setItem('iphone_Cart', JSON.stringify(iphoneCart))
        }
    }, [iphoneCart])



    const data = {
        iphoneCart,
        setCartIphone
    }

    return <IphoneAddCart.Provider value={data}>
        {children}
    </IphoneAddCart.Provider>
};

export default ContextProvider;