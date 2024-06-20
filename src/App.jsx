import { useContext, useState } from 'react'
import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import Projects from './Pages/Projects'
import Dashboard from './Pages/Dashboard'
import Footer from './Components/Footer'
import { tokenAuthContext } from './contexts/AuthContext'

function App() {
  const [count, setCount] = useState(0)
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Auth/>} />
        <Route path='/register' element={<Auth insideRegister={true} />} />
        <Route path='/projects' element={isAuthorised? <Projects/>:<Navigate to={'/login'} />} />
        <Route path='/dashboard' element={isAuthorised?<Dashboard/>:<Navigate to={'/login'} />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
