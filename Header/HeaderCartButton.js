import React,{useContext} from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css"
import CartContext from "../../store/Context";




const HeaderCartButton=(props)=>{

    const cartCtx=useContext(CartContext)
    const number=cartCtx.items.reduce((currNum,item)=>{
        return currNum+item.amount
    },0)

    return(
        <button className={classes.button} onClick={props.onDisplay}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{number}</span>
        </button>
    )
}

export default HeaderCartButton
