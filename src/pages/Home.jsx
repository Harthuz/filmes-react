import MovieCard from '../components/MovieCard'
import { useState } from 'react';

function Home() {
    const [searchQuery, setsearchQuery] = useState("");

    const movies = [
        { id: 1, title: "Batman", release_date: "2020" },
        { id: 2, title: "Superman", release_date: "2019" },
        { id: 3, title: "Spider-Man", release_date: "2018" },
        { id: 4, title: "Iron Man", release_date: "2017" },
        { id: 5, title: "Wonder Woman", release_date: "2021" },
        { id: 6, title: "Thor", release_date: "2016" },
        { id: 7, title: "Captain America", release_date: "2015" },
        { id: 8, title: "Black Panther", release_date: "2022" },
        { id: 9, title: "Doctor Strange", release_date: "2023" },
        { id: 10, title: "Aquaman", release_date: "2018" },
        { id: 11, title: "Flash", release_date: "2020" }
    ]

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

            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && (
                        <MovieCard movie={movie} key={movie.id} />
                    )
                ))}
            </div>
        </div>
    )
}

export default Home