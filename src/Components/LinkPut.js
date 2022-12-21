import React from 'react'
import './Css/LinkPut.css'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import musicicon from './assests/icons8-music-32.png'
import spotify from './assests/icons8-spotify-48.png'
import Delete from  './assests/icons8-trash-32.png'
import AddService from './assests/icons8-add-song-24.png'
import youtube from './assests/icons8-youtube-48.png'
import amazone from './assests/56-565024_amazon-logo-png-amazon-png-transparent-png-removebg-preview.png'

function LinkPut() {
  const [input, setInput] = useState("");
  


  return (
    <>
       <div className='PasteLinkPage'>
            {/* <div className='FirstBox'>
                <p>Paste a link to your song, album, playlist or artist from any music service such as spotify or Apple Music and we'll automatically find it in other music services.</p>
                <input className='inputoffirstBox' type="text" placeholder='Enter a link of a song, album, playlist or artist' />
                 <button>Scan</button>
            </div> */}
            <div className='SecondBox'>
                 <div className='second1'>
                    <div>
                        <img style={{height:'3.2vmin'}}  src={musicicon} alt="" />
                        <p>Music services</p>
                    </div>
                    { input.length>0?<Link to="/inputImage" className='nextBtn'>Next &rarr;</Link>:<></>}
                    
                </div>
                <div className='second2 '>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'3.5vmin'}} src={spotify} alt="" />
                            <p>Spotify</p>
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
              
                </div>
                <div className='second2 two'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'3.5vmin'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gaana_%28music_streaming_service%29_logo.png/1200px-Gaana_%28music_streaming_service%29_logo.png?20220222152415' alt="" />
                            {/* <p>Spotify</p> */}
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
                   
                </div>
                <div className='second2 three'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img style={{height:'3.5vmin'}} src={youtube} alt="" />
                            <p>Youtube</p>
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
              
                </div>
                <div className='second2 four'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4vmin'}} src={amazone} alt="" />
                            {/* <p>Youtube</p> */}
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
                  
                </div>
                <div className='second2 five'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4.5vmin'}} src="https://cdn2.downdetector.com/static/uploads/logo/amazonmusiclogo_CG06xih.png" alt="" />
                            {/* <p>Youtube</p> */}
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
                
                </div>
                <div className='second2 six'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'4.5vmin'}} src="https://www.seekpng.com/png/full/8-84344_samsung-make-google-play-their-default-music-service.png" alt="" />
                            {/* <p>Youtube</p> */}
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
              
                </div>
                <div className='second2 seven'>
                   <div className='applogo'>
                        <div className='applogoin'>
                            <img  style={{height:'3vmin'}} src="https://www.freepnglogos.com/uploads/soundcloud-logo-png/soundcloud-logo-soundcloud-icon-logo-png-transparent-svg-vector-bie-supply-13.png" alt="" />
                            <p className='orangecloud'>SOUNDCLOUD</p>
                        </div>
                        <img style={{height:'3.2vmin'}} src={Delete} alt="" />
                   </div>
                   <input onChange={(e)=>setInput(e.target.value)} value={input} className='second2input' type="text" placeholder='Enter Spotify URL' />
                
                </div>
                <div className='second3'>
                    <img style={{height:'3.2vmin'}}  src={AddService} alt="" />
                    <p>Add services</p>
                </div>
            </div>
       </div>
    </>
  )
}

export default LinkPut
