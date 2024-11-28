import { Router } from "express";
import { perguntaService } from "../../application/services/perguntaService.js";

const perguntasController = Router();

perguntasController.get('/', async (req, res, next) => {
  try {
    const perguntas = await perguntaService.getAll();
    return res.status(200).json(perguntas);
  } catch (error) {
    next(error);
  }
});

perguntasController.get('/:id', async (req, res, next) => {
  try {
    const pergunta = await perguntaService.getById(req.params.id);

    res.status(200).json(pergunta);
  } catch (error) {
    next(error);
  }
});

perguntasController.post('/', async (req, res, next) => {
  try {
    const pergunta = await perguntaService.create({ ...req.body });

    res.status(201).json(pergunta);
  } catch (error) {
    next(error);
  }
});

perguntasController.put('/:id', async (req, res, next) => {
  try {
    const perguntaAtualizada = await perguntaService.update(req.params.id, { ...req.body });

    res.status(200).json(perguntaAtualizada);
  } catch (error) {
    next(error);
  }
});

perguntasController.delete('/:id', async (req, res, next) => {
  try {
    await perguntaService.delete(id);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export { perguntasController };