import { neon } from "@neondatabase/serverless";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL não foi configurada. Crie um arquivo .env na raiz da API ou exporte a variável antes de iniciar o servidor.");
}

export const sql = neon(connectionString);
