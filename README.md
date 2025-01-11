Mudanca 5
# API GraphQL de Gerenciamento de Tarefas

Este projeto consiste em uma API GraphQL que fornece acesso a dados de uma aplicação fictícia de gerenciamento de tarefas. Os usuários podem realizar consultas e mutações para criar, listar e manipular tarefas.

## Como Executar
Certifique-se de ter o Node.js instalado em sua máquina.

Clone o repositório para sua máquina local:

```bash
git clone https://github.com/lucas-cavalcanti-ads/api-graphql-puc.git
```

Instale as dependências do projeto:
```bash
npm install
```

```bash
npm start
```

Você poderá executar as operações da API na url: http: //localhost:4000

## Operações Suportadas

### Consultas

**todasAsTarefas**: Retorna uma lista de todas as tarefas.

Exemplo de consulta:
```graphql
query {
  todasAsTarefas {
    id
    titulo
    concluida
  }
}
```
**todasAsTarefas**: Retorna uma lista de todas as tarefas.

Exemplo de consulta:
```graphql
query {
  todasAsTarefas {
    id
    titulo
    concluida
  }
}
```

**detalhesDaTarefa(id)**: Retorna os detalhes de uma tarefa específica com base no seu ID.

Exemplo de consulta:

```graphql
query {
  detalhesDaTarefa(id: "1") {
    id
    titulo
    concluida
  }
}
```
**tarefasConcluidas**: Retorna uma lista de tarefas concluídas.

Exemplo de consulta:

```graphql
query {
  tarefasConcluidas {
    id
    titulo
    concluida
  }
}
```
**tarefasPendentes**: Retorna uma lista de tarefas pendentes.

Exemplo de consulta:

```graphql
query {
  tarefasPendentes {
    id
    titulo
    concluida
  }
}
```

**todosOsUsuarios**: Retorna uma lista de todos os usuários.

Exemplo de consulta:

```graphql
query {
  todosOsUsuarios {
    id
    nome
    email
  }
}
```
### Mutações

**criarTarefa(titulo)**: Cria uma nova tarefa com o título especificado.

Exemplo de mutação:

```graphql
mutation {
  criarTarefa(titulo: "Comprar leite") {
    id
    titulo
    concluida
  }
}
```
**marcarComoConcluida(id)**: Marca uma tarefa como concluída com base no seu ID.

Exemplo de mutação:

```graphql
mutation {
  marcarComoConcluida(id: "1") {
    id
    titulo
    concluida
  }
}
```
**atualizarTarefa(id, titulo)**: Atualiza o título de uma tarefa existente com base no seu ID.

Exemplo de mutação:

```graphql
mutation {
  atualizarTarefa(id: "1", titulo: "Comprar pão") {
    id
    titulo
    concluida
  }
}
```
**excluirTarefa(id)**: Exclui uma tarefa com base no seu ID.

Exemplo de mutação:

```graphql
mutation {
  excluirTarefa(id: "1") {
    id
    titulo
    concluida
  }
}
```
