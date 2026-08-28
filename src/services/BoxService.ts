import { readFile, writeFile } from "node:fs/promises";

import type { PokemonResumo } from "../models/Pokemon.js";
import { LocalBoxError } from "../models/CustomErrors.js";
import { formatarPokemon } from "../utils/textFormatters.js";

const CAMINHO_ARQUIVO = new URL("../../pc_box.json", import.meta.url);

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];
    
    async carregar(): Promise<void> {
        try {
            const conteudo = await readFile(CAMINHO_ARQUIVO, "utf-8");
            
            const dados = JSON.parse(conteudo) as PokemonResumo[];
            
            this.pokemons = dados;
        } catch (erro) {
            throw new LocalBoxError(
                "Não foi possível carregar o catálogo."
            );
        }
    }
    
    private async salvar(): Promise<void> {
        try {
            const dados = JSON.stringify(this.pokemons, null, 2);
            
            await writeFile(
                CAMINHO_ARQUIVO,
                dados,
                "utf-8"
            );
        } catch (erro) {
            throw new LocalBoxError(
                "Não foi possível salvar o catálogo."
            );
        }
    }
    
    async adicionar(pokemon: PokemonResumo): Promise<void> {
        const jaExiste = this.pokemons.some(
            (item) => item.id === pokemon.id
        );
        
        if (jaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }
        
        this.pokemons.push(pokemon);
        
        await this.salvar();
        
        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }
    
    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        
        console.log("Catálogo atual:");
        
        this.pokemons.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon));
        });
    }
    
    async remover(id: number): Promise<void> {
        const existe = this.pokemons.some(
            (pokemon) => pokemon.id === id
        );
        
        if (!existe) {
            console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
            return;
        }
        
        this.pokemons = this.pokemons.filter(
            (pokemon) => pokemon.id !== id
        );
        
        await this.salvar();
        
        console.log("[OK] Pokémon removido do catálogo.");
    }
}