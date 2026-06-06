import React, {Fragment} from "react";
import styles from './Modal.module.css';
import ReactDOM from "react-dom";
import Adduser from "../Adduser/Adduser";


const BackDrop = ({close, show})=> {
    return <div className={`${styles.backDrop} ${show ? styles.SHOW : '' }` }  onClick={close}></div>
}


const PopUp= ({show, children, newUserHandler})=> {

    // we used Controller like this to send the {props.children this way and try it} 
    // the children are <label and input> as u can see
    return (
      <div className={`${styles.pupUp} ${show ? styles.SHOWPOPUP : ""}`}>
      <Adduser newUserHandler= {newUserHandler}>
        {children}
      </Adduser>
      </div>
    );
}


const Modal = ({showingModal, closingModal, children, newUserHandler})=> {
    

    return (
       (
        <Fragment>
          {ReactDOM.createPortal(
            <Fragment>
              <BackDrop show={showingModal} close={closingModal} />
              <PopUp show={showingModal}  newUserHandler= {newUserHandler}>{children}</PopUp>
            </Fragment>,
            document.getElementById("modal"),
          )}
        </Fragment>
      )
    );
}


export default Modal;