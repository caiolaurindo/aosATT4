import { Router } from 'express';
import { TarefasController } from '../controllers/index.js';
import { validate } from '../middlewares/validate.js';
import {
  objectIdParamSchema,
  criarTarefaSchema,
  atualizarTarefaSchema,
} from '../schemas/tarefaSchema.js';

const router = Router();

router.get('/', TarefasController.listarTarefas);
router.get(
  '/:objectId',
  validate({ params: objectIdParamSchema }),
  TarefasController.obterTarefa
);
router.post(
  '/',
  validate({ body: criarTarefaSchema }),
  TarefasController.criarTarefa
);
router.put(
  '/:objectId',
  validate({ params: objectIdParamSchema, body: atualizarTarefaSchema }),
  TarefasController.atualizarTarefa
);
router.delete(
  '/:objectId',
  validate({ params: objectIdParamSchema }),
  TarefasController.deletarTarefa
);

export default router;
