import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [max, setMax] = useState(100)
  const [random, setRandom] = useState(null)
  
  const handleGenerate = useCallback(()=>{
    const generate = async()=>{
      try{
        const response = await fetch(`http://${import.meta.env.VITE_BACKEND_HOST}:${import.meta.env.VITE_BACKEND_PORT}/max/${max}`)
        const responseJson = await response.json()
        const num = responseJson.num
        setRandom(num)
      }
      catch(error){
        setRandom(null)
        console.log(error)
      }
    }
    generate()
  },[max])

  return (
    <>
      <div className="w-screen h-screen flex flex-col items-center justify-center gap-4 bg-gray-600">
        <h1 className='text-4xl text-white font-bold mx-4 text-center'>Generate a Random Number</h1>
        <div className='flex flex-row flex-wrap justify-center items-center gap-2 h-12 w-full'>
          <input
            type="number"
            placeholder='Max number...'
            value={max}
            onChange={(e)=>{setMax(e.target.value)}}
            className='h-full w-3/12 md:w-1/12 px-2 rounded-md border-2 border-black focus:outline-none focus:border-blue-600 text-xl'
          ></input>
          <button
            onClick={handleGenerate}
            className='h-full text-white text-xl bg-green-600 px-2 py-1 rounded-md shadow-md shadow-black hover:shadow-none hover:opacity-80'
          >
            Generate
          </button>
        </div>
        {random && 
          <h2 className='text-white text-xl font-semibold text-start mx-4'>Your random number is {random}</h2>
        }
      </div>
    </>
  )
}

export default App
