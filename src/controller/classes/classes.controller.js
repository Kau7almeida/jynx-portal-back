import { ClassesRepository } from "../../repository/classes/classes.repository.js";

export class ClassesController {

    constructor() {
        this.classesRepository = new ClassesRepository();
    }

    getAll = async (req, reply) => {
        const result = await this.classesRepository.getAll(req, reply);
        reply.status(200).send(result);
    }

    create = async (req, reply) => {
        await this.classesRepository.create(req, reply);
        reply.status(201).send({ message: `Turma ${req.body.name} criada com sucesso!` });
    }

    update = async (req, reply) => {
        await this.classesRepository.update(req, reply);
        reply.status(200).send({ message: `Turma ${req.body.name} atualizada com sucesso!` });
    }

    delete = async (req, reply) => {
        await this.classesRepository.delete(req, reply);
        reply.status(200).send({ message: `Turma deletada com sucesso!` });
    }

}