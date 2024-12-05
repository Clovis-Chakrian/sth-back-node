import { AlunoRepository } from "../../infra/repositories/alunoRepository.js";

const alunoRepository = new AlunoRepository();

const alunoService = {
  async getAll() {
    return await alunoRepository.findAll();
  },

  async getById(id) {
    return await alunoRepository.findById(id);
  },

  async create(aluno) {
    return await alunoRepository.create(aluno);
  },

  async update(id, aluno) {
    const alunoAtualizado = await alunoRepository.update(id, aluno);
    return alunoAtualizado;
  },

  async delete(id) {
    await alunoRepository.delete(id);
  },
  
};

export { alunoService };
