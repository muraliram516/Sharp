import React from 'react';
import AddUser from  './components/Users/AddUsers';
import UserList from './components/Users/UserList'
function App() {
  return (
    <div>
      <AddUser onAddUser ={addUserHandler}/>
      <UserList  users ={UserList} />
    </div>
  );
}

export default App;
