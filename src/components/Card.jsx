import React from 'react';
import Edit from './Edit';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Card({displayData,removetask}) {

  console.log(displayData);
  
// Function to get the background color based on status
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
      
            <div className='container' style={{backgroundColor:'white',boxShadow:'none'}}>
                <div className='row d-flex ms-1'>
                {displayData.length > 0 ? (
              displayData.map((item) => (
                  <div className="card col-lg-3 me-2  ms-2 mb-4" style={{ width: '18rem',backgroundColor: getCardBackgroundColor(item.status) }}>
                    <div className="card-body">
                      <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                        <div>ID- {item.id}</div>
                        <Link to={`/view/${item._id}`} className="fa-solid fa-arrow-up-right-from-square"></Link>
                      </div>
                      <h5 className="card-title text-center mt-2">{item.task}</h5>
                      <div className=' mt-3 mb-2 pt-1 pb-1' style={{  justifyContent: 'center',display:'flex', alignItems: 'center' }}>
                        <Button className={
                        item.status === "High" ? "btn-danger" : item.status==="Medium" ?"btn-warning" : "btn-success"
                      }>                      {item.status}
                        </Button>
                      </div>
                      <p className="card-text text-center">{item.description}</p>
                      <div className='d-flex justify-content-between align-items-center' >
                        <Link to={`/edit/${item._id}`}
                          type="button"
                          className="btn btn-link "
                          style={{marginRight:'160px'}}
                          
                        >
                          <i className="fa-solid fa-pen-nib"></i>
                        </Link>
                        <span onClick={() => removetask(item._id)} style={{cursor:'pointer'}} >
                          <i className="fa-solid fa-trash"></i>
                        </span>
                      </div>
                    </div>     
                    
                  </div> ))
            ) : (
              <tr className="text-danger text-center  w-100" style={{fontSize:'30px'}}>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/to-do-list-in-laptop-3178507-2670449.png?f=webp" alt="" />

              </tr>
            )}
    
    
    
    
                  
                   </div>

            </div>
          
  
        
    </>
  );
}

export default Card;
