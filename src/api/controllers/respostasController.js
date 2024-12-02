import { Router } from "express";
import { respostaService } from "../../application/services/respostaService.js";

const respostasController = Router();

respostasController.get('/', async (req, res, next) => {
  try {
    const respostas = await respostaService.getAll();
    console.log('Respostas encontradas:', respostas);
    return res.status(200).json(respostas);
    
  } catch (error) {
    next(error);
  }
});

respostasController.get('/:id', async (req, res, next) => {
  try {
    const resposta = await respostaService.getById(req.params.id);

    res.status(200).json(resposta);
  } catch (error) {
    next(error);
  }
});

respostasController.post('/', async (req, res, next) => {
  try {
    const resposta = await respostaService.create({ ...req.body });

    res.status(201).json(resposta);
  } catch (error) {
    next(error);
  }
});

respostasController.put('/:id', async (req, res, next) => {
  try {
    const respostaAtualizada = await respostaService.update(req.params.id, { ...req.body });

    res.status(200).json(respostaAtualizada);
  } catch (error) {
    next(error);
  }
});

respostasController.delete('/:id', async (req, res, next) => {
  try {
    await respostaService.delete(id);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export { respostasController };