import React, {useState, useRef} from 'react';
import './App.css';
import Cards from '../Components/Cards/Cards';
import Filter from '../Components/Filter/Filter';
import Modal from '../Components/Modal/Modal';
import Button from '../Components/Layout/Button';






function App(props) {

  // // ### USE REF ### to handle input from the elemnt/form..etc
  // const inputEl = useRef();

  // // function to use useRef to show the logs in the search
  // const searchShower = ()=>{
  //   console.log(inputEl.current.value);
  // }

  // // function to use useRef to focus on inputEl which rederes to search bar
  // const focusOnSearch = ()=>{
  //   inputEl.current.focus();
  // }

    /* the JSX code of useRef, but we deleted it to use controlled component --- we named it Filter.js --- instead

          <div>
          <input type='text' placeholder='search' ref={inputEl} on onChange={searchShower} />
          <button onClick={focusOnSearch}>click me</button>
        </div>

*/

  // ### USE STATE ###
  const [state, setState] = useState([
    {
      id: 1,
      name: "Ahmed",
      age: 25,
      address: "Alex-Egypt",
      gender: "male",
    },
    {
      id: 2,
      name: "Emam",
      age: 26,
      address: "KFS-Egypt",
      gender: "male",
    },
    {
      id: 3,
      name: "Ibrahim",
      age: 25,
      address: "Fowa-Egypt",
      gender: "male",
    },
    {
      id: 4,
      name: "Nora",
      age: 27,
      address: "Cairo-Egypt",
      gender: "female",
    },
    {
      id: 5,
      name: "Noor",
      age: 26,
      address: "Assuit-Egypt",
      gender: "female",
    },
    {
      id: 6,
      name: "Noreen",
      age: 28,
      address: "Cairo-Egypt",
      gender: "female",
    },
  ]);

  //### use state to show cards or hide ###
  const [showCard, setShowCard] = useState(true);

  // ### use state to link the states between frilter component and app ###
  const [theNames, setTheNames] = useState('');

  // ### USE STATE FOR MODALS ###
  const [showModal, setShowModal]= useState (false);

  // // ### handling deleting ###
  // const deleteItem = (e, selectedID)=>{
  //     console.log(e, selectedID); // to test the clicked item and it's index

  //     const itemsAfterDeleting = state.filter((el, el_Ind)=> selectedID !== el_Ind )
  //     console.log(itemsAfterDeleting); // to test
  //     setState(itemsAfterDeleting);
  //   }


  // ### Handling deleting the 2nd way ###:
  const deleteItem = (e, selectedID) => {
    // we will use set state as a function ((and u  pass in it what we call "the previous state" the old state or the state coming from ascny opertation))
    setState((state) => {
      // return previousState; // if u didn't write this, this means u will destroy the state and u will get error just to test

      return state.filter((el) => el.id !== selectedID);
    });
    console.log(state); // because state is async u will find the previous ones before deleting immediately.. because it's sync and setState is async.
  };

  // function toggle
  const toggleHandler = () => {
    setShowCard(!showCard); // i told him, after clicking, reverse the last showCard state value.
  };

  //new user handler (this will listen to the dorm on Adduser component)
  const newUserHandler = (data)=>{
    console.log ("data in app component from Adduser component is:",data);
    setState ((prevState)=> [...prevState, data]);
  }
  

  

// function Filtering searching
const filterNames = (name)=>{
  // console.log(name);
  setTheNames(name); // the name track in searchbar coming frim filter component 
}

// Name Filter
const searchedNameIS = ()=>{
  console.log(theNames);
  if (theNames.length !==0){
    return state.filter((el)=> el.name.includes(theNames));
  }
  return state;
}


// function to listen to backDrop in the modal component
const closeModal = ()=>{
  setShowModal (false);
}
 


  return (
    <div className="App">
      <h1>Hello from App Component!</h1>
      <Modal showingModal={showModal}  closingModal= {closeModal} newUserHandler = {newUserHandler}> 
        {props.children} 
      </Modal>
      <div>
        <button style={{marginRight: "20px"}} onClick={()=>setShowModal(true)}>Show modal</button>

        <Button onClick={toggleHandler}>
          {showCard ? "hide cards" : "show cards"}
        </Button>
      </div>
      
      <div className={showCard ? "show" : "hide"}>

        <Filter F ={filterNames}/>
        <Cards allMembers={searchedNameIS()} deletedCard={deleteItem} />
      </div>
    </div>
  );
}

export default App;
