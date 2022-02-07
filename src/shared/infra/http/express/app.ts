import "dotenv/config"
import express from "express";
import { port } from "@config/ServerConfig";


interface IApp {
    start: () => void;
}

export function App(): IApp {
    const app = express();

    app.use(express.json());

    const start = () => {
        app.listen(port, () =>
            console.log(`Server is running in port ${port}`),
        );
    };

    return { start };
}
