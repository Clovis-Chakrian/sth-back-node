import { Router } from "express";
import { notaService } from "../../application/services/notaService.js";

const notaController = Router();

notaController.get("/", async (req, res, next) => {
  try {
    const notas = await notaService.getAll();
    res.status(200).json(notas);
  } catch (error) {
    next(error); 
  }
});

notaController.get("/:id", async (req, res, next) => {
  try {
    const nota = await notaService.getById(req.params.id);
    res.status(200).json(nota);
  } catch (error) {
    next(error);
  }
});

notaController.post("/", async (req, res, next) => {
  try {
    const nota = await notaService.create({ ...req.body });
    res.status(201).json(nota);
  } catch (error) {
    next(error);
  }
});

notaController.put("/:id", async (req, res, next) => {
  try {
    const notaAtualizada = await notaService.update(req.params.id, { ...req.body });
    res.status(200).json(notaAtualizada);
  } catch (error) {
    next(error);
  }
});

notaController.delete("/:id", async (req, res, next) => {
  try {
    await notaService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
});

export { notaController };
