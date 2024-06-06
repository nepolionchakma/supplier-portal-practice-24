
import { useEffect } from 'react';
import './App.css'
import LayOut from './LayOut'
import { io } from "socket.io-client";


function App() {
  // useEffect(() => {
  //   const socket = io("http://localhost:8000");
  //   console.log(socket.on('firstEvent', (msg) => {
  //     console.log(msg)
  //   }))
  // }, []);


  return (
    <div>
      <LayOut />
    </div>
  )
}

export default App
