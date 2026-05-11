import { StudentsRepository } from "../../repository/students/students.repository.js";

export class StudentsController {

    constructor() {
        this.studentsRepository = new StudentsRepository();
    }

    getAll = async (req, reply) => {
        const result = await this.studentsRepository.getAll(req, reply);
        reply.status(200).send(result);
    }

    create = async (req, reply) => {
        await this.studentsRepository.create(req, reply);
        reply.status(201).send({ message: `Aluno ${req.body.full_name} criado com sucesso!` });
    }

    update = async (req, reply) => {
        await this.studentsRepository.update(req, reply);
        reply.status(200).send({ message: `Aluno ${req.body.full_name} atualizado com sucesso!` });
    }

    delete = async (req, reply) => {
        await this.studentsRepository.delete(req, reply);
        reply.status(200).send({ message: `Aluno deletado com sucesso!` });
    }

}