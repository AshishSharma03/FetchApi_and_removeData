import { useEffect, useState } from "react"
import Main from "./Component/Main";


function App() {
  const [data, setdata] = useState();

    useEffect(()=>{
        
      (async()=>{

          try{
            const res = await fetch('https://dummyjson.com/products');
            const d = await res.json();
            setdata(d.products);
          }catch(err){
            console.log(err)
          }
        
      })()

    },[])

    console.log(data)
  return (
    <div>
      <Main data={data}/>
    </div>
  )
}

export default App