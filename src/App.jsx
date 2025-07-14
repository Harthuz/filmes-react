import '/src/css/App.css'

import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexs/MovieContext'

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  )
}

export default App
