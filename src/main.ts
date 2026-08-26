import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/BoxService.js";

async function main() {
    const catalogo = new CatalogoPokemon();

    const pokemon = await buscarPokemon("pikachu");

    if (pokemon !== null) {
        catalogo.adicionar(pokemon);
    }

    catalogo.listar();

    catalogo.remover(25);

    catalogo.listar();
}

main();