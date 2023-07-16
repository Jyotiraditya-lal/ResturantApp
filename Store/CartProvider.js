import React,{useState} from "react";
import CartContext from "./Context";



const CartProvider=(props)=>{

    const [itemState,setItemState]= useState([])

    const AddItemsHandler=(item)=>{
        
        const itemID=itemState.map(itm=>itm.id)

        if(itemState.length>0){

            if(itemID.includes(item.id)){

              for(let i=0;i<itemState.length;i++){
                 if(itemState[i].id===item.id){
                    itemState[i].amount=Number(itemState[i].amount)+Number(item.amount)
                    break;
                   }   
                }
            }
            else{
                setItemState([...itemState,item])
            }
        }
        else{
            setItemState([...itemState,item])
        }
        
        
        console.log(itemState)
    }


    const RemoveItemsHandler=(id)=>{}
    
    
    const cartContext={
        items: itemState,
        addItem: AddItemsHandler,
        removeItem: RemoveItemsHandler
    }
    return(
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider
