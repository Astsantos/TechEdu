import { Request, Response } from 'express';
import * as cursoService from '../services/cursoService';

export const createCurso = async (req: Request, res: Response) => {
  try {
    const { nome_curso, descricao_curso, carga_horaria } = req.body;
    const matriz_curricular = req.file?.buffer;

    if (!matriz_curricular) {
      return res.status(400).json({ error: 'Arquivo para matriz curricular não anexado.' });
    }

    const newCurso = await cursoService.createCurso({
      nome_curso,
      descricao_curso,
      carga_horaria,
      matriz_curricular,
    });

    res.status(201).json(newCurso);
  } catch (error) {
    res.status(500).json({ error: 'Criação do curso falhou.' });
  }
};

export const getAllCursos = async (req: Request, res: Response) => {
  try {
    const cursos = await cursoService.getAllCursos();
    const cursosWithoutFile = cursos.map(({ matriz_curricular, ...rest }) => rest);
    res.json(cursosWithoutFile);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar cursos.' });
  }
};

export const getCursoById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params['id'] as string);
    const curso = await cursoService.getCursoById(id);
    if (!curso) {
      return res.status(404).json({ error: 'Curso não encontrado.' });
    }
    res.json({
      ...curso,
      matriz_curricular: curso.matriz_curricular ?? null,
    });
  } catch (error) {
    res.status(500).json({ error: 'Falha ao buscar curso.' });
  }
};

export const updateCurso = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params['id'] as string);
    const updateData: any = { ...req.body };
    if (req.file) {
      updateData.matriz_curricular = req.file.buffer;
    }
    const updated = await cursoService.updateCurso(id, updateData);
    if (!updated) {
      return res.status(404).json({ error: 'Curso não encontrado.' });
    }
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: 'Falha ao atualizar curso.' });
  }
};

export const deleteCurso = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params['id'] as string);
    const deleted = await cursoService.deleteCurso(id);
    if (!deleted) {
      return res.status(404).json({ error: 'Curso não encontrado.' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Falha ao deletar curso.' });
  }
};