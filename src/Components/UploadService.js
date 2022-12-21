import React,{useState} from 'react'
import { useNavigate } from "react-router-dom";
import { useSelector , useDispatch } from 'react-redux';
import { addFile } from '../fileIndex';
const UploadService = () => {
    const [file, setFile] = useState();
    const [title, setTitle] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleFile = async (e) =>{
        const data = URL.createObjectURL(e.target.files[0]);
        setFile(data);
    }
    const submitForm = (e) => {
        e.preventDefault();
        dispatch(addFile(file,title))
        navigate('/LinkPut')
    }
  return (
    <div>
      <form onSubmit={submitForm}>
        <input type='file' onChange={(e)=>handleFile(e)}/>
        <input type='text' value={title} placeholder='Enter title' onChange={(e)=> setTitle(e.target.value)}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default UploadService
