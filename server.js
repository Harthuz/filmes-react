import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import popularRoute from "./routes/popular.js";
import searchRoute from "./routes/search.js";

dotenv.config();

const app = express();
const PORT = 3000;

// ativa CORS para o front-end
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// registra as rotas
app.use("/api/popular", popularRoute);
app.use("/api/search", searchRoute);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
