import React,{useContext} from "react";
import classes from './Cart.module.css'
import Modal from "../UI/Modal";
import CartContext from "../../store/Context";
import CartItem from "./CartItem";

const Cart=(props)=>{

    const cartCtx=useContext(CartContext)

    const ShowOrderButton= cartCtx.items.length>0

    const RemoveFromCartHandler=(id)=>{
        cartCtx.removeItem(id)
    }

    const AddToCardHandler=(item)=>{
        
    }

    let totalAmount=0
    for(let i=0;i<cartCtx.items.length;i++){
        totalAmount=totalAmount+(cartCtx.items[i].price)*(cartCtx.items[i].amount)
    }

    const cartItems=<ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>
           <CartItem 
               key={item.id} 
               name={item.name} 
               price={item.price} 
               amount={item.amount}
               onRemove={RemoveFromCartHandler.bind(null,item.id)}
               onAdd={AddToCardHandler.bind(null,item)} 
            /> 
         )}</ul>

    return(
        <Modal onRemove={props.onCancel}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>${totalAmount.toFixed(2)}</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onCancel}>Cancel</button>
                {ShowOrderButton && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    )
}

export default Cart
