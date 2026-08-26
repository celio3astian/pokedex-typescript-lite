import type {PokemonApiResponse, PokemonResumo} from "../models/Pokemon.js";

export async function buscarPokemon(
    nomeOuId: string
): Promise<PokemonResumo | null>{


    try{
        const url = `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`;

        const resposta = await fetch(url);

        if (!resposta.ok){
            console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
            return null;
        }

        const dados = await resposta.json() as PokemonApiResponse;

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };

        console.log (`[OK] Pokemon encontrado: ${pokemon.nome}`);
        return pokemon;

    }catch (erro){
        console.log("[ERRO] Não foi possível buscar o Pokémon.");
        return null;
    }
}
