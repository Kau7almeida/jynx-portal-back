import { AttendancesController } from "../../controller/attendances/attendances.controller.js";

export async function attendancesRoutes(fastify) {

    const attendancesController = new AttendancesController();

    fastify.get("/get/:classId", {
        schema: {
            description: "Retorna todas as presenças de uma turma",
            tags: ["Attendances"],
            params: {
                type: "object",
                properties: {
                    classId: { type: "number" }
                },
                required: ["classId"]
            },
            response: {
                200: {
                    description: "OK",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            fk_student: { type: "number" },
                            fk_class: { type: "number" },
                            registered_at: { type: "string" },
                            full_name: { type: "string" },
                            email: { type: "string" }
                        }
                    }
                }
            }
        }
    }, attendancesController.getByClass)

    fastify.post("/register", {
        schema: {
            description: "Registra a presença de um aluno em uma turma",
            tags: ["Attendances"],
            body: {
                type: "object",
                properties: {
                    fk_student: { type: "number" },
                    fk_class: { type: "number" }
                },
                required: ["fk_student", "fk_class"]
            },
            response: {
                201: {
                    description: "Created",
                    type: "object",
                    properties: {
                        message: { type: "string" }
                    }
                }
            }
        }
    }, attendancesController.register)

}
