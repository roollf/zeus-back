# Zeus Backend (API)

Este repositório é o backend do projeto Zeus, uma API desenvolvida com Express.js para gerenciamento de custos relacionados à coleção "racao" em um banco de dados MongoDB. Ele fornece endpoints para cadastro, consulta, atualização e exclusão de registros.

## Funcionalidades

- Cadastro e consulta de custos de ração
- Atualização e exclusão de registros
- API RESTful pronta para integração com o frontend

## Pré-requisitos

- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado junto com o Node.js)
- [MongoDB](https://www.mongodb.com/) para o banco de dados

## Como executar o projeto em modo de desenvolvimento

1. **Clone o repositório**
	```bash
	git clone <url-do-repositorio>
	```
	Acesse a pasta do projeto:
	```bash
	cd zeus-back
	```

2. **Configure o acesso ao banco de dados MongoDB Atlas**
	- Crie uma conta no [MongoDB Atlas](https://www.mongodb.com/atlas/database) e configure um cluster.
	- Obtenha a string de conexão do seu cluster Atlas.
	- Crie um arquivo `.env` na pasta `src/` com a variável `DB_CONNECTION_STRING` contendo a string de conexão do MongoDB Atlas.

3. **Instale as dependências**
	```bash
	npm install
	```

4. **Execute o projeto**
	```bash
	node src/index.js
	```
	O servidor será iniciado em modo de desenvolvimento. Por padrão, a API estará disponível em [http://localhost:3001](http://localhost:3001).

## Scripts disponíveis

- `npm run test` - Executa o script de teste (atualmente não implementado)

## Estrutura de pastas

- `src/` - Código-fonte principal
  - `index.js` - Arquivo principal da aplicação

## Observações

- Certifique-se de que o banco de dados está rodando antes de iniciar a API.
- As configurações de conexão com o banco de dados podem ser ajustadas no arquivo `.env` conforme necessário.

---

Projeto desenvolvido com [Express.js](https://expressjs.com/) e [MongoDB](https://www.mongodb.com/).
