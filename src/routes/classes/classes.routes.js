import { ClassesController } from "../../controller/classes/classes.controller.js";

export async function classesRoutes(fastify) {

    const classesController = new ClassesController();

    fastify.get("/get-all", {
        schema: {
            description: "Retorna todas as turmas com seus alunos",
            tags: ["Classes"],
            response: {
                200: {
                    description: "OK",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            fk_course: { type: "number" },
                            created_at: { type: "string", format: "date-time" },
                            students: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number" },
                                        full_name: { type: "string" },
                                        cpf: { type: "string" },
                                        email: { type: "string" },
                                        phone: { type: "string" },
                                        created_at: { type: "string", format: "date-time" }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, classesController.getAll);

    fastify.post("/create", {
        schema: {
            description: "Cria uma nova turma",
            tags: ["Classes"],
            body: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    fk_course: { type: "number" }
                },
                required: ["name", "fk_course"]
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
    }, classesController.create)

    fastify.put("/update/:id", {
        schema: {
            description: "Atualiza uma turma",
            tags: ["Classes"],
            body: {
                type: "object",
                properties: {
                    name: { type: "string" },
                    fk_course: { type: "number" }
                },
                required: ["name", "fk_course"]
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
    }, classesController.update)

    fastify.delete("/delete/:id", {
        schema: {
            description: "Deleta uma turma",
            tags: ["Classes"],
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
    }, classesController.delete)

}