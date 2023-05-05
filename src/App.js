import { Form } from './Components/Form';
import { UserList } from './Components/UserList';
import React, {useState} from 'react';

// const DUMMY_USERS = [
//   {
//     id: "123",
//     name: "e1",
//     age: "21",
//   },
//   {
//     id: "234",
//     name: "e2",
//     age: "22",
//   },
//   {
//     id: "456",
//     name: "e3",
//     age: "23",
//   },
// ];

function App() {

  const [users, setUsers] = useState([]);
  const saveUser = (userData) => {
    setUsers(prevUsers => {
      return [userData, ...prevUsers];
    })
  };

  return (
    <div className="App">
      <Form onSave={saveUser}/>
      <UserList data = {users}/>
    </div>
  );
}

export default App;
