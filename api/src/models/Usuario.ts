import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from "typeorm";
import { Matricula } from "./Matricula";

@Entity("usuario")
export class Usuario {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 50 })
  nome!: string;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column()
  senha!: string;

  // Um usuário pode ter várias matrículas
  @OneToMany(() => Matricula, (matricula) => matricula.usuario)
  matriculas!: Matricula[];
}