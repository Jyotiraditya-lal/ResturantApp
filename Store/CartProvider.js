import React from "react";
import CartContext from "./Context";


const CartProvider=(props)=>{

    const AddItemsHandler=(item)=>{}


    const RemoveItemsHandler=(id)=>{}
    
    
    const cartContext={
        items: [],
        TotalAmount: 0,
        addItems: AddItemsHandler,
        removeItems: RemoveItemsHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
