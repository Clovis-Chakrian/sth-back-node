import { Router } from "express";
import { notaService } from "../../application/services/notaService.js";

const notaController = Router();

notaController.get("/", async (req, res) => {
  try {
    const notas = await notaService.getAll();
    res.status(200).json(notas);
  } catch (error) {
    res.status(500).json({ error: "Erro ao listar notas!", message: error.message });
  }
});

notaController.get("/:id", async (req, res) => {
  try {
    const nota = await notaService.getById(req.params.id);
    res.status(200).json(nota);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar nota!", message: error.message });
  }
});

notaController.post("/", async (req, res) => {
  try {
    const nota = await notaService.create({ ...req.body });
    res.status(201).json(nota);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar nota!", message: error.message });
  }
});

notaController.put("/:id", async (req, res) => {
  try {
    const notaAtualizada = await notaService.update(req.params.id, { ...req.body });
    res.status(200).json(notaAtualizada);
  } catch (error) {
    res.status(500).json({ error: "Erro ao atualizar nota!", message: error.message });
  }
});

notaController.delete("/:id", async (req, res) => {
  try {
    await notaService.delete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Erro ao deletar nota!", message: error.message });
  }
});

export { notaController };
