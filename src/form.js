import React, { useState , useEffect} from "react";

const Form = (props) => {

  const [Title, setTitle] = useState("");
  const [URL, setURL] = useState("");
  // console.log(props.edit.item.title);
  // const [valid,setValid] = useState(false);
  useEffect(()=>{
    if (props.isEditing && props.edit){
      setTitle(props.edit.title)
      setURL(props.edit.url);
    }
    
  },[props.isEditing , props.edit]);


  // if(props.isEditing){
  //   console.log(props.edit);
  //   setTitle(props.edit.title);
  //   setURL(props.edit.url);
  //   props.setIsediting(false);
  // }

  const titleHandler = (event) => {
      setTitle(event.target.value);
  }



  const urlHandler = (event) => {
      setURL(event.target.value); 
  }

  const formHandler = (event) => {
    event.preventDefault();
    const obj = {
      "title": Title,
      "url": URL
    }
    // props.address[props.edit.index] = props.onSubmit(obj);
    if(props.isEditing){
      props.address[props.editIndex] = obj;
      props.setIsediting(false);
    }else{
      props.onSubmit(obj);
    }
    
    setTitle("");
    setURL("");
  }



  return (
    <form onSubmit={formHandler}>
      <h2 className="App">Bookmark Website</h2>
      <label htmlFor='title'>Title:</label>
      <input type="text" id="title" name="title"value={Title} onChange={titleHandler} />
      <br />
      <br />
      <label htmlFor="url">Website URL:</label>
      <input type="url" id="url"  name="url" value={URL} onChange={urlHandler} />
      <br />
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;