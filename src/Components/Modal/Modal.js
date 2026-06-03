import React, {Fragment} from "react";
import styles from './Modal.module.css';
import ReactDOM from "react-dom";

const BackDrop = ({close})=> {
    return <div className={styles.backDrop} onClick={close}></div>
}


const PopUp= ()=> {
    return <div className={styles.pupUp}></div>
}


const Modal = ({showingModal, closingModal})=> {


    return (
    showingModal && (
      <Fragment>
        {ReactDOM.createPortal(
          <Fragment>
            <BackDrop close={closingModal}/>
            <PopUp />
          </Fragment>,
          document.getElementById("modal"),
        )}
      </Fragment>
        )
    );
}


export default Modal;