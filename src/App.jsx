import React from 'react'
import Header from "./compnent/Header"
import Read from "./compnent/Read"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import "./App.css"
import Create from './compnent/Create'
import Updated from './compnent/Updated'
const App = () => {
  return (
    <div className='app'>
      
     <BrowserRouter>
       <Header />
       <Routes>
        <Route path='/create' element={<Create />}/>
        <Route path='/' element={<Read />}/>
        <Route path='/update' element={<Updated />} />
       </Routes>
     </BrowserRouter>
     
    </div>
  )
}

export default App
