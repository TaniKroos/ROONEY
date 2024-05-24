import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  console.log(import.meta.env.VITE_APPWRITE_URL)
  return (
    <>
      <div className='p-4 bg-red-300'>
        <h1 className=''>Wayne Rooney</h1>
      </div>
    </>
  )
}

export default App
