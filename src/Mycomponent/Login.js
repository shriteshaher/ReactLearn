import React, { useState } from "react";
import TodoList from './TodoList'
import Button from 'react-bootstrap/Button';
export default function Login(props) {
  const[item,setItem]=useState("")
  const[formState,setformState]=useState({
    email:"",
    password:""
  })
  const list1=[]
  const [list,setList]=useState(list1)



  function add (e){
    list.push(item)
   setList([...list])
   setItem("")
    
  }

  const onDelete=(todo)=>{
    list.splice(list.indexOf(todo),1)
    setList([...list])
  }

  const onUpdate=(todo)=>{
    setItem(list[list.indexOf(todo)])
    
  }
  
  
  return (
    <div >
      <h3>Login Page</h3>
      <form>
        <div><input type="text" placeholder="Enter Login Id" value={formState.email} onChange={(e)=>{setItem(e.target.value)}}></input></div>
       <div><input type="text" placeholder="Enter Password" value={formState.email} onChange={(e)=>{setItem(e.target.value)}}></input></div>
      <input type="submit" value="Login" onClick={add} />
      </form>
      
      <Button onClick={()=>{props.onClick("signUp")}} variant="primary" >SignUp</Button>
      <TodoList items={list} onDelete={onDelete} onUpdate={onUpdate}></TodoList>
    </div>
  );
}

