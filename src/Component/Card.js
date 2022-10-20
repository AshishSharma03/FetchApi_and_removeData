import React ,{useContext}from 'react'
import '.././App.css'
import { DataConetxt } from '../Store/DataContext';

function Card({id,title,img,desc}) {
 const {dispatch} = useContext(DataConetxt);

    const onDel = (id) =>{

        dispatch({
            type: "DEL",
            payload:{id : id}
        })

    }

  return (
    <div className='card-component'>
        <div>
         
            <img  src={img} alt={title}/>
            
        </div>
        <div>
            <h3>{title}</h3>
        </div>
        <div>
            <p>{desc}</p>
        </div>
        <button onClick={()=>{onDel(id)}}>Remove</button>
    </div>
  )
}

export default Card