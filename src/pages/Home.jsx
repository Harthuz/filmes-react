import '/src/css/Home.css'
import MovieCard from '../components/MovieCard'
import Spinner from '../components/Spinner'
import { useState, useEffect } from 'react';
import { getPopularMovies, getMovies } from '/src/services/api.js'


function Home() {
    const [searchQuery, setsearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const movies = await getPopularMovies()
                // console.log(movies)
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

    const handleSearch = async (e) => {
        e.preventDefault()

        if (!searchQuery.trim()) return
        if (loading) return

        setLoading(true)

        try {
            const searchResults = await getMovies(searchQuery)
            setMovies(searchResults)
            setError(null)
        } catch (error) {
            setError("Falha ao carregar os filmes")
        }
        finally {
            setLoading(false)
        }
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

            {error && <p className="error-message">{error}</p>}

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