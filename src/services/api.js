const API_KEY = "ba9a36bbcff23adb8e16e30f13dd02f2"
const BASE_URL = "https://api.themoviedb.org/3"

export const getPopularMovies = async () => {
    try {
        const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        const data = await response.json();
        console.log(data.results)
        return data.results;
    } catch (error) {
        console.error("Error fetching popular movies:", error);
        return [];
    }
};

export const getMovies = async (query) => {
    try {
        const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`)
        const data = await response.json()
        console.log(data)
        return data.results
    } catch (error) {
        console.error("Error fetching movies:", error)
        return []
    }
}

export const getMovieById = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/movie/${id}`, {
            headers: {
                Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYTlhMzZiYmNmZjIzYWRiOGUxNmUzMGYxM2RkMDJmMiIsIm5iZiI6MTc1MjUwNjYzNC40NDMsInN1YiI6IjY4NzUyMTBhNTUwNGY2Y2Q5MGVkODdkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.uA15AVB4o5WjuHn2xy3X3bOSXS6Bl69kbN-gOpNKoUg`
            }
        });
        if (!response.ok) {
            throw new Error("Failed to fetch movie details");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching movie by ID:", error);
        return null;
    }
};

