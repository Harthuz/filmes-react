import '/src/css/MovieCard.css'
import { useMovieContext } from '../contexs/MovieContext'

function MovieCard({ movie }) {
    const { isFavorite, addTofavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id)

    function onFavoriteClick(e) {
        e?.preventDefault?.(); // só chama se existir
        if (favorite) removeFromFavorites(movie.id)
        else addTofavorites(movie)
    }

    function formatDate(dateString) {
        const date = new Date(dateString);
        if (isNaN(date)) return dateString;
        const options = { year: 'numeric', month: 'long', day: '2-digit' };
        return date.toLocaleDateString('pt-BR', options);
    }

    return (
        <>
            <div className="movie-card" id={movie.key}>
                <div className="movie-poster">
                    <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavoriteClick}>
                            ❤
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{formatDate(movie.release_date)}</p>
                </div>
            </div>
        </>
    )
}

export default MovieCard;