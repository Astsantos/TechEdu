import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Turma } from './Turma';

@Entity('Curso')
export class Curso {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ length: 200 })
  nome_curso!: string;

  @Column({ type: 'text', nullable: true })
  descricao_curso!: string;

  @Column({ type: 'smallint', unsigned: true })
  carga_horaria!: number;

  @Column({ type: 'text', nullable: true })
  matriz_curricular!: string;

  @Column({ type: 'enum', enum: ['ativo', 'inativo'], default: 'ativo' })
  status!: 'ativo' | 'inativo';

  @OneToMany(() => Turma, (turma) => turma.curso)
  turmas!: Turma[];
}