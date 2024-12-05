import { Router } from "express";
import { alunoService } from "../../application/services/alunoService.js";

const alunosController = Router();

alunosController.get('/', async (req, res, next) => {
  try {
    const alunos = await alunoService.getAll();
    return res.status(200).json(alunos);
  } catch (error) {
    next(error);
  }
});

alunosController.get('/:id', async (req, res, next) => {
  try {
    const aluno = await alunoService.getById(req.params.id);
    return res.status(200).json(aluno);
  } catch (error) {
    next(error);
  }
});

alunosController.post('/', async (req, res, next) => {
  try {
    const aluno = await alunoService.create({ ...req.body });
    return res.status(201).json(aluno);
  } catch (error) {
    next(error);
  }
});

alunosController.put('/:id', async (req, res, next) => {
  try {
    const alunoAtualizado = await alunoService.update(req.params.id, { ...req.body });
    return res.status(200).json(alunoAtualizado);
  } catch (error) {
    next(error);
  }
});

alunosController.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await alunoService.delete(id);
    return res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export { alunosController };
