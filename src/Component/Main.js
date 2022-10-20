import React, { useReducer,useEffect, useState } from 'react'
import { DataConetxt } from '../Store/DataContext';
import Reducer from '../Store/Reducer'
import Card from './Card';
import '../App.css'

function Main({data}) {
    
  const [state,dispatch] = useReducer(Reducer, [])
  const [TriggerData, setTriggerData] = useState(true);

    useEffect(()=>{

      if(data  && TriggerData){
        data.map(a =>
        
          dispatch({
            type :"ADD",
            payload : a

          }))
        
       setTriggerData(false)
      }
    },[data,TriggerData])
  
      
  return (

    <DataConetxt.Provider value={{state,dispatch}}>
    <div className='Grid-container'>
      
      {
        (!data)? 'loading.. .' :
        state.map(a => {
        return(
          <React.Fragment key={a.id}>
            <div className='grid-item'>
            <Card id={a.id} title={a.title} desc={a.description} img={a.thumbnail} />
            </div>
          </React.Fragment>
        )
      })
    }
    </div>
    </DataConetxt.Provider>
  )
}

export default Main