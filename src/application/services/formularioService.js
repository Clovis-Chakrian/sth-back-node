import { FormularioRepository } from "../../infra/repositories/formularioRepository.js";

const formularioRepository = new FormularioRepository();

const formularioService = {
  async getAll() {
    return await formularioRepository.findAll();
  },

  async getById(id) {
    return await formularioRepository.findById(id);
  },

  async create(formulario) {
    const formularioSalvo = await formularioRepository.create(formulario);
    return formularioSalvo;
  },

  async update(id, formulario) {
    const formularioAtualizado = await formularioRepository.update(
      id,
      formulario
    );
    return formularioAtualizado;
  },

  async delete(id) {
    await formularioRepository.delete(id);
  },
};

export { formularioService };
