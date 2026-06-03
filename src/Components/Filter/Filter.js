import React from "react";
import { useState } from "react";
import styles from './Filter.module.css';



// in this component i want to pass data/ state from child to parent

const Filter = ({F})=>{

const [filtered, setFiltered] = useState("");

const filterHandler = (e)=>{
    const theValue = e.target.value;
    console.log (theValue);
    setFiltered(theValue);
    // console.log (filtered); //  for testing to see the previous state and know that it's async

    F (theValue);
}

    return(
        <div>
            <input type="text" placeholder="search" value={filtered} onChange={filterHandler} />
        </div>
    )




}


export default Filter;