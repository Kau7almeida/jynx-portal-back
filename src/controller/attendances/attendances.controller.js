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

}
