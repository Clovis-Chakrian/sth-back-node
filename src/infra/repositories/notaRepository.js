import { Nota } from "../../domain/entities/nota.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class NotaRepository extends BaseRepository {
  constructor() {
    super(Nota);
  }
}

export { NotaRepository };
