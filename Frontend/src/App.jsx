import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collections from './pages/Collections'


function App() {

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px[9vw]'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/collections' element={<Collections />} />
      </Routes>

    </div>
  )
}

export default App
