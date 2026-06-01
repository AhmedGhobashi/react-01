import React, {useState} from 'react';
import './App.css';
import Cards from '../Components/Cards/Cards';




function App() {

  // const boys = [
  //   { name: "Ahmed", age: 25, address: "Alex-Egypt", working: false },
  //   { name: "Emam", age: 26, address: "KFS-Egypt", working: true },
  //   { name: "Ibrahim", age: 25, address: "Fowa-Egypt", working: true },
  //  ];

  // const girls = [
  //   { name: "Nora", age: 27, address: "Cairo-Egypt", working: true },
  //   { name: "Noor", age: 26, address: "Assuit-Egypt", working: false },
  //   { name: "Noreen", age: 28, address: "Cairo-Egypt", working: true },
  // ];


  // USE STATE
  const [state, setState] = useState([
    {
      name: "Ahmed",
      age: 25,
      address: "Alex-Egypt",
      working: false,
      gender: "male",
    },
    {
      name: "Emam",
      age: 26,
      address: "KFS-Egypt",
      working: true,
      gender: "male",
    },
    {
      name: "Ibrahim",
      age: 25,
      address: "Fowa-Egypt",
      working: true,
      gender: "male",
    },
    {
      name: "Nora",
      age: 27,
      address: "Cairo-Egypt",
      working: true,
      gender: "female",
    },
    {
      name: "Noor",
      age: 26,
      address: "Assuit-Egypt",
      working: false,
      gender: "female",
    },
    {
      name: "Noreen",
      age: 28,
      address: "Cairo-Egypt",
      working: true,
      gender: "female",
    },
  ]);



  return (
    <div className="App">
     <h1>Hello from App Component!</h1>

     // PASSING STATE AS A PROP TO THE CHILD
     <Cards allMembers = {state} /> 

    </div>
  );
}

export default App;
