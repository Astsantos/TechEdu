import "reflect-metadata";
import "dotenv/config";
import cors from 'cors';
import express from "express";
import { AppDataSource } from "./data-source";
import cursoRoutes from "./src/routes/cursoRoute";

const app = express();

app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());

app.get('/teste', (req, res) => res.json({ ok: true }));

AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados conectado!");
    app.use("/api", cursoRoutes);
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao banco:", err);
    process.exit(1);
  });
