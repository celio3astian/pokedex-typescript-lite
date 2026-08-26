import { buscarPokemon } from "./services/PokeApiService.js";
import { catalogo, adicionarAoCatalogo } from "./services/BoxService.js";

async function main() {
    const pokemon = await buscarPokemon("pikachu");

    if (pokemon !== null) {
        adicionarAoCatalogo(pokemon);
        adicionarAoCatalogo(pokemon);
    }

    console.log(catalogo);
}

main();