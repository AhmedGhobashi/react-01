import React from "react";
import styles from './Form.module.css';



const Controller = (props)=>{

    return (
    <div className={styles.controllers}>
        {props.children}
    </div>

    );
}


const Form = (props)=> {return <form>{props.children}</form>}


Form.Controller = Controller;

export default Form; 