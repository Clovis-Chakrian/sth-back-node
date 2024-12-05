import { Resposta } from "../../domain/entities/resposta.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class RespostaRepository extends BaseRepository {
  constructor() {
    super(Resposta);
  }
};

export { RespostaRepository };