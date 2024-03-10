var express = require("express")
var { createHandler } = require("graphql-http/lib/use/express")
var { buildSchema } = require("graphql")
var { ruruHTML } = require("ruru/server")


//Dados
let tarefas = [
    { id: '1', titulo: 'Comprar pão', concluida: false },
    { id: '2', titulo: 'Estudar GraphQL', concluida: true },
  ];
  
  let usuarios = [
    { id: '1', nome: 'João', email: 'joao@example.com' },
    { id: '2', nome: 'Maria', email: 'maria@example.com' },
  ];
  
  //Schemas
  const schema = buildSchema(`
  type Tarefa {
    id: ID!
    titulo: String!
    concluida: Boolean!
  }

  type Usuario {
    id: ID!
    nome: String!
    email: String!
  }

  type Query {
    todasAsTarefas: [Tarefa!]!
    detalhesDaTarefa(id: ID!): Tarefa
    tarefasConcluidas: [Tarefa!]!
    tarefasPendentes: [Tarefa!]!
    todosOsUsuarios: [Usuario!]!
  }

  type Mutation {
    criarTarefa(titulo: String!): Tarefa
    marcarComoConcluida(id: ID!): Tarefa
    atualizarTarefa(id: ID!, titulo: String!): Tarefa
    excluirTarefa(id: ID!): Tarefa
  }
`);

  // Resolvedores
  const root = {
    todasAsTarefas: () => tarefas,
    detalhesDaTarefa: ({ id }) => tarefas.find(tarefa => tarefa.id === id),
    tarefasConcluidas: () => tarefas.filter(tarefa => tarefa.concluida),
    tarefasPendentes: () => tarefas.filter(tarefa => !tarefa.concluida),
    todosOsUsuarios: () => usuarios,
    criarTarefa: ({ titulo }) => {
      const novaTarefa = { id: String(tarefas.length + 1), titulo, concluida: false };
      tarefas.push(novaTarefa);
      return novaTarefa;
    },
    marcarComoConcluida: ({ id }) => {
      const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);
      if (indiceTarefa === -1) return null;
      tarefas[indiceTarefa].concluida = true;
      return tarefas[indiceTarefa];
    },
    atualizarTarefa: ({ id, titulo }) => {
      const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);
      if (indiceTarefa === -1) return null;
      tarefas[indiceTarefa].titulo = titulo;
      return tarefas[indiceTarefa];
    },
    excluirTarefa: ({ id }) => {
      const indiceTarefa = tarefas.findIndex(tarefa => tarefa.id === id);
      if (indiceTarefa === -1) return null;
      const tarefaExcluida = tarefas.splice(indiceTarefa, 1)[0];
      return tarefaExcluida;
    },
  };

var app = express()

app.all(
  "/graphql",
  createHandler({
    schema: schema,
    rootValue: root,
  })
)

app.get("/", (_req, res) => {
  res.type("html")
  res.end(ruruHTML({ endpoint: "/graphql" }))
})

app.listen(4000,()=>{
    console.log("Running a GraphQL API server at http://localhost:4000/graphql")
})
