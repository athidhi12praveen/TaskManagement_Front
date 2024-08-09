import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { allTasks } from '../services/AllApi';
import { Button } from 'react-bootstrap';

function View() {

    const[task,setTask]=useState({})
    const{id}=useParams();
    console.log(id);

    // api call for getting single task details
  const gettask = async () => {
    const { data } = await allTasks("");
    // console.log(data);

    // console.log(data.find(item=>item._id===id));

    setTask(data.find((item) => item._id === id));
  };

  console.log(task);

  useEffect(() => {
    gettask();
  }, []);


  //Function to get the background color based on status
const getCardBackgroundColor = (status) => {
  switch (status) {
    case "High":
      return '#f8d7da';  
    case "Medium":
      return '#fff3cd'; 
    case "Low":
      return '#d4edda';  
  }
};
    
  return (
    <>
<div >
{task ? (
    <div className='container shadow  ' style={{width:'60rem',height:'30rem',marginTop:'120px',backgroundColor:getCardBackgroundColor(task.status)}}>
        <h1 className='text-center pt-5'>MY TASK</h1>
        <div className='m-5 text-center'>
            <p style={{color:'black',fontSize:'20px'}}>ID : {task.id}</p>
            <p style={{color:'black',fontSize:'20px'}}>TASK : {task.task}</p>
            <p className='d-flex' style={{color:'black',fontSize:'20px',justifyContent:'center',alignItems:'center',display:'flex'}}>STATUS : <Button className={
                        task.status === "High" ? "btn-danger" : task.status==="Medium" ?"btn-warning" : "btn-success"
                      } style={{width:'150px',marginLeft:'20px'}}>{task.status}</Button></p>
            <p style={{color:'black',fontSize:'20px'}}>DESCRIPTION : {task.description}</p>
        </div>
    </div>
    ) : (
        ""
      )}
</div>


    </>
  )
}

export default View