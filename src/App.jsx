import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{
        src: "a",
        title: "Batman",
        release_date: "2022"
      }}/>
    </>
  )
}

export default App
