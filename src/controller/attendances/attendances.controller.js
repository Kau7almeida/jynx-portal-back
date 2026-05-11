import { AttendancesRepository } from "../../repository/attendances/attendances.repository.js";

export class AttendancesController {

    constructor() {
        this.attendancesRepository = new AttendancesRepository();
    }

    getByClass = async (req, reply) => {
        const result = await this.attendancesRepository.getByClass(req, reply);
        reply.status(200).send(result);
    }

    register = async (req, reply) => {
        await this.attendancesRepository.register(req, reply);
        reply.status(201).send({ message: "Presença registrada com sucesso!" });
    }

    delete = async (req, reply) => {
        await this.attendancesRepository.delete(req, reply);
        reply.status(200).send({ message: "Presença removida com sucesso!" });
    }

    deleteMany = async (req, reply) => {
        const deletedCount = await this.attendancesRepository.deleteMany(req, reply);
        reply.status(200).send({
            message: "Presenças removidas com sucesso!",
            deletedCount
        });
    }

    deleteAllByClass = async (req, reply) => {
        await this.attendancesRepository.deleteAllByClass(req, reply);
        reply.status(200).send({ message: "Todas as presenças da turma foram removidas!" });
    }

}
