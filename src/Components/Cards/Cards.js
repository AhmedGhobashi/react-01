
import React, {Fragment} from "react";
import styles from './Cards.css';


const Cards = ({allMembers})=>{

    const membersCards = allMembers.map((el, idx)=>{
    return (
            <div className="card-body">
                <h3>{el.name}</h3>
                <p>{el.age}</p>
                <p>{el.address}</p>
            </div>
            );
    })


    return (
      <Fragment>
        <h2>Cards Component</h2>
        <div className="cards-container">{membersCards}</div>
      </Fragment>
    );
}

export default Cards;
