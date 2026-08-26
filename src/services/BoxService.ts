import type { PokemonResumo } from "../models/Pokemon.js"; 

export const catalogo: PokemonResumo[] = [];

export function adicionarAoCatalogo(pokemon: PokemonResumo):void {
    const jaExiste = catalogo.some((item) => item.id === pokemon.id);

    if (jaExiste) {
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
        return;
    }

    catalogo.push(pokemon);

    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
}