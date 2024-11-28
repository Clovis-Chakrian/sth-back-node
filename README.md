# Projeto Node.js com Estrutura em Camadas

Este projeto segue uma arquitetura modular em camadas para melhor organização, escalabilidade e manutenção.

OBS geral: importante que as chaves primárias das entidades se chamem "id" por hora para que o repositório base para cada entidade funcione normalmente.

## Estrutura de Pastas

├── api/ 
├── application/ 
├── domain/ 
├── infra/ 
├── libs/ 
└── server.js


### Descrição das Camadas

- **api/**  
  Responsável por receber solicitações do lado cliente e expor os endpoints da aplicação.

- **application/**  
  Contém a lógica de processamento e tratamento de informações, aplicando as regras de negócio necessárias.

- **domain/**  
  Define o domínio do projeto, incluindo as entidades e conceitos fundamentais do negócio.

- **infra/**  
  Gerencia a comunicação com recursos externos, como bancos de dados, APIs externas e outros serviços.

- **libs/**  
  Reúne utilidades gerais, como repositórios base e outras ferramentas auxiliares.

- **server.js**  
  Ponto de entrada da aplicação. Configura e inicializa o servidor utilizando o Express.

## Tecnologias Utilizadas

- **Node.js**  
- **Express**  
- **Sequelize**

## Como Executar

  1. Instale as dependências:

```bash
npm install
```

  2. Configure as variáveis de ambiente em um arquivo .env.

  3. Inicie o servidor:

```bash
  npm run dev
```