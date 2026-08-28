import { TerminalController } from "./controllers/TerminalController.js";
import { CatalogoPokemon } from "./services/BoxService.js";

async function main() {
    const catalogo = new CatalogoPokemon();
    const terminal = new TerminalController(catalogo);

    await terminal.iniciar();
}

main();