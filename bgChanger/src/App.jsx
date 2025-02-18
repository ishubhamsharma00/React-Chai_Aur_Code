import { useState } from 'react'


function App() {
  const [color, setColor] = useState("black")
  return (
    <div className='duration-200 h-screen w-screen' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "red"}}>Red</button>
          <button
          onClick={()=> setColor("blue")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "blue"}}>Blue</button>
          <button
          onClick={()=> setColor("yellow")}
          className='outline-none px-4 py-1 rounded-xl text-black' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
          onClick={()=> setColor("green")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "green"}}>Green</button>
          <button
          onClick={()=> setColor("white")}
          className='outline-none px-4 py-1 rounded-xl text-black' style={{backgroundColor: "white"}}>White</button>
          <button
          onClick={()=> setColor("pink")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "Pink"}}>Pink</button>
          <button
          onClick={()=> setColor("purple")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "purple"}}>Purple</button>
          <button
          onClick={()=> setColor("orange")}
          className='outline-none px-4 py-1 rounded-xl text-white' style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>
    </div>
  )
}

export default App
