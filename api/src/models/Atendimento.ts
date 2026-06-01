import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('Atendimento')
export class Atendimento {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ type: 'date' })
  data!: string;

  @Column({ type: 'time' })
  horario!: string;

  @Column({ type: 'text', nullable: true })
  descricao!: string;

  @Column({
    type: 'enum',
    enum: ['agendado', 'em_andamento', 'concluido', 'cancelado'],
    default: 'agendado',
  })
  status!: 'agendado' | 'em_andamento' | 'concluido' | 'cancelado';

  @ManyToOne(() => Usuario, (usuario) => usuario.atendimentos, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'aluno_id' })
  aluno!: Usuario;

  @ManyToOne(() => Usuario, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'funcionario_id' })
  funcionario!: Usuario | null;
}