import { PerguntaRepository } from "../../infra/repositories/perguntaRepository.js";

const perguntaRepository = new PerguntaRepository();

const perguntaService = {
  async getAll() {
    return await perguntaRepository.findAll();
  },

  async getById(id) {
    return await perguntaRepository.findById(id);
  },

  async create(pergunta) {
    const perguntaSalva = await perguntaRepository.create(pergunta);

    return perguntaSalva;
  },

  async update(id, pergunta) {
    const perguntaSalva = await perguntaRepository.update(id, pergunta);

    return perguntaSalva;
  },

  async delete(id) {
    await perguntaRepository.delete(id);
  }
};

export { perguntaService };