import React, { useState } from 'react';
import './App.css';
import UserForm from './components/Users/UserForm';
import UserList from './components/Users/UserList';

function App() {

  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsersList((prevUserList) => {
      return[...prevUserList, {name: userName, age: userAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <UserForm onAddUser={addUserHandler}/>
      <UserList users={usersList}/>
    </div>
  );
}

export default App;
