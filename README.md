# Pokédex TypeScript Lite

Mini-projeto desenvolvido em Node.js com TypeScript para consultar informações de Pokémon por meio da PokeAPI e armazená-las em um catálogo local.

A aplicação funciona pelo terminal e permite buscar, adicionar, listar e remover Pokémon. Os dados do catálogo são persistidos no arquivo `pc_box.json`, permitindo que permaneçam salvos mesmo após o encerramento da aplicação.

---

## Sobre o projeto

O Pokédex TypeScript Lite foi desenvolvido como projeto avaliativo do módulo de Back-End com Node.js e TypeScript.

O projeto utiliza uma API externa para obter informações de Pokémon e transforma esses dados em uma estrutura simplificada utilizada pela aplicação.

Além da consulta à PokeAPI, o projeto possui catálogo local, menu interativo no terminal e persistência de dados utilizando um arquivo JSON.

---

## Objetivo

O objetivo do projeto é praticar os principais conceitos estudados no módulo, incluindo:

- Node.js
- TypeScript
- Interfaces
- Tipagem de parâmetros e retornos
- Arrays e objetos
- JSON
- Métodos de array
- Classes
- Encapsulamento
- Programação assíncrona
- `async/await`
- `fetch`
- Tratamento de erros
- Entrada de dados pelo terminal
- Leitura e escrita de arquivos
- Git
- GitHub
- GitFlow
- GitHub Projects / Kanban

---

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokeAPI
- Git
- GitHub
- GitHub Projects

---

## API utilizada

O projeto utiliza a PokeAPI para consultar informações dos Pokémon.

Exemplo de endpoint:

```text
https://pokeapi.co/api/v2/pokemon/pikachu
```

A aplicação permite realizar a busca utilizando:

- Nome do Pokémon
- ID do Pokémon

Exemplos:

```text
pikachu
```

```text
25
```

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm
- Git

---

## Como instalar

Clone o repositório:

```bash
git clone https://github.com/celio3astian/pokedex-typescript-lite.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

---

## Como executar

Para executar o projeto em modo de desenvolvimento:

```bash
npm run dev
```

Também é possível executar utilizando:

```bash
npm start
```

Para verificar a compilação do TypeScript:

```bash
npm run build
```

---

## Estrutura do projeto

```text
pokedex-typescript-lite/
│
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── models/
│   │   ├── Pokemon.ts
│   │   └── CustomErrors.ts
│   ├── services/
│   │   ├── PokeApiService.ts
│   │   └── BoxService.ts
│   ├── utils/
│   │   └── textFormatters.ts
│   └── main.ts
│
├── pc_box.json
├── package.json
├── package-lock.json
├── tsconfig.json
├── .gitignore
└── README.md
```

---

## Principais arquivos

### `src/main.ts`

Arquivo principal da aplicação.

Responsável por:

- Criar o catálogo
- Carregar os dados salvos
- Criar o controlador do terminal
- Iniciar a aplicação

### `src/models/Pokemon.ts`

Contém as interfaces utilizadas para representar os dados dos Pokémon.

#### `PokemonResumo`

Representa os dados simplificados utilizados pela aplicação:

- ID
- Nome
- Tipos
- Altura
- Peso

```typescript
export interface PokemonResumo {
    id: number;
    nome: string;
    tipos: string[];
    altura: number;
    peso: number;
}
```

#### `PokemonApiResponse`

Representa somente os campos necessários da resposta recebida da PokeAPI.

Isso permite trabalhar com tipagem TypeScript sem utilizar toda a estrutura retornada pela API.

### `src/services/PokeApiService.ts`

Responsável pela comunicação com a PokeAPI.

Principais responsabilidades:

- Receber nome ou ID do Pokémon
- Realizar a requisição utilizando `fetch`
- Utilizar `async/await`
- Verificar se a resposta da API é válida
- Tratar Pokémon inexistente
- Mapear a resposta da API
- Retornar um objeto do tipo `PokemonResumo`

### `src/services/BoxService.ts`

Contém a classe `CatalogoPokemon`, responsável pelo gerenciamento do catálogo local.

Principais funcionalidades:

- Carregar Pokémon do `pc_box.json`
- Adicionar Pokémon
- Evitar Pokémon duplicado
- Listar Pokémon
- Remover Pokémon por ID
- Salvar alterações no `pc_box.json`

A leitura e a escrita do arquivo são realizadas utilizando `node:fs/promises`.

### `src/controllers/TerminalController.ts`

Responsável pela interação com o usuário através do terminal.

O controlador mantém o menu em execução até que o usuário escolha a opção de sair.

```text
=== Pokédex TypeScript Lite ===
1. Buscar e adicionar Pokémon
2. Listar Pokémon
3. Remover Pokémon
0. Sair
```

### `src/models/CustomErrors.ts`

Contém as classes `APIError` e `LocalBoxError`, criadas para representar erros específicos da aplicação.

Atualmente, `LocalBoxError` é utilizada nas operações de leitura e escrita do catálogo local.

### `src/utils/textFormatters.ts`

Contém funções auxiliares utilizadas para padronizar a exibição dos dados no terminal.

A função `formatarPokemon()` recebe um `PokemonResumo` e retorna uma string contendo ID, nome, tipos, altura e peso.

### `pc_box.json`

Arquivo utilizado como armazenamento local do catálogo.

Inicialmente:

```json
[]
```

Quando um Pokémon é adicionado, o arquivo pode ficar assim:

```json
[
  {
    "id": 25,
    "nome": "pikachu",
    "tipos": [
      "electric"
    ],
    "altura": 4,
    "peso": 60
  }
]
```

Os dados permanecem salvos mesmo depois que a aplicação é encerrada.

---

## Funcionalidades

A aplicação permite:

- Buscar Pokémon por nome
- Buscar Pokémon por ID
- Consultar dados na PokeAPI
- Tratar Pokémon inexistente
- Mapear a resposta da PokeAPI
- Adicionar Pokémon ao catálogo
- Impedir Pokémon duplicado
- Listar Pokémon cadastrados
- Remover Pokémon por ID
- Exibir aviso para ID inexistente
- Exibir aviso para catálogo vazio
- Utilizar menu interativo no terminal
- Persistir dados no arquivo `pc_box.json`
- Carregar o catálogo automaticamente ao iniciar
- Formatar a saída exibida no terminal

---

## Exemplos de execução

### Menu principal

Ao executar:

```bash
npm run dev
```

é exibido:

```text
=== Pokédex TypeScript Lite ===
1. Buscar e adicionar Pokémon
2. Listar Pokémon
3. Remover Pokémon
0. Sair

