import { TerminalController } from "./controllers/TerminalController.js";
import { CatalogoPokemon } from "./services/BoxService.js";

async function main() {
    try {
        const catalogo = new CatalogoPokemon();

        await catalogo.carregar();

        const terminal = new TerminalController(catalogo);

        await terminal.iniciar();
    } catch (erro) {
        console.log(
            "[ERRO] Não foi possível iniciar a aplicação."
        );
    }
}

main();