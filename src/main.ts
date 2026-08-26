import { buscarPokemon } from "./services/PokeApiService.js";
import { adicionarAoCatalogo, listarCatalogo } from "./services/BoxService.js";

async function main() {
    const pokemon = await buscarPokemon("pikachu");

    if (pokemon !== null) {
        adicionarAoCatalogo(pokemon);
        
    }

    listarCatalogo();
}

main();