import { z } from 'zod';

export const objectIdParamSchema = z.object({
  objectId: z.string().uuid('objectId deve ser um UUID válido'),
});

export const criarTarefaSchema = z.object({
  descricao: z
    .string({
      required_error: 'O campo "descricao" é obrigatório',
      invalid_type_error: 'O campo "descricao" deve ser uma string',
    })
    .trim()
    .min(1, 'O campo "descricao" é obrigatório'),
  concluida: z
    .boolean({
      invalid_type_error: 'O campo "concluida" deve ser um booleano',
    })
    .optional(),
});

export const atualizarTarefaSchema = z.object({
  descricao: z
    .string({
      invalid_type_error: 'O campo "descricao" deve ser uma string',
    })
    .trim()
    .min(1, 'O campo "descricao" não pode ser vazio')
    .optional(),
  concluida: z
    .boolean({
      invalid_type_error: 'O campo "concluida" deve ser um booleano',
    })
    .optional(),
});
