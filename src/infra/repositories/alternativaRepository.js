import { Alternativa } from "../../domain/entities/alternativa.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class AlternativaRepository extends BaseRepository {
  constructor() {
    super(Alternativa);
  }
};

export { AlternativaRepository };