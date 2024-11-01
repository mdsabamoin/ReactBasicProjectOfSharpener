import React from "react";

const ListItem = (props) =>{
    
    const deleteHandler = (index)=>{
       const newAddress = [...props.address];
       newAddress.splice(index,1);
        props.setAddress(newAddress);
    }

 return(<div>
    <ul>
       {
         props.address.map((item,index)=>{
            return (
                <div key={index}>
                    {item.title && item.title + ">>>"}  <a href={item.url}>{item.url}</a>
                    { item.title  && item.url  && <><button onClick={()=>{
                        deleteHandler(index)
                    }}>Delete</button><button onClick={()=>{props.onEdit(item,index)}}>Edit</button></>}
                    
                </div>
            )
        })
       }
    </ul>
 </div>)
}
export default ListItem;