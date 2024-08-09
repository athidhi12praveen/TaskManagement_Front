import React, { useContext, useState } from 'react'
import "./Signin.css"
import { Button, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { registerContext } from '../components/Contextshare';
import { registerUser } from '../services/AllApi';


function SignIn() {
    // register context to get data
  const { registerData, setregisterData } = useContext(registerContext);

  // navigate
  const navigate = useNavigate();

  // to hold user data
  const [data, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  // define get user data
  const getUserData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...data, [name]: value });
  };
  console.log(data);

  // define submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password, confirmpassword } = data;
    if (!name || !email || !password || !confirmpassword) {
      alert("Please fill the form");
    } else {
      // confirm password
      if (data.password === data.confirmpassword) {
        const databody = new FormData();
        databody.append("name", name);
        databody.append("email", email);
        databody.append("password", password);
        databody.append("confirmpassword", confirmpassword);

        const headers = { "content-type": "application/json" };

        // API call
        const response = await registerUser(databody, headers);
        console.log("response");

        if (response.status == 200) {
          setUserData({
            ...databody,
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
          });
          setregisterData(response.data);

          navigate("/login");
        }
      } else {
        alert("Incorrect password");
      }
    }
  };

  return (
    <>
    <div className="app">
        <div className="container" style={{ width: "500px", height: "68vh" }}>
          <h1 className="title">
            <b>SIGNIN</b>
          </h1>

          <form>
            <div className="text-fields">
              <div className="input">
                <div className="mb-3 ms-4 me-4">
                  <input
                    name="name"
                    type="name"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Enter your Name"
                    required="true"
                    onChange={(e) => getUserData(e)}
                    value={data.value}
                  />
                </div>

                <div className="mb-3 ms-4 me-4">
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Enter your E-mail Id"
                    required="true"
                    onChange={(e) => getUserData(e)}
                    value={data.value}
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
                    onChange={(e) => getUserData(e)}
                    value={data.value}
                  />
                </div>
                <div className="mb-3 ms-4 me-4">
                  <input
                    name="confirmpassword"
                    type="password"
                    className="form-control"
                    id="confirmpassword"
                    placeholder="Enter your Confirm Password"
                    required="true"
                    onChange={(e) => getUserData(e)}
                    value={data.value}
                  />
                </div>
              </div>
            </div>

            <div className="input">
              <div className=" ms-4 me-4">
                <Stack direction="row" spacing={2}>
                  <Button
                    onClick={(e) => handleSubmit(e)}
                    type="submit"
                    className="btn"
                    style={{
                      backgroundColor: "rgb(193, 17, 25)",
                      color: "white",
                    }}
                    variant="contained"
                  >
                    SIGN IN
                  </Button>
                </Stack>
              </div>
            </div>

            <div className="my-account">
              <span className="account">Create an account? </span>
              <Link to={"/login"} className="link">
                LogIn
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default SignIn