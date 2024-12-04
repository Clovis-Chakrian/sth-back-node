import { Aluno } from "../../domain/entities/aluno.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class AlunoRepository extends BaseRepository {
  constructor() {
    super(Aluno);
  }
}

export { AlunoRepository };
