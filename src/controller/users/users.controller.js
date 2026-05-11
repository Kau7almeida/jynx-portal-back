import { UsersRepository } from "../../repository/users/users.repository.js";

export class UsersController {

    constructor() {
        this.usersRepository = new UsersRepository();
    }

    getAll = async (req, reply) => {
        const result = await this.usersRepository.getAll(req, reply);
        reply.status(200).send(result);
    }

    create = async (req, reply) => {
        await this.usersRepository.create(req, reply);
        reply.status(201).send(`Usuário ${req.body.first_name} ${req.body.last_name} criado com sucesso!`);
    }

    update = async (req, reply) => {
        await this.usersRepository.update(req, reply);
        reply.status(200).send(`Usuário ${req.body.first_name} ${req.body.last_name} atualizado com sucesso!`);
    }

    delete = async (req, reply) => {
        await this.usersRepository.delete(req, reply);
        reply.status(200).send(`Usuário deletado com sucesso!`);
    }

}