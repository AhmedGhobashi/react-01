
import React, {Fragment} from "react";
import styles from './Cards.css';


const Cards = ({allMembers, deletedCard})=>{
  console.log ("all members:", allMembers)
  // ### NOTE: you pass the props frol parent to child, but you pass the handler function from the child to the parent ###
    const membersCards = allMembers.map((el)=>{
    return (
            
            <div className="card-body" style= {{backgroundColor: el.gender === "male"? "green": "yellow" }} key={el.id}>
                <h3>{el.name}</h3>
                <p>{el.age}</p>
                <p>{el.address}</p>
                <button className="delete-card" onClick={(e)=>deletedCard(el, el.id)}>x</button>
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
