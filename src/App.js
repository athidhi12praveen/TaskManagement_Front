import {  Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Edit from "./components/Edit"
import View from "./components/View";
import SignIn from "./pages/SignIn";
import Login from "./pages/Login";
import Landingpage from "./pages/Landingpage";


function App() {
  return (
    <>
      <p>
        <Routes>
        <Route path="/" element={<Landingpage />} />

          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/login" element={<Login />} />

          <Route path="/edit/:id" element={<Edit/>}/>

                    <Route path="/view/:id" element={<View/>}/>
                     </Routes>
      </p>
    </>
  );
}

export default App;
