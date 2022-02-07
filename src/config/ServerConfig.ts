function serverConfig() {

    const port = process.env.SERVER_PORT;

    return { port };
};

const { port } = serverConfig()

export { port }