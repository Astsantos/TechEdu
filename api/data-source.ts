import "reflect-metadata";
import { DataSource } from "typeorm";
import { Usuario } from "./src/models/Usuario";
import { Curso } from "./src/models/Curso";
import { Turma } from "./src/models/Turma";
import { Matricula } from "./src/models/Matricula";
import { Atendimento } from "./src/models/Atendimento";
import { Mensagem } from "./src/models/Mensagem";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASS || "",
  database: process.env.DB_NAME || "sistema_cursos",
  synchronize: false, // tabelas já existem no banco
  logging: false,
  entities: [Usuario, Curso, Turma, Matricula, Atendimento, Mensagem],
});