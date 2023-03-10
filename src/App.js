// import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import InputImage from "./Components/InputImage";
import LinkPut from "./Components/LinkPut";
import Onboarding from "./Components/Onboarding";
import PlayMusic from "./Components/PlayMusic";
import Signin from "./Components/Signin";
import Signup from "./Components/Signup";
import UploadService from "./Components/UploadService";

function App() {
  return (
    <div>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/LinkPut" element={<LinkPut/>}></Route>
          <Route path="/inputImage" element={<InputImage/>}></Route>
          <Route path="/PlayMusic" element={<PlayMusic/>}></Route>
          <Route path="/Signup" element={<Signup/>}></Route>
          <Route path="/Signin" element={<Signin/>}></Route>
          <Route path="/onboarding" element={<Onboarding/>}></Route>
          <Route path="/upload-service" element={<UploadService />}></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
