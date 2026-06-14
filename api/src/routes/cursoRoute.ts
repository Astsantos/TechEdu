import { Router } from 'express';
import * as cursoController from '../controllers/cursoController';
import { uploadFile } from '../middleware/upload';
import { validateCurso } from '../middleware/validarCurso';

const router = Router();

router.post('/cursos', uploadFile, validateCurso, cursoController.createCurso);
router.get('/cursos', cursoController.getAllCursos);
router.get('/cursos/:id', cursoController.getCursoById);
router.put('/cursos/:id', uploadFile, cursoController.updateCurso);
router.delete('/cursos/:id', cursoController.deleteCurso);

export default router;