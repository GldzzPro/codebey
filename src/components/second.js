import React from 'react'
import "../styles/components/second.css"

function second() {

    const tab = [1,2,3];

  return (
    <div  className="exemple" id='videos'>
        <div className='Title'>
        <img src=''/> 
        <h1> An Amazing App Can Change Your Daily Life
        </h1>
        </div>
        <div className='block'> 
        { 
            tab.map(()=>{
            return <div className='box'>
         <iframe width="420" height="315" src="https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1"> </iframe>
         <h4> video name</h4>
         <p> description roula rasta zarzis souihel city</p>
         <a href='https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=1&mute=1'> go to youtube  </a>
          </div>
            })
        }
          
        </div>
    </div>
  )
}

export default second