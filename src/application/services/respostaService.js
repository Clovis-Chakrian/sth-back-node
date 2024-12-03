import { RespostaRepository } from "../../infra/repositories/respostaRepository.js";
import { Resposta } from "../../domain/entities/resposta.js";

const respostaRepository = new RespostaRepository();

const respostaService = {
  async getAll() {
     // Realiza a consulta ao banco
     //const respostas = await Resposta.findAll();
     //console.log('Respostas no Service:', respostas);

     // Se encontrar respostas, retorna elas, senão retorna um array vazio
     //return respostas || [];
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