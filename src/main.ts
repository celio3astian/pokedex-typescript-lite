import { buscarPokemon } from "./services/PokeApiService.js";

async function main() {
    const pokemon = await buscarPokemon("pikachu");
    
    if (pokemon !== null) {
        console.log(pokemon);
    
    }
}    
    main();
