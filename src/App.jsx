import { useState , useEffect} from 'react'
import { useDispatch } from 'react-redux'
import authService from './appwrie/auth'
import './App.css'
import authSlice from './store/authSlice'
import {login , logout} from './store/authSlice'
import { Header , Footer } from './components'

import { Outlet } from 'react-router-dom'
function App() {
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=> {
      if(userData){
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  },[])




  console.log(import.meta.env.VITE_APPWRITE_URL)

  return !loading ? (
    <div className='min-h-screen flex flex-wrap
    content-between bg-gray-400'>

          <div className='w-full block'>
              <Header />
              <main>
                {/* {<Outlet/>} */}
              </main>

              <Footer />
          </div>

    </div>
  ) : null
}

export default App
