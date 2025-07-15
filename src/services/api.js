const API_KEY = process.env.TMDB_API_KEY

export const getPopularMovies = async () => {
    try {
        const response = await fetch('/api/popular');
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        // console.log(data.results)
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const getMovies = async (query) => {
    try {
        const response = await fetch(`/api/search?query=${encodeURIComponent(query)}`);
        const data = await response.json()
        // console.log(data)
        return data.results
    } catch (error) {
        console.error("Error fetching movies:", error)
        return []
    }
}
