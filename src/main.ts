import { buscarPokemon } from "./services/PokeApiService.js";
import { adicionarAoCatalogo, listarCatalogo, removerDoCatalogo } from "./services/BoxService.js";

async function main() {
    const pokemon = await buscarPokemon("pikachu");

    if (pokemon !== null) {
        adicionarAoCatalogo(pokemon);
        
    }

    listarCatalogo();

    removerDoCatalogo(25);

    listarCatalogo();
}

main();