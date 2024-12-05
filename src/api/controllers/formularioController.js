import { Router } from "express";
import { formularioService } from "../../application/services/formularioService.js";

const formularioController = Router();

formularioController.get("/", async (req, res, next) => {
  try {
    const formularios = await formularioService.getAll();
    return res.status(200).json(formularios);
  } catch (error) {
    next(error);
  }
});

formularioController.get("/:id", async (req, res, next) => {
  try {
    const formulario = await formularioService.getById(req.params.id);

    if (!formulario) {
      return res.status(404).json({ message: "Formulário não encontrado." });
    }

    res.status(200).json(formulario);
  } catch (error) {
    next(error);
  }
});

formularioController.post("/", async (req, res, next) => {
  try {
    const novoFormulario = await formularioService.create({ ...req.body });

    return res.status(201).json(novoFormulario);
  } catch (error) {
    next(error);
  }
});

formularioController.put("/:id", async (req, res, next) => {
  try {
    const formularioAtualizado = await formularioService.update(req.params.id, {
      ...req.body,
    });

    if (!formularioAtualizado) {
      return res
        .status(404)
        .json({ message: "Formulário não encontrado para atualização." });
    }

    res.status(200).json(formularioAtualizado);
  } catch (error) {
    next(error);
  }
});

formularioController.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    await formularioService.delete(id);

    return res.status(204).json();
  } catch (error) {
    next(error);
  }
});

export { formularioController };
