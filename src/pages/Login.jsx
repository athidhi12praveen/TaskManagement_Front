import React, { useState } from 'react'
import "./Login.css";
import { Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { loginUser } from '../services/AllApi';

function Login() {
    // navigate
  const navigate = useNavigate();

  // to hold user data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  // define get user data
  const getAndsetUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  // console.log(data);

  // define submit function for user login

  const handleSubmit =async(e)=>{
    e.preventDefault()

    const {email ,password}= userData
  


  if (!email || !password) {

    alert('please fill the form')
    
  } else {


    try{

      const data ={email ,password}

      const response =await loginUser(data)

      // console.log(response);

      if (response.status===200) {

        const user = response.data.existingUser;

        setUserData({
          email:"",
          password:""
        });
        navigate('/home')

        localStorage.setItem('user', JSON.stringify(user))
        window.location.reload()

        
      } else {
        
      }



    }catch(err){


      alert('failed')
    
    }

    
    
  }

}


 
  return (
    <>
<div className="app">
        <div className="container" style={{ width: "500px", height: "55vh" }}>
          <h1 className="title">
            <b>LogIn</b>
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="text-fields">
              <div className="input">
                <div className="mb-3 ms-4 me-4">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Enter your E-mail Id"
                    required="true"
                    onChange={(e) => getAndsetUserData(e)}
                    value={userData.email}
                  />
                </div>
                <div className="mb-3 ms-4 me-4">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your Password"
                    required="true"
                    onChange={(e) => getAndsetUserData(e)}
                    value={userData.password}
                  />
                </div>
              </div>
            </div>

            <div className="input ">
              <div className="mb-3 ms-4 me-4">
                <Stack direction="row" spacing={2}>
                  <Button
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "rgb(193, 17, 25)",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    LOGIN
                  </Button>
                </Stack>
              </div>
            </div>

            <div className="my-account">
              <span className="account">Create an account? </span>
              <Link to={"/signin"} className="link">
                SignIn
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Login