export const getPopularMovies = async () => {
    try {
        const response = await fetch('http://localhost:3000/api/popular');
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
        const response = await fetch(
            `http://localhost:3000/api/search?query=${encodeURIComponent(query)}`
        );

        // verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            const text = await response.text(); 
            // lê o conteúdo real da resposta para debug
            console.error("Resposta inválida:", text);
            throw new Error("Erro na requisição");
        }

        const data = await response.json();
        return data.results || [];
    } catch (error) {
        console.error("Error fetching movies:", error);
        return [];
    }
};
