import { Router } from 'express';
import { TarefasController } from '../controllers/index.js';

const router = Router();

router.get("/", TarefasController.listarTarefas);
router.get("/:tarefaId", TarefasController.obterTarefa);
router.post("/", TarefasController.criarTarefa);
router.put("/:tarefaId", TarefasController.atualizarTarefa);
router.delete("/:tarefaId", TarefasController.deletarTarefa);

export default router;
