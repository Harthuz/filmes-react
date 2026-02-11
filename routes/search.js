import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const query = req.query.query;

  // valida a query
  if (!query) {
    return res.status(400).json({ error: "Query inválida" });
  }

  const apiKey = process.env.TMDB_API_KEY;

  // valida a chave da API
  if (!apiKey) {
    return res.status(500).json({ error: "TMDB_API_KEY não definida" });
  }

  try {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;

    const tmdbRes = await fetch(url);

    // verifica se o TMDB respondeu corretamente
    if (!tmdbRes.ok) {
      const text = await tmdbRes.text();
      return res.status(tmdbRes.status).json({ error: text });
    }

    const data = await tmdbRes.json();
    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar filmes" });
  }
});

export default router;
