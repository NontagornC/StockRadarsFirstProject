import './App.css'
import { useState,useEffect } from 'react'
import fetchData from './utils/fetchData'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import SingleStock from './components/SingleStock'
import SignUp from './components/Navbar/SignUp'

function App() {
  const [data,setData]=useState([])
    const fetch=()=>{
        fetchData('https://stockradars.co/assignment/data.php').then((result)=>{
            console.log(result);
            setData((result as any).data)
        }).catch((error)=>{
            console.error(error)
        })
    }
    useEffect(()=>{
        // fetch()
    },[])
  return (
    <div className='app'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/singleStock' element={<SingleStock/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
