import { sql } from "../../database/sql.js";

export class StudentsRepository {

    getAll = async (req, reply) => {
        return sql`SELECT * FROM students`;
    }

    create = async (req, reply) => {
        const { full_name, cpf, email, phone, fk_class } = req.body;
        return sql`INSERT INTO students (full_name, cpf, email, phone, fk_class) VALUES (${full_name}, ${cpf}, ${email}, ${phone}, ${fk_class})`;
    }

    update = async (req, reply) => {
        const { full_name, cpf, email, phone, fk_class } = req.body;
        const { id } = req.params;
        return sql`UPDATE students SET full_name = ${full_name}, cpf = ${cpf}, email = ${email}, phone = ${phone}, fk_class = ${fk_class} WHERE id = ${id}`;
    }

    delete = async (req, reply) => {
        const { id } = req.params;
        return sql`DELETE FROM students WHERE id = ${id}`;
    }

}