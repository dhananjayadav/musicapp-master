import React from 'react'
import './Css/InputPage.css'
import { useState } from "react";
import {Link} from 'react-router-dom'
import image from './assests/no-image-available-icon-ui-260nw-1458092489-removebg-preview.png'

function InputImage() {
  const [file, setFile] = useState(image);
    function handleChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }
  return (
    <>
      <div className='InputPage'>
           <form className='imagebox'>
             
             <h1>Cover</h1>
             <div>
             <img style={{height:'280px',width:'280px'}} src={file} alt="" />
             </div>
             <input onChange={handleChange}  type="file" id="img" style={{display:"none"}}  required/>
             <label  for="img">Upload Image</label>
             <div className='title'>
             <div className='artist'>
                <h1>Artist Name</h1>
                <input type="text"  placeholder='Enter Artist Name'/>
             </div>
             <div className='imagetitle'>
                <h1>Song Title</h1>
                <input type="text"  placeholder="Enter Song's title"/>
             </div>
             </div>
             <Link to="/PlayMusic" className='UploadSaveBtn'>Save</Link>
           </form>
      </div>
    </>
  )
}

export default InputImage
