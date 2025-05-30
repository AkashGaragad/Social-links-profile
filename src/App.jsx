import React from 'react';
import avatar from './assets/images/AkashGaragad.jpg';
import './App.css'

function App() {
  return (
    <>
      <main className="flex justify-center flex-col items-center h-screen m-auto">
        <div className=" p-5  bg-zinc-900 m-8 shadow-lg  hover:shadow-zinc-600 rounded-xl transition-shadow ">
          <div className="flex justify-center flex-col items-center">
            <img className="h-32 w-32 rounded-full cursor-pointer my-5" src={avatar} alt="img" />
            <h2 className="leading-8  text-4xl font-bold text-white"> Akash Garagad</h2>
            <h3 className=" leading-8 text-lg text-yellow-300 font-semibold color"  >India, Karnataka</h3>
            <p className=" text-white text-sm font-normal leading-8"> "Front-end developer and avid reader."</p>
          </div>

          <div className="flex justify-center flex-col items-center  " >
            <button className="btn-common" type="button"><a href="https://github.com/AkashGaragad" target='_blank'>GitHub</a></button>
            <button className="btn-common" type="button"><a href="https://www.frontendmentor.io/profile/AkashGaragad" target='_blank'>Frontend Mentor</a></button>
            <button className="btn-common" type="button"><a href="https://in.linkedin.com/in/akash-garagad" target='_blank'>LinkedIn</a></button>
            <button className="btn-common" type="button"><a href="https://x.com/AkashGaragad" target='_blank'>Twitter</a></button>
            <button className="btn-common" type="button"><a href="https://www.instagram.com/akashgaragad_26/" target='_blank'>Instagram</a></button>


          </div>
        </div>

      </main>
      {/* <div  className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                  Coded by <a href="#">AkashGaragad</a>.
         </div> */}
    </>

  )

}

export default App
