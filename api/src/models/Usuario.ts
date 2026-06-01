import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Matricula } from './Matricula';
import { Atendimento } from './Atendimento';
import { Mensagem } from './Mensagem';

@Entity('Usuario')
export class Usuario {
  @PrimaryGeneratedColumn({ unsigned: true })
  id!: number;

  @Column({ length: 150 })
  nome!: string;

  @Column({ length: 255, unique: true })
  email!: string;

  @Column({ length: 255 })
  senha!: string;

  @Column({ type: 'char', length: 11, unique: true })
  cpf!: string;

  @Column({ length: 20, nullable: true })
  telefone!: string;

  @Column({ type: 'enum', enum: ['aluno', 'funcionario'] })
  tipo!: 'aluno' | 'funcionario';

  @Column({ type: 'enum', enum: ['ativo', 'inativo'], default: 'ativo' })
  status!: 'ativo' | 'inativo';

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  data_cadastro!: Date;

  @OneToMany(() => Matricula, (matricula) => matricula.usuario)
  matriculas!: Matricula[];

  @OneToMany(() => Atendimento, (atendimento) => atendimento.aluno)
  atendimentos!: Atendimento[];

  @OneToMany(() => Mensagem, (mensagem) => mensagem.usuario)
  mensagens!: Mensagem[];
}
