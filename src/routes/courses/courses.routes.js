import { CoursesController } from "../../controller/courses/courses.controller.js";

export async function coursesRoutes(fastify) {

    const coursesController = new CoursesController();

    fastify.get("/get-all", {
        schema: {
            description: "Retorna todos os cursos com suas turmas",
            tags: ["Courses"],
            response: {
                200: {
                    description: "OK",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            name: { type: "string" },
                            created_at: { type: "string", format: "date-time" },
                            classes: {
                                type: "array",
                                items: {
                                    type: "object",
                                    properties: {
                                        id: { type: "number" },
                                        name: { type: "string" },
                                        created_at: { type: "string", format: "date-time" }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }, coursesController.getAll);

    fastify.post("/create", {
        schema: {
            description: "Cria um novo curso",
            tags: ["Courses"],
            body: {
                type: "object",
                properties: {
                    name: { type: "string" }
                },
                required: ["name"]
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
    }, coursesController.create)

    fastify.put("/update/:id", {
        schema: {
            description: "Atualiza um curso",
            tags: ["Courses"],
            body: {
                type: "object",
                properties: {
                    name: { type: "string" }
                },
                required: ["name"]
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
    }, coursesController.update)

    fastify.delete("/delete/:id", {
        schema: {
            description: "Deleta um curso",
            tags: ["Courses"],
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
    }, coursesController.delete)

}