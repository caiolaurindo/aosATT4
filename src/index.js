import 'dotenv/config';
import express from 'express';
import { sequelize } from './models/index.js';
import { TarefasRouter } from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
const PORT = process.env.PORT || 3000;

let syncPromise;
const ensureDbSync = () => {
  if (!syncPromise) {
    syncPromise = sequelize.sync().catch((err) => {
      syncPromise = null;
      throw err;
    });
  }
  return syncPromise;
};

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'API de Tarefas funcionando' });
});

app.use('/tarefas', async (req, res, next) => {
  try {
    await ensureDbSync();
    next();
  } catch (error) {
    next(error);
  }
}, TarefasRouter);

app.use(errorHandler);

if (!process.env.VERCEL) {
  ensureDbSync()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Servidor rodando em http://localhost:${PORT}`);
      });
    })
    .catch((error) => {
      console.error('Erro ao iniciar o servidor:', error);
      process.exit(1);
    });
}

export default app;
