import RenderData from '@/components/RenderData';
import axios from 'axios';


import React from 'react';
import { useState } from 'react';

const Index = () => {
 const [data,setData] = useState([])
  const handleClick = () => {
    const name = document.getElementById("name").value
    const id = document.getElementById("id").value

    const data = {
      id:id,
      name : name,
    }
    axios.post("/api/practice/dummy",data).then((Response) => {
      console.log(Response)
      
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleGetData = () => {
    const docs = []
    axios.get("api/getData/getData").then(function(Response){
      console.log(Response)
      console.log(Response.data.data)
      
      Response.data.data.forEach((doc) => {
        docs.push(doc)
      })
      setData(docs)
    })
    .catch((error) => {
      console.log(error)
    })
  }
  return (
    
    <div>

      <div className='grid text-center text-white'>
      <input  id= "name" type='name' placeholder='name' className='rounded m-4 text-center border-2 bg-inherit'></input>
      <input id= "id" type='number' placeholder='id' className='rounded m-4 text-center border-2 bg-inherit'></input>
      <button onClick={handleClick} className='border-2 w-max mx-auto p-3 rounded-xl text-white'>Send Data</button>
      </div>
  <div className='text-center my-6'>
  <button onClick={handleGetData} className='border-2  mx-auto p-3 rounded-xl w-1/2 text-center text-white'>Get Data</button>
  </div>
      
      <div className='grid'>
        {
          data && data.map((data) => {
            return(
              <RenderData data={data} key={data.id} />
            )
          })
        }
      </div>
    </div>
    
  );
}

export default Index;
