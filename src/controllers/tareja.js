
import { TarefasService } from '../services/index.js';
import { AppError } from '../utils/index.js';

const todasTarefas = async (req, res) => {
    const tarefas = await TarefasService.listarTarefas();
    res.status(200).json(tarefas);
};

const obterTarefa = async (req, res) => {
    const tarefa = await TarefasService.obterTarefa(req.params.objectId);

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    res.status(200).json(tarefa);
};

const criarTarefa = async (req, res) => {
    if (!req.body.descricao) {
        throw new AppError('O campo "descricao" é obrigatório', 400);
    }

    const tarefa = await TarefasService.criarTarefa(req.body);

    res.status(201).json(tarefa);
};

const atualizarTarefa = async (req, res) => {
    const tarefa = await TarefasService.atualizarTarefa(
        req.params.objectId,
        req.body
    );

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    res.status(200).json(tarefa);
};

const deletarTarefa = async (req, res) => {
    const tarefa = await TarefasService.deletarTarefa(req.params.objectId);

    if (!tarefa) {
        throw new AppError('Tarefa não encontrada', 404);
    }

    res.status(204).send();
};

export default {
    listarTarefas: todasTarefas,
    obterTarefa,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
};
