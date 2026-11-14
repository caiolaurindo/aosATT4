import Tarefas from '../models';

const listarTarefas = async () => {
    return await Tarefas.findAll();
};

const obterTarefa = async (id) => {
    return await Tarefas.findById(id);
};

const criarTarefa = async ({ titulo, descricao, status }) => {
    return await Tarefas.create({ 
        titulo, 
        descricao, 
        status });
};

const atualizarTarefa = async (id, { titulo, descricao, status }) => {
    const tarefa = await Tarefas.findById(id);
    if (!tarefa){
        throw new Error('Tarefa não encontrada');
    }
    return await tarefa.update({ titulo, descricao, status });
};

const deletarTarefa = async (id) => {
    const tarefa = await Tarefas.findById(id);
    if (!tarefa){
        throw new Error('Tarefa não encontrada');
    }
    return await tarefa.destroy();
};


export default {
    listarTarefas,
    obterTarefa,
    criarTarefa,
    atualizarTarefa,
    deletarTarefa
}
