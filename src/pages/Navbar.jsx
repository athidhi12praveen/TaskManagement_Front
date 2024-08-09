import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };
  
  return (
    <>
    <div className="d-flex" style={{backgroundColor:' rgba(210, 210, 213, 0.567)',justifyContent:'space-between'}}>
        <h1 className="navbar-brand pt-4 pb-4 ps-5" style={{fontFamily:'serif',color:'black'}}>TASK MANAGEMENT</h1>
        <div className="mt-3 me-5">
          <button onClick={handleLogout} className='ps-3 pe-3' style={{border:"none",backgroundColor:'white ',borderRadius:'5px'}}>LOGOUT</button>
        </div>
      </div>
    </>
  )
}

export default Navbar