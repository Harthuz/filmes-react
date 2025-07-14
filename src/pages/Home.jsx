import '/src/css/Home.css'
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'
import { useState, useEffect } from 'react';
import { getPopularMovies } from '/src/services/api.js'


function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const movies = await getPopularMovies()
                console.log(movies)
                setMovies(movies)
            } catch (error) {
                console.error(error)
                setError("Falha ao carregar os filmes")
            }
            finally {
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setsearchQuery("")
    };

    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder='Procurar filmes'
                    className='search-input'
                    value={searchQuery}
                    onChange={(e) => setsearchQuery(e.target.value)}
                />
                <button className="search-btn" type="submit">Procurar</button>
            </form>

            {loading ? (
                <Spinner />
            ) : (
                <div className="movies-grid">
                    {movies.map((movie) => (
                        movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                            <MovieCard movie={movie} key={movie.id} />
                        )
                    ))}
                </div>
            )}
        </div>
    )
}

export default Home