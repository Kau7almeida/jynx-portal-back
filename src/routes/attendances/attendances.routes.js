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

    fastify.delete("/delete/:id", {
        schema: {
            description: "Remove a presença de um aluno",
            tags: ["Attendances"],
            params: {
                type: "object",
                properties: {
                    id: { type: "number" }
                },
                required: ["id"]
            },
            response: {
                200: {
                    description: "OK",
                    type: "object",
                    properties: {
                        message: { type: "string" }
                    }
                }
            }
        }
    }, attendancesController.delete)

    fastify.delete("/delete-many", {
        schema: {
            description: "Remove várias presenças de uma vez",
            tags: ["Attendances"],
            body: {
                type: "object",
                properties: {
                    ids: {
                        type: "array",
                        items: { type: "number" },
                        minItems: 1
                    },
                    classId: { type: "number" }
                },
                required: ["ids"]
            },
            response: {
                200: {
                    description: "OK",
                    type: "object",
                    properties: {
                        message: { type: "string" },
                        deletedCount: { type: "number" }
                    }
                }
            }
        }
    }, attendancesController.deleteMany)

    fastify.delete("/delete-all/:classId", {
        schema: {
            description: "Remove todas as presenças de uma turma",
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
                    type: "object",
                    properties: {
                        message: { type: "string" }
                    }
                }
            }
        }
    }, attendancesController.deleteAllByClass)

}
