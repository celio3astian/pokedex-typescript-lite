import { buscarPokemon } from "./services/PokeApiService.js";
import { catalogo } from "./services/BoxService.js";

async function main() {
    const pokemon = await buscarPokemon("pikachu");

    if (pokemon !== null) {
        catalogo.push(pokemon);
    }

    console.log(catalogo);
}

main();