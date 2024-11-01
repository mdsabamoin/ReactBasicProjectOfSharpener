
import './App.css';
import React, {useState} from "react";
import ListItem from './ListItem';
import Form from "./form";

function App() {
  const [address , setAddress] = useState([{title:"",url:""}]);
  const [edit,setEdit] = useState("");
  const [isEditing,setIsediting] = useState(false);
  const [editIndex,setEditindex] = useState(-1);
  const FormHandlerDetail = (details) =>{
      setAddress((previousState)=>{
        return [details,...previousState]
      })
      
  }
  const EditHandler = (item,index) =>{
        // console.log(item);
        setEdit(item);
        setIsediting(true);
        setEditindex(index);
  }

  return (
    <div>
      <Form onSubmit={FormHandlerDetail} edit={edit} address={address} setAddress={setAddress} isEditing={isEditing} setIsediting={setIsediting} editIndex={editIndex}/>
     <ListItem  address={address} setAddress={setAddress} onEdit={EditHandler} />
    </div> 
  );
}

export default App;
