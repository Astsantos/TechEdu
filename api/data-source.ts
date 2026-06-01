import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./src/models/Usuario";
import { Curso } from "./src/models/Curso";
import { Matricula } from "./src/models/Matricula";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "sistema_cursos",
  synchronize: false,   // cria/atualiza tabelas automaticamente (só em dev!)
  logging: false,
  entities: [Usuario, Curso, Matricula],
});