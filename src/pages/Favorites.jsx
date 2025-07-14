import '/src/css/Favorites.css'
import { useMovieContext } from '../contexs/MovieContext'
import MovieCard from '/src/components/MovieCard'

function Favorites() {
  const { favorites } = useMovieContext()

  if (favorites.length>0) {
    return (
      <div className='favorites-empty'>
        <h2>Filmes favoritos</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    )
  } else {
    return (
      <div className="favorites-empty">
        <h2>Sem filmes favoritados</h2>
        <p>Favorite filmes e eles aparecerão aqui</p>
      </div>
    )
  }

}

export default Favorites