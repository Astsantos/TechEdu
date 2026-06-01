import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Matricula } from './Matricula';

@Entity('curso')
export class Curso {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ length: 100 })
  nome_curso!: string;

  @Column({ length: 255 })
  descricao_curso!: string;

  @Column({ type: 'int' })
  carga_horaria!: number;

  @Column({ type: 'blob', nullable: true })
  matriz_curricular!: Buffer;

  @OneToMany(() => Matricula, (matricula) => matricula.curso)
  matriculas!: Matricula[];
}