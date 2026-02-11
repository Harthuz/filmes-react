import express from "express";

const router = express.Router();

router.get("/", async (req, res) => {
  const apiKey = process.env.TMDB_API_KEY;

  // verifica se a chave existe
  if (!apiKey) {
    return res.status(500).json({ error: "TMDB_API_KEY não definida" });
  }

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
    );

    // verifica se a resposta da API foi bem-sucedida
    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({ error: text });
    }

    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erro ao buscar dados" });
  }
});

export default router;
