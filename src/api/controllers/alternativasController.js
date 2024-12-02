import { Router } from "express";
import { alternativaService } from "../../application/services/alternativaService.js";

const alternativasController = Router();

alternativasController.get("/", async (req, res, next) => {
  try {
    const alternativas = await alternativaService.getAll();
    return res.status(200).json(alternativas);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao listar alternativas!", message: error.message, stack: error.stack });
  }
});

alternativasController.get("/:id", async (req, res, next) => {
  try {
    const alternativa = await alternativaService.getById(req.params.id);

    res.status(200).json(alternativa);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao buscar alternativa!", message: error.message, stack: error.stack });
  }
});

alternativasController.post("/", async (req, res, next) => {
  try {
    const alternativa = await alternativaService.create({ ...req.body });

    res.status(201).json(alternativa);
  } catch (error) {
    res
      .status(500)
      .json({
        error: "Erro ao criar alternativa!",
        message: error.message,
        stack: error.stack,
      });
  }
});

alternativasController.put("/:id", async (req, res, next) => {
  try {
    const alternativaAtualizada = await alternativaService.update(
      req.params.id,
      { ...req.body }
    );

    res.status(200).json(alternativaAtualizada);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao atualizar alternativa!", message: error.message, stack: error.stack });
  }
});

alternativasController.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await alternativaService.delete(id);

    return res.status(204).json({message:"Alternativa, deletada com sucesso!"});
  } catch (error) {
    res
      .status(500)
      .json({ error: "Erro ao deletar alternativa!", message: error.message, stack: error.stack });
  }
});

export { alternativasController };
