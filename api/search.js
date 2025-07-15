export default async function handler(req, res) {
  const query = req.query.query;

  if (!query) return res.status(400).json({ error: 'Query inválida' });

  const apiKey = process.env.TMDB_API_KEY;
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
  const tmdbRes = await fetch(url);
  const data = await tmdbRes.json();

  res.status(200).json(data);
}