Escolha uma opção:
```

### Buscar e adicionar Pokémon

Entrada:

```text
Escolha uma opção: 1
Digite o nome ou ID do Pokémon: pikachu
```

Saída:

```text
[OK] Pokemon encontrado: pikachu
[OK] pikachu adicionado ao catálogo.
```

### Listar catálogo

Entrada:

```text
Escolha uma opção: 2
```

Saída:

```text
Catálogo atual:
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
```

### Tentar adicionar Pokémon duplicado

Entrada:

```text
Escolha uma opção: 1
Digite o nome ou ID do Pokémon: pikachu
```

Saída:

```text
[OK] Pokemon encontrado: pikachu
[AVISO] pikachu já está no catálogo.
```

### Buscar Pokémon inexistente

Entrada:

```text
Escolha uma opção: 1
Digite o nome ou ID do Pokémon: pokemon-inexistente
```

Saída:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Remover Pokémon por ID

Entrada:

```text
Escolha uma opção: 3
Digite o ID do Pokémon: 25
```

Saída:

```text
[OK] Pokémon removido do catálogo.
```

### Remover Pokémon com ID inexistente

Entrada:

```text
Escolha uma opção: 3
Digite o ID do Pokémon: 5
```

Saída:

```text
[AVISO] Nenhum Pokémon encontrado com esse ID.
```

### Catálogo vazio

Entrada:

```text
Escolha uma opção: 2
```

Saída:

```text
[AVISO] Catálogo vazio.
```

### Encerrar aplicação

Entrada:

```text
Escolha uma opção: 0
```

Saída:

```text
Encerrando Pokédex...
```

---

## Persistência dos dados

O catálogo utiliza o arquivo `pc_box.json` para armazenar os Pokémon adicionados.

Quando um Pokémon é adicionado:

```text
Pokémon
   ↓
CatalogoPokemon
   ↓
salvar()
   ↓
pc_box.json
```

Quando a aplicação é iniciada novamente:

```text
pc_box.json
   ↓
