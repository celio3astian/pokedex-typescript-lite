import { buscarPokemon } from "./services/PokeApiService.js";

async function main() {
    await buscarPokemon("pokemon-inexistente");
}

main();