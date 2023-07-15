import React from "react";
import ReactDom from  "react-dom"
import classes from "./Modal.module.css"

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onRemove} />
}


const Overlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal=(props)=>{
    return (
        <React.Fragment>
            {ReactDom.createPortal(<Backdrop onRemove={props.onRemove} />, document.getElementById('Overlays'))}
            {ReactDom.createPortal(<Overlay>{props.children}</Overlay>,document.getElementById('Overlays'))}
        </React.Fragment>
    )
}

export default Modal
