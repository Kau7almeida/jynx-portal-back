import { CoursesRepository } from "../../repository/courses/courses.repository.js";

export class CoursesController {

    constructor() {
        this.coursesRepository = new CoursesRepository();
    }

    getAll = async (req, reply) => {
        const result = await this.coursesRepository.getAll(req, reply);
        reply.status(200).send(result);
    }

    create = async (req, reply) => {
        await this.coursesRepository.create(req, reply);
        reply.status(201).send({ message: `Curso ${req.body.name} criado com sucesso!` });
    }

    update = async (req, reply) => {
        await this.coursesRepository.update(req, reply);
        reply.status(200).send({ message: `Curso ${req.body.name} atualizado com sucesso!` });
    }

    delete = async (req, reply) => {
        await this.coursesRepository.delete(req, reply);
        reply.status(200).send({ message: `Curso deletado com sucesso!` });
    }

}