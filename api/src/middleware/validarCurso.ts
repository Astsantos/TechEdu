import { Request, Response, NextFunction } from 'express';

export const validateCurso = (req: Request, res: Response, next: NextFunction) => {
  const { nome_curso, descricao_curso, carga_horaria } = req.body;

  if (!nome_curso || nome_curso.trim() === '') {
    return res.status(400).json({ error: 'O campo nome_curso é obrigatório.' });
  }

  if (!descricao_curso || descricao_curso.trim() === '') {
    return res.status(400).json({ error: 'O campo descricao_curso é obrigatório.' });
  }

  if (!carga_horaria || isNaN(Number(carga_horaria))) {
    return res.status(400).json({ error: 'O campo carga_horaria deve ser um número.' });
  }

  if (!req.file) {
    return res.status(400).json({ error: 'O arquivo matriz_curricular é obrigatório.' });
  }

  next();
};