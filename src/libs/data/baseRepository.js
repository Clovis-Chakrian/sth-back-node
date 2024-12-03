import { Model } from "sequelize";

class BaseRepository {
  /** 
   * Representa um repositorio base
   * @constructor
   * @param {Model} entidade
  */
  constructor(entidade) {
    this.entidade = entidade;
  }

  /** 
   * Identificador (PK) da informação no banco.
   * @param {string} id
   * @returns {object} a entidade com a chave primária específicada.
  */
  async findById(id) {
    return await this.entidade.findByPk(id);
  }

  /** 
   * Traz todas as informações do banco.
  */
  async findAll() {
    return await this.entidade.findAll();
  }

  /** 
   * Busca um (e apenas um) objeto que deve possuir dentro dele as colunas com valor para filtro.
   * Por exemplo, se temos um objeto pessoa que possui o nome, para filtrar pelo nome "John" devemos receber o seguinte objeto:
   * {
   *   Nome: "John"
   * }
   * 
   * dessa forma será buscado no bando todas as pessoas que possuem nome "John".
   * @param {object} filtro
   * @returns {object} o único (ou primeiro) elemento correspondente a consulta.
  */
  async findOneBy(filtro) {
    await this.entidade.findOne({ where: { ...filtro } })
  }

  /** 
   * Busca todos os objetos que deve possuir dentro dele as colunas com valor para filtro.
   * Por exemplo, se temos um objeto pessoa que possui o nome, para filtrar pelo nome "John" devemos receber o seguinte objeto:
   * {
   *   Nome: "John"
   * }
   * 
   * dessa forma será buscado no bando todas as pessoas que possuem nome "John".
   * @param {object} filtro
   * @returns {object} uma lista de objetos correspondentes a pesquisa.
  */
  async findAllBy(filtro) {
    await this.entidade.findAll({ where: { ...filtro } })
  }

  /** 
   * Se faz necessário para a criação de uma entidade passar a instancia criada dessa entidade (ou os campos utilizados);
   * @param {object} entidade
   * @returns {object} a entidade salva.
  */
  async create(entidade) {
    const createdEntitie = await this.entidade.create(entidade);

    await createdEntitie.save();

    return createdEntitie;
  }

  /** 
   * Para que seja possível efetuar a atualização da entidade, é necessário receber primeiro a chave primária dessa entidade e junto a isso, a entidade (ou os campos que são desejados a atualização)
   * @param {string} id
   * @param {object} entidade
   * @returns {object} a entidade atualizada.
  */
  async update(id, entidade) {
    await this.entidade.update(
      { ...entidade },
      {
        where: { id },
        returning: true,
      }
    );
      return await this.entidade.findByPk(id);
  }

  async delete(id) {
    await this.entidade.destroy({
      where: {
        id
      }
    });
  };
};

export { BaseRepository };