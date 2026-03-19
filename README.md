# Cadastro de Usuários

Aplicação front-end desenvolvida em Vue para cadastro e listagem de usuários, integrada a uma API.

## Funcionalidades

- Cadastro de usuários
- Listagem de usuários em tabela
- Integração com API
- Atualização da tabela após novo cadastro
- Controle de status do usuário:
  - Ativo
  - Inativo

## Tecnologias utilizadas

- Vue 3
- JavaScript
- HTML
- CSS
- API REST

## Campos do cadastro

Os usuários cadastrados possuem os seguintes dados:

- Nome
- E-mail
- Status

## Como funciona

A aplicação permite cadastrar novos usuários por meio de um formulário.  
Após o envio, os dados são enviados para a API e a tabela é atualizada com os registros cadastrados.

Ao abrir a aplicação, os usuários já cadastrados são buscados automaticamente e exibidos na tabela.

## Estrutura do projeto

```bash
src/
├── components/
│   ├── Formulario.vue
│   ├── Tabela.vue
│   └── actions.js
├── App.vue
└── main.js