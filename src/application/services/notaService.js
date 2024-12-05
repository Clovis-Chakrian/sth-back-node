import { NotaRepository } from "../../infra/repositories/notaRepository.js";

const notaRepository = new NotaRepository();

const notaService = {
  async getAll() {
    return await notaRepository.findAll();
  },

  async getById(id) {
    return await notaRepository.findById(id);
  },

  async create(nota) {
    const notaSalva = await notaRepository.create(nota);
    return notaSalva;
  },

  async update(id, nota) {
    const notaAtualizada = await notaRepository.update(id, nota);
    return notaAtualizada;
  },

  async delete(id) {
    await notaRepository.delete(id);
  },
};

export { notaService };
