import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { children } from 'react'
import { createContext } from 'react'
import { authDataContext } from './authContext'
import axios from 'axios'
import { useEffect } from 'react'

export const shopDataContext = createContext()
function ShopContext({children}) {

    let [products , setProducts] = useState([])
    let [search , setSearch] = useState('')
    let [showSearch , setShowSearch] = useState(false)
    let {serverUrl} = useContext(authDataContext)
    let [cartItem , setCartItem] = useState({});
    let currency = "₹";
    let delivery_fee = 90;

    const getProducts = async()=>{
        try{
            let result = await axios.get(serverUrl + "/api/product/list")
            console.log(result.data)
            setProducts(result.data)
        }catch(error){
            console.log(error)
        }
    }

    const addtoCart = async (itemId , size) => {
        if (!size) {
            console.log("Select Product Size");
            return;
        }

        let cartData = structuredClone(cartItem);

        if (cartData[itemId]){
            if (cartData[itemId][size]){
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        
        setCartItem(cartData);
        console.log(cartData)
    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const items in cartItem){
            for(const item in cartItem[items]){
                try{
                    if(cartItem[items][item] > 0){
                        totalCount += cartItem[items][item]
                    }
                } catch (error){

                }
            }
        }
        return totalCount
    }

    useEffect(()=>{
        getProducts()
    },[])

    let value = {
        products , currency , delivery_fee , getProducts , search , setSearch , showSearch , setShowSearch , cartItem , addtoCart , getCartCount , setCartItem
    }

  return (
    <div>
        <shopDataContext.Provider value={value}>
            {children}
        </shopDataContext.Provider>
    </div>
  )
}

export default ShopContext