carregar()
   ↓
CatalogoPokemon
```

Dessa forma, os Pokémon permanecem disponíveis mesmo após encerrar e iniciar novamente a aplicação.

---

## Conceitos aplicados

### TypeScript

O projeto utiliza TypeScript para adicionar tipagem ao código.

Foram utilizados:

- Interfaces
- Tipagem de variáveis
- Tipagem de parâmetros
- Tipagem de retornos
- Arrays tipados
- `Promise`
- Classes
- Modificadores de acesso

### Interfaces

Foram criadas as interfaces:

```text
PokemonResumo
PokemonApiResponse
```

A interface `PokemonResumo` representa o formato utilizado internamente pela aplicação.

A interface `PokemonApiResponse` representa somente os dados necessários recebidos da API.

### Programação assíncrona

A consulta à PokeAPI e a persistência dos dados utilizam `async/await`.

Exemplo:

```typescript
const pokemon = await buscarPokemon(nomeOuId);
```

### Fetch

A consulta à API é realizada utilizando `fetch()`.

Exemplo de endpoint:

```text
https://pokeapi.co/api/v2/pokemon/pikachu
```

### Tratamento de erros

A aplicação utiliza:

- `try/catch`
- Verificação de `resposta.ok`
- Retorno `null`
- Mensagens de erro
- `LocalBoxError` para falhas relacionadas ao catálogo local

Exemplo:

```text
[ERRO] Pokémon não encontrado: pokemon-inexistente
```

### Métodos de array utilizados

#### `map()`

Utilizado para transformar os tipos recebidos da PokeAPI:

```typescript
dados.types.map((item) => item.type.name)
```

#### `some()`

Utilizado para verificar se um Pokémon já existe no catálogo:

```typescript
this.pokemons.some(
    (item) => item.id === pokemon.id
);
```

#### `forEach()`

Utilizado para percorrer e listar os Pokémon:

```typescript
this.pokemons.forEach((pokemon) => {
    console.log(formatarPokemon(pokemon));
});
```

#### `filter()`

Utilizado para remover um Pokémon pelo ID:

```typescript
this.pokemons = this.pokemons.filter(
    (pokemon) => pokemon.id !== id
);
```

### Orientação a objetos

O projeto possui a classe `CatalogoPokemon`.

Ela utiliza encapsulamento por meio de:

```typescript
private pokemons: PokemonResumo[] = [];
```

Principais métodos:

```text
carregar()
adicionar()
listar()
remover()
salvar()
```

O método `salvar()` é privado e utilizado internamente pela classe.

---

## Fluxo da aplicação

Fluxo principal:

```text
main.ts
   ↓
TerminalController
   ├── PokeApiService → PokeAPI
   └── CatalogoPokemon → pc_box.json
```

---

## Organização do Kanban

O desenvolvimento do projeto foi acompanhado utilizando GitHub Projects.

O Kanban possui as seguintes colunas:

- Backlog
- A Fazer
- Em Andamento
- Concluído

As atividades do desenvolvimento foram registradas como Issues e organizadas de acordo com o andamento do projeto.

### Kanban do projeto

[Acessar o Kanban no GitHub Projects](https://github.com/users/celio3astian/projects/2)

---

## GitFlow

O projeto utiliza as seguintes branches:

- `main` — versão estável do projeto
- `develop` — integração das funcionalidades
- `feat/pokedex` — desenvolvimento das funcionalidades da Pokédex
- `docs/readme` — documentação do projeto

Fluxo utilizado:

```text
feat/pokedex
     ↓
  develop
     ↓
docs/readme
     ↓
  develop
     ↓
   main
```

---

## Melhorias futuras

Algumas melhorias que podem ser implementadas futuramente:

- Permitir remover Pokémon pelo nome
- Buscar Pokémon por tipo
- Exibir mais atributos
- Exibir HP, ataque e defesa
- Criar filtros para o catálogo
- Ordenar Pokémon por nome ou ID
- Criar testes automatizados
- Criar uma API própria utilizando Express
- Utilizar banco de dados

---

## Repositório

[GitHub - pokedex-typescript-lite](https://github.com/celio3astian/pokedex-typescript-lite)

---

## Autor

**Célio Bastian**

Projeto desenvolvido como atividade prática de Back-End com Node.js e TypeScript.
