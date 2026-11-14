import Tarefas from '../models';

const listarTarefas = async () => {
    return await Tarefas.findAll();
};

const obterTarefa = async (objectId) => {
    return await Tarefas.findByPk(objectId);
};

const criarTarefa = async ({ descricao, concluida = false }) => {
    return await Tarefas.create({
        descricao,
        concluida
    });
};

const atualizarTarefa = async (objectId, dados) => {
    const tarefa = await Tarefas.findByPk(objectId);

    if (!tarefa) {
        return null;
    }

    const { descricao, concluida } = dados;

    return await tarefa.update({
        ...(descricao !== undefined && { descricao }),
        ...(concluida !== undefined && { concluida })
    });
};

const deletarTarefa = async (objectId) => {
    const tarefa = await Tarefas.findByPk(objectId);

    if (!tarefa) {
        return null;
    }

    await tarefa.destroy();

    return tarefa;
};

export default {
    listarTarefas,
    obterTarefa,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
};
