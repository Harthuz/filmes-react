import { createContext, useState, useContext, useEffect } from 'react';

const MovieContex = createContext()

export const useMovieContext = () => useContext(MovieContex)

export const MovieProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(() =>{
        const storedFavorites = localStorage.getItem("favorites")
        return storedFavorites ? JSON.parse(storedFavorites) : []
    });

    useEffect(() => {
      const storedFavorites = localStorage.getItem("favorites")

      if (storedFavorites) setFavorites(JSON.parse(storedFavorites))
    }, [])

    useEffect(() => {
      localStorage.setItem("favorites", JSON.stringify(favorites))
        
    }, [favorites])
    
    const addTofavorites = (movie) => {
        setFavorites(prev => [...prev, movie])
    }

    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId)
    }

    const value = {
        favorites,
        addTofavorites,
        removeFromFavorites,
        isFavorite
    }

    return <MovieContex.Provider value={value}>
        {children}
    </MovieContex.Provider>
}