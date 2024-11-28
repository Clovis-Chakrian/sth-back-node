import { Pergunta } from "../../domain/entities/pergunta.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class PerguntaRepository extends BaseRepository {
  constructor() {
    super(Pergunta);
  }
};

export { PerguntaRepository };