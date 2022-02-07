import "dotenv/config";
import { port } from "@config/ServerConfig";
import express from "express";
import "express-async-errors";
import { ErrorMiddleware } from "@shared/middlewares/ErrorMiddleware";
import { routes } from "@shared/routes";

interface IApp {
    start: () => void;
} // Interface de configuração de retorno do APP

export function App(): IApp {
    const app = express();

    app.use(express.json()); // Configuração pra aceitar json
    app.use(routes);
    app.use(ErrorMiddleware); // Tratativa de erro

    const start = () => {
        app.listen(port, () =>
            console.log(`Server is running in port ${port}`),
        );
    }; // Função que executa o servidor

    return { start };
}
