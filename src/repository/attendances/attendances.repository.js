import { sql } from "../../database/sql.js";

export class AttendancesRepository {

    getByClass = async (req, reply) => {
        const { classId } = req.params;
        return sql`
            SELECT
                a.id,
                a.fk_student,
                a.fk_class,
                a.registered_at,
                s.full_name,
                s.email
            FROM attendances a
            INNER JOIN students s ON s.id = a.fk_student
            WHERE a.fk_class = ${classId}
            ORDER BY a.registered_at DESC
        `;
    }

    register = async (req, reply) => {
        const { fk_student, fk_class } = req.body;
        return sql`
            INSERT INTO attendances (fk_student, fk_class)
            VALUES (${fk_student}, ${fk_class})
            ON CONFLICT (fk_student, fk_class) DO NOTHING
        `;
    }

}
