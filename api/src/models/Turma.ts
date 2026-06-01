import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Curso } from './Curso';
import { Matricula } from './Matricula';

@Entity('Turma')
export class Turma {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ length: 100, nullable: true })
  horario!: string;

  @Column({ type: 'date' })
  data_inicio!: string;

  @Column({ type: 'date' })
  data_fim!: string;

  @Column({ type: 'smallint', unsigned: true })
  vagas_totais!: number;

  @Column({ type: 'enum', enum: ['aberta', 'lotada', 'encerrada'], default: 'aberta' })
  status!: 'aberta' | 'lotada' | 'encerrada';

  @ManyToOne(() => Curso, (curso) => curso.turmas, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'curso_id' })
  curso!: Curso;

  @OneToMany(() => Matricula, (matricula) => matricula.turma)
  matriculas!: Matricula[];
}