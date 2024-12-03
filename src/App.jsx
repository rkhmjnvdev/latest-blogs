import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Admin from './Pages/Admin/Admin'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
     <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>}/>  
      <Route path='/admin' element={<Admin/>}/>  
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App