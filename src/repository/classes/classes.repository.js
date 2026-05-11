import { sql } from "../../database/sql.js";

export class ClassesRepository {

    getAll = async (req, reply) => {
        return sql`
        SELECT 
        cl.id,
        cl.name,
        cl.fk_course,
        cl.created_at,
        COALESCE(
            json_agg(
            json_build_object(
                'id', s.id,
                'full_name', s.full_name,
                'cpf', s.cpf,
                'email', s.email,
                'phone', s.phone,
                'created_at', s.created_at
            ) ORDER BY s.full_name
            ) FILTER (WHERE s.id IS NOT NULL),
            '[]'::json
        ) AS students
        FROM classes cl
        LEFT JOIN students s ON s.fk_class = cl.id
        GROUP BY cl.id, cl.name, cl.fk_course, cl.created_at
        ORDER BY cl.id
        `;
    }

    create = async (req, reply) => {
        const { name, fk_course } = req.body;
        return sql`INSERT INTO classes (name, fk_course) VALUES (${name}, ${fk_course})`;
    }

    update = async (req, reply) => {
        const { name, fk_course } = req.body;
        const { id } = req.params;
        return sql`UPDATE classes SET name = ${name}, fk_course = ${fk_course} WHERE id = ${id}`;
    }

    delete = async (req, reply) => {
        const { id } = req.params;
        return sql`DELETE FROM classes WHERE id = ${id}`;
    }

}