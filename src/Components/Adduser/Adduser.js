import React, {useState} from "react";
import Form from '../Layout/Form';
import Button from "../Layout/Button";








const Adduser = (props)=>{

    const [input, setInput] = useState ({
      name: '',
      age: '',
      address: '',
      gender: '',
    });


    const onSubmitHandler = (e) => {
        console.log (e); // for testing :D
      e.preventDefault();
      console.log (input.name, input.age); 
      props.newUserHandler ({
        id: Math.round (Math.random() * 200),
        name: input.name,
        age: input.age,
        address: input.address,
        gender: input.gender 
      });
     
    };


    const inputHandler = (e)=>{
      const key = e.target.id;
      const value = e.target.value;
      /* setInput({[key]: value}); // error because it's async */
      setInput({ ...input, [key]: value });
      // another way:   setInput (()=>{ 
      //                    return{...input, [key]: value}
      //                              });
      console.log(input); // this will be previous because u know... it's async
    }


    return (
      <Form onSubmit={onSubmitHandler}>
        <Form.Controller>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            placeholder="username..."
            id="name"
            onChange={inputHandler}
          />
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
          <input
            type="number"
            placeholder="age.."
            id="age"
            onChange={inputHandler}
            value={input.age}
          />
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="address">address:</label>
          <input
            type="text"
            placeholder="address.."
            id="address"
            onChange={inputHandler}
            value={input.address}
          />
        </Form.Controller>

        <Form.Controller>
          <label htmlFor="gender">gender:</label>
          <input
            type="text"
            placeholder="male or female.."
            id="gender"
            onChange={inputHandler}
            value={input.gender}
          />
        </Form.Controller>

        <div style={{ marginTop: "10px" }}>
          <Button style={{ marginLeft: "10px" }} type="submit">
            save
          </Button>

          <Button type="reset">reset</Button>
        </div>
      </Form>
    );
}

export default Adduser; 