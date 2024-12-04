import { RespostaRepository } from "../../infra/repositories/respostaRepository.js";

const respostaRepository = new RespostaRepository();

const respostaService = {
  async getAll() {
     return await respostaRepository.findAll();
  },

  async getById(id) {
    return await respostaRepository.findById(id);
  },

  async create(resposta) {
    const respostaSalva = await respostaRepository.create(resposta);

    return respostaSalva;
  },

  async update(id, resposta) {
    const respostaSalva = await respostaRepository.update(id, resposta);

    return respostaSalva;
  },

  async delete(id) {
    await respostaRepository.delete(id);
  }
};

export { respostaService };