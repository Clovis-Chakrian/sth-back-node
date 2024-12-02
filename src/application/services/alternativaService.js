import { AlternativaRepository } from "../../infra/repositories/alternativaRepository.js";

const alternativaRepository = new AlternativaRepository();

const alternativaService = {
  async getAll() {
    return await alternativaRepository.findAll();
  },

  async getById(id) {
    return await alternativaRepository.findById(id);
  },

  async create(Alternativa) {
    const alternativaSalva = await alternativaRepository.create(Alternativa);

    return alternativaSalva;
  },

  async update(id, Alternativa) {
    const alternativaSalva = await alternativaRepository.update(id, Alternativa);

    return alternativaSalva;
  },

  async delete(id) {
    await alternativaRepository.delete(id);
  }
};

export { alternativaService };