module.exports = ({ env }) => ({
    defaultConnection: "default",
    connection: {
        client: "postgres",
        connection: {
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 5432),
            database: env("DATABASE_NAME", "shikhar"),
            user: env("DATABASE_USERNAME", "postgres"),
            password: env("DATABASE_PASSWORD", "dynamic123"),
            schema: env("DATABASE_SCHEMA", "public"),
        },
    }
});