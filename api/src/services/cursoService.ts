import { AppDataSource } from '../../data-source';
import { Curso } from '../models/Curso';

const cursoRepository = AppDataSource.getRepository(Curso);

export const createCurso = async (data: {
  nome_curso: string;
  descricao_curso: string;
  carga_horaria: number;
  matriz_curricular: Buffer;
}) => {
  const curso = cursoRepository.create(data);
  return await cursoRepository.save(curso);
};

export const getAllCursos = async () => {
  return await cursoRepository.find();
};

export const getCursoById = async (id: number) => {
  return await cursoRepository.findOneBy({ id });
};

export const updateCurso = async (id: number, data: Partial<Curso>) => {
  await cursoRepository.update(id, data);
  return await cursoRepository.findOneBy({ id });
};

export const deleteCurso = async (id: number) => {
  const curso = await cursoRepository.findOneBy({ id });
  if (!curso) return null;
  await cursoRepository.remove(curso);
  return true;
};