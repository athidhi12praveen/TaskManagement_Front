import React from 'react'
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <>
      <div className="d-flex" style={{backgroundColor:' rgba(210, 210, 213, 0.567)',justifyContent:'space-between'}}>
        <h1 className="navbar-brand pt-4 pb-4 ps-5" style={{fontFamily:'serif',color:'black'}}>TASK MANAGEMENT</h1>
        <div className="mt-3 me-5">
          <button onClick={handleLoginClick} className='ps-3 pe-3' style={{border:"none",backgroundColor:'white ',borderRadius:'5px'}}>LOGIN</button>
        </div>
      </div>
    </>
  )
}

export default Header