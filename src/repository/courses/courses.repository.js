import { sql } from "../../database/sql.js"

export class CoursesRepository {

    getAll = async (req, reply) => {
        return sql`
                SELECT 
                c.id,
                c.name,
                c.created_at,
                COALESCE(
                json_agg(
                    json_build_object(
                        'id', cl.id,
                        'name', cl.name,
                        'created_at', cl.created_at
                ) ORDER BY cl.id
                ) FILTER (WHERE cl.id IS NOT NULL),
                '[]'::json
            ) AS classes
            FROM courses c
            LEFT JOIN classes cl ON cl.fk_course = c.id
            GROUP BY c.id, c.name, c.created_at
            ORDER BY c.id
        `;
    }

    create = async (req, reply) => {
        const { name } = req.body;
        return sql`INSERT INTO courses (name) VALUES (${name})`;
    }

    update = async (req, reply) => {
        const { name } = req.body;
        const { id } = req.params;
        return sql`UPDATE courses SET name = ${name} WHERE id = ${id}`;
    }

    delete = async (req, reply) => {
        const { id } = req.params;
        return sql`DELETE FROM courses WHERE id = ${id}`;
    }

}