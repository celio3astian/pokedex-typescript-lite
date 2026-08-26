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

export function listarCatalogo(): void {
    if (catalogo.length === 0) {
        console.log("[AVISO] Catálogo vazio.");
        return;
    }

    console.log("Catálogo atual:");

    catalogo.forEach((pokemon) => {
        console.log(
            `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
);
    });
}

export function removerDoCatalogo(id: number): PokemonResumo[] {
    const existe = catalogo.some((pokemon) => pokemon.id === id);

    if (!existe) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return catalogo;
    }

    const indice = catalogo.findIndex((pokemon) => pokemon.id === id);

    catalogo.splice(indice, 1);

    console.log("[OK] Pokémon removido do catálogo.");

    return catalogo;
}