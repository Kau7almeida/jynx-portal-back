import { StudentsController } from "../../controller/students/students.controller.js";

export async function studentsRoutes(fastify) {

    const studentsController = new StudentsController();

    fastify.get("/get-all", {
        schema: {
            description: "Retorna todos os alunos",
            tags: ["Students"],
            response: {
                200: {
                    description: "OK",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            full_name: { type: "string" },
                            cpf: { type: "string" },
                            email: { type: "string" },
                            phone: { type: "string" },
                            fk_class: { type: "number" },
                            created_at: { type: "string" }
                        }
                    }
                }
            }
        }
    }, studentsController.getAll)

    fastify.post("/create", {
        schema: {
            description: "Cria um novo aluno",
            tags: ["Students"],
            body: {
                type: "object",
                properties: {
                    full_name: { type: "string" },
                    cpf: { type: "string" },
                    email: { type: "string" },
                    phone: { type: "string" },
                    fk_class: { type: "number" }
                },
                required: ["full_name", "cpf", "email", "phone", "fk_class"]
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
    }, studentsController.create)

    fastify.put("/update/:id", {
        schema: {
            description: "Atualiza um aluno",
            tags: ["Students"],
            body: {
                type: "object",
                properties: {
                    full_name: { type: "string" },
                    cpf: { type: "string" },
                    email: { type: "string" },
                    phone: { type: "string" },
                    fk_class: { type: "number" }
                },
                required: ["full_name", "cpf", "email", "phone", "fk_class"]
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
    }, studentsController.update)

    fastify.delete("/delete/:id", {
        schema: {
            description: "Deleta um aluno",
            tags: ["Students"],
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
    }, studentsController.delete)

}