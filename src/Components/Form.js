import { Card } from "../UI/Card";
import './Form.css'
import React, {useState} from "react";

export const Form = (props) => {

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler =(e) => {setName(e.target.value)};
  const ageChangeHandler =(e) => {setAge(e.target.value)};

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      name: name,
      age: age,
      id: Math.random()*10
    }
    props.onSave(userData);
    setName("");
    setAge("");
  }

  return (
    <Card className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Username</label>
            <input type="text" value={name} onChange={nameChangeHandler}/>
          </div>
          <div className="new-expense__control">
            <label>Age (years)</label>
            <input type="text" value={age} onChange={ageChangeHandler}/>
          </div>
          <div className="new-expense__actions">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </Card>
  );
};
