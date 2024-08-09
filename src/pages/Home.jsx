import React, {  useEffect, useState } from 'react'
import './Home.css'
import Add from '../components/Add'
import Card from '../components/Card'
import { allTasks, deleteTask } from '../services/AllApi'
import Navbar from './Navbar'

function Home() {
    let today=new Date()
    let currentHour=today.getHours()
    let currentDate=today.toDateString()

    const[greeting,setGreeting]=useState("")
    const[date,setDate]=useState(currentDate)

    useEffect(() => {
      if (currentHour<12&&currentHour>=5){
        setGreeting("Good Morning")
      }
      else if(currentHour<18&&currentHour>=12){
        setGreeting("Good Afternoon")
      }
      else if(currentHour>=18&&currentDate<19){
        setGreeting("Good Evening")
      }
      else{
        setGreeting("Good Night")
      } 
    }, [])


    const[allTaskData,setAllTaskData]=useState([])

    const [search, setSearch] = useState("");


  useEffect(() => {
    // call to get all task
    getAllTasks()
  
    
  }, [search])
  

  // function defenition
  const getAllTasks=async()=>{
    const response=await allTasks(search)
    console.log(response);
    setAllTaskData(response.data)
    
  }

  
// delete task
const removeTask = async (id) => {
  const response = await deleteTask(id);
  console.log(id);

  if (response.status == 200) {
    getAllTasks();
  } else {
    alert("Operation Failed !!! Please try after some time");
  }
};
  
    
  return (
    <>
    <Navbar/>
        <div className='container' style={{backgroundColor:'white',boxShadow:'none'}}>
            <div className=' text-center mt-5'>
                <h1 className='greeting' ><b>{greeting}</b></h1>
            </div>
            <div className='date text-center '>
                <p style={{fontFamily:'sans-serif'}}>{date}</p>
            </div>
            <div className='section-container d-flex' >
            <div className='container shadow 'style={{backgroundColor:'white'}}>
            {/* heading and add task */}
            <div className=' mt-5 ms-5'>
            <div className='d-flex' style={{justifyContent:'space-between'}}>
              <h1 className='heading text-center'>MY TAsKS    </h1>
              <div type="button" className='d-flex me-5' data-bs-toggle="modal" data-bs-target="#staticBackdrop"  style={{cursor:'pointer'}} >
                  <i class="heading-icon fa-solid fa-address-book mt-1 ms-2"></i>    
                  <i class="fa-solid fa-plus"></i> 
              </div> 
            </div>      
            </div>

            <div className="search  d-flex align-items-center mt-4 ms-3 me-3">
              <div>Search:</div>
              <input
                type="text"
                onChange={e => setSearch(e.target.value)}
                placeholder="Search your task"
                className="form-control ms-3"
                style={{ width: "100%" }}
              />
            </div>


            {/* task */}
            <div className='grid '>
                <div className='box d-flex'>
                 <div className='container d-flex'style={{backgroundColor:'white',boxShadow:'none'}} >
                 
    <Card  displayData={allTaskData} removetask={removeTask} />
  </div>

  
</div>
</div>


                
        </div>


{/* modal */}
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <Add/>
</div>
            </div>
        </div>
    </>
  )
}

export default Home