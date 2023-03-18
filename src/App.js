
import { useState } from 'react';
import './App.css';
import Login from './Mycomponent/Login';
import { SignUp } from './Mycomponent/SignUp';



function App() {
  let [login,setLogin]=useState("Login")
  function onClick(data){
    setLogin(data)
   }

  
  let maiportal=<SignUp ></SignUp>;
  if(login=="Login"){
    maiportal=<Login  onClick={onClick}  > </Login>
   
  }else{
    maiportal=<SignUp ></SignUp>
  }
  return (
    <div className="App">
     <h2>{login}Portal </h2> 
      {maiportal}
    </div>
    
  );
}

export default App;
