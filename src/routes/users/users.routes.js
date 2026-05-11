import { UsersController } from "../../controller/users/users.controller.js"

export async function usersRoutes(fastify) {

    const usersController = new UsersController();

    fastify.get("/get-all", {
        schema: {
            description: "Retorna todos os usuários",
            tags: ["Users"],
            response: {
                200: {
                    description: "OK",
                    type: "array",
                    items: {
                        type: "object",
                        properties: {
                            id: { type: "number" },
                            first_name: { type: "string" },
                            last_name: { type: "string" },
                            email: { type: "string" },
                            password: { type: "string" },
                            is_admin: { type: "boolean" }
                        }
                    }
                }
            }
        }
    }, usersController.getAll)

    fastify.post("/create", {
        schema: {
            description: "Cria um novo usuário",
            tags: ["Users"],
            body: {
                type: "object",
                properties: {
                    first_name: { type: "string" },
                    last_name: { type: "string" },
                    email: { type: "string" },
                    password: { type: "string" },
                    is_admin: { type: "boolean" }
                },
                required: ["first_name", "last_name", "email", "password", "is_admin"]
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
    }, usersController.create)

    fastify.put("/update/:id", {
        schema: {
            description: "Atualiza um usuário",
            tags: ["Users"],
            body: {
                type: "object",
                properties: {
                    first_name: { type: "string" },
                    last_name: { type: "string" },
                    email: { type: "string" },
                    password: { type: "string" },
                    is_admin: { type: "boolean" }
                },
                required: ["first_name", "last_name", "email", "password", "is_admin"]
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
    }, usersController.update)

    fastify.delete("/delete/:id", {
        schema: {
            description: "Deleta um usuário",
            tags: ["Users"],
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
    }, usersController.delete)

}