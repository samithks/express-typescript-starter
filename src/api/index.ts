import { Router } from 'express';
import { restRouter } from './routes';

const router = Router();

router.use('/api', restRouter);

export default router;
