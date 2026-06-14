import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './Usuario';
import { Turma } from './Turma';

@Entity('Matricula')
export class Matricula {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_matricula!: Date;

  @Column({ type: 'enum', enum: ['ativa', 'cancelada'], default: 'ativa' })
  status!: 'ativa' | 'cancelada';

  @ManyToOne(() => Usuario, (usuario) => usuario.matriculas, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;

  @ManyToOne(() => Turma, (turma) => turma.matriculas, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'turma_id' })
  turma!: Turma;
}