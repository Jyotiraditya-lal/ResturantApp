import React,{useContext} from "react";
import classes from "./MealItemForm.module.css"
import Input from "../../UI/Input";
import CartContext from "../../../store/Context";

const MealItemForm=(props)=>{

    const cartCtx=useContext(CartContext)

    const AddToCart=(event)=>{

        event.preventDefault()
        const amount=document.getElementById('amount_'+props.items.id).value
        cartCtx.addItem( {...props.items, amount: amount})
        
    }
    

    return(
        <form className={classes.form} >
            <Input label="Amount" input={{
                id: 'amount_'+props.items.id,
                type: 'number',
                min: '1',
                max: '5',
                step: '1',
                defaultValue: '0'
            }} />
            <button onClick={AddToCart}>Add</button>
        </form>

    )
}

export default MealItemForm
