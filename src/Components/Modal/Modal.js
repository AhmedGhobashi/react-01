import React, {Fragment} from "react";
import styles from './Modal.module.css';
import ReactDOM from "react-dom";
import Form from '../Layout/Form';

const BackDrop = ({close, show})=> {
    return <div className={`${styles.backDrop} ${show ? styles.SHOW : '' }` }  onClick={close}></div>
}


const PopUp= ({show})=> {

    // we used Controller like this to send the {props.children this way and try it} 
    // the children are <label and input> as u can see
    return (
      <div className={`${styles.pupUp} ${show ? styles.SHOWPOPUP : ""}`}>
        <Form className={styles.forrm}>
          <Form.Controller>
            <label htmlFor="username">username:</label>
            <input type="text" placeholder="username..." id="username" />
          </Form.Controller>

          <Form.Controller>
            <label htmlFor="phone">phone:</label>
            <input
              id="phone"
              type="text"
              placeholder="enter your phone here..."
            />
          </Form.Controller>

          <Form.Controller>
            <label htmlFor="age">age:</label>
            <input type="number" placeholder="age.." id="age" />
          </Form.Controller>

          <Form.Controller>
            <label htmlFor="address">address:</label>
            <input type="text" placeholder="address.." id="address"  />
          </Form.Controller>

          <Form.Controller>
            <label htmlFor="gender">gender:</label>
            <input type="text" placeholder="male or female.." id="gender" />
          </Form.Controller>
        </Form>
      </div>
    );
}


const Modal = ({showingModal, closingModal})=> {
    

    return (
       (
        <Fragment>
          {ReactDOM.createPortal(
            <Fragment>
              <BackDrop show={showingModal} close={closingModal} />
              <PopUp show={showingModal} />
            </Fragment>,
            document.getElementById("modal"),
          )}
        </Fragment>
      )
    );
}


export default Modal;