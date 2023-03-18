import React from "react";
import '../App.css';
export default function TodoList(props) {
  let list = [];
  props.items.forEach((data) => {
    list.push(<li key={data} >{data}<a onClick={()=>{props.onDelete(data)} } href className="">delete</a>
    <a onClick={()=>{props.onUpdate(data)} } href className="">update</a></li>);
  });
  return (<> {list}</>);
}


function get(props){
  
}