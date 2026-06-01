import "reflect-metadata";
import "dotenv/config";
import express from "express";
import { AppDataSource } from "./data-source";
import cursoRoutes from "./src/routes/cursoRoute";

const app = express();
app.use(express.json());

// Inicia a conexão com o banco ANTES de subir o servidor
AppDataSource.initialize()
  .then(() => {
    console.log("✅ Banco de dados conectado!");

    // Rotas
    app.use("/api", cursoRoutes);

    // Inicia o servidor só após conectar ao banco
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Erro ao conectar ao banco:", err);
    process.exit(1); // encerra se não conseguir conectar
  });