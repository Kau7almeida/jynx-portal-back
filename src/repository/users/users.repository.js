import { sql } from "../../database/sql.js";

export class UsersRepository {

    getAll = async (req, reply) => {
        return sql`SELECT * FROM users`;
    }

    create = async (req, reply) => {
        const { first_name, last_name, email, password, is_admin } = req.body;
        return sql`INSERT INTO users (first_name, last_name, email, password, is_admin) VALUES (${first_name}, ${last_name}, ${email}, ${password}, ${is_admin})`;
    }

    update = async (req, reply) => {
        const { first_name, last_name, email, password, is_admin } = req.body;
        const { id } = req.params;
        return sql`UPDATE users SET first_name = ${first_name}, last_name = ${last_name}, email = ${email}, password = ${password}, is_admin = ${is_admin} WHERE id = ${id}`;
    }

    delete = async (req, reply) => {
        const { id } = req.params;
        return sql`DELETE FROM users WHERE id = ${id}`;
    }

}