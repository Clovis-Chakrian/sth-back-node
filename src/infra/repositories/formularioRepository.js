import { Formulario } from "../../domain/entities/formulario.js";
import { BaseRepository } from "../../libs/data/baseRepository.js";

class FormularioRepository extends BaseRepository {
  constructor() {
    super(Formulario);
  }
}

export { FormularioRepository };
