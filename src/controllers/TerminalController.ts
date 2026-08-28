import * as readline from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/BoxService.js";

export class TerminalController {
    private readonly catalogo: CatalogoPokemon;

    constructor(catalogo: CatalogoPokemon) {
        this.catalogo = catalogo;
    }

    async iniciar(): Promise<void> {
        const rl = readline.createInterface({
            input,
            output
        });

        let executando = true;

        while (executando) {
            console.log("\n=== Pokédex TypeScript Lite ===");
            console.log("1. Buscar e adicionar Pokémon");
            console.log("2. Listar Pokémon");
            console.log("3. Remover Pokémon");
            console.log("0. Sair");

            const opcao = await rl.question("\nEscolha uma opção: ");

            switch (opcao) {
                case "1": {
                    const nomeOuId = await rl.question(
                        "Digite o nome ou ID do Pokémon: "
                    );

                    const pokemon = await buscarPokemon(nomeOuId);

                    if (pokemon !== null) {
                        this.catalogo.adicionar(pokemon);
                    }

                    break;
                }

                case "2":
                    this.catalogo.listar();
                    break;

                case "3": {
                    const entrada = await rl.question(
                        "Digite o ID do Pokémon: "
                    );

                    const id = Number(entrada);

                    if (Number.isNaN(id)) {
                        console.log("[AVISO] ID inválido.");
                        break;
                    }

                    this.catalogo.remover(id);
                    break;
                }

                case "0":
                    executando = false;
                    console.log("Encerrando Pokédex...");
                    break;

                default:
                    console.log("[AVISO] Opção inválida.");
            }
        }

        rl.close();
    }
}