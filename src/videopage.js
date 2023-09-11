import React from 'react'
import YouTube from "react-youtube";
import caset from './caset.png'

export default function videopage() {
    const videoOptions = {
        height:'700',
        width:'1350',
        playerVars: {
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 1,
          loop: 1,
        }
      };
  return (
    <>
        <div className='heading'>
            <h1 className='h-text'>FRIENDS SONGS</h1>
            <hr style={{width:'10rem', marginLeft:'0%', border: '3px solid white', marginTop:"-20px"}} />
        </div>
        <div className='video'>
         <YouTube videoId="df3Id8Kuf-w" opts={videoOptions} />
          </div>
          <div className='top-pics'>
          <h1 className='h2-text'>Top Pics</h1>
          <hr style={{width:'5rem', marginLeft:'0%', border: '3px solid white', marginTop:"-15px"}} />
        
          <br/><br/>
          <div className='card-head'>
          <div className='card card-img'></div>
          <div className='card card-img1'></div>
          <div className='card card-img2'></div>
          <div className='card card-img3'></div>
          <div className='card card-img4'></div>  
          </div>
        </div>
        <br/><br/>
        <div style={{textAlign: 'center'}}>
        <img src={caset} style={{marginBottom:'-390px', marginLeft:'975px', rotate:'180deg'}} alt=""/>
        <div className='explore'>
        <div className="strips"></div>
        <br/><br/>
        <div className="strips"></div>
        <br/><br/>
        <div className="strips"></div>
        <br/><br/>
        <div className="strips"></div>
        <br/><br/>
        <div className="strips"></div>
        <br/><br/>
        <div className="strips"></div>
        </div>
        <br/><br/>  <br/><br/>  <br/><br/>
       
        </div>
       
    </>
  )
}
