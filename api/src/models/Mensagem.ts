import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Usuario } from './Usuario';

@Entity('Mensagem')
export class Mensagem {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ type: 'enum', enum: ['confirmacao_matricula', 'lembrete_atendimento'] })
  tipo!: 'confirmacao_matricula' | 'lembrete_atendimento';

  @Column({ type: 'text' })
  conteudo!: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_envio!: Date;

  @ManyToOne(() => Usuario, (usuario) => usuario.mensagens, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'usuario_id' })
  usuario!: Usuario;
}