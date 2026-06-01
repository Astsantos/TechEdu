import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Curso } from "./Curso";
import { Usuario } from "./Usuario";

@Entity("matricula")
export class Matricula {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "date" })
  data!: string; // formato 'YYYY-MM-DD'

  // Chave estrangeira para Curso
  @ManyToOne(() => Curso, (curso) => curso.matriculas, { onDelete: "CASCADE" })
  @JoinColumn({ name: "cursoId" })
  curso!: Curso;

  // Chave estrangeira para Usuario
  @ManyToOne(() => Usuario, (usuario) => usuario.matriculas, { onDelete: "CASCADE" })
  @JoinColumn({ name: "usuarioId" })
  usuario!: Usuario;
}