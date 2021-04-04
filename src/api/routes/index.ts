import { Router } from 'express';
import { indexRouter } from './root-routes';

const router = Router();

router.use('/', indexRouter);

export const restRouter = router;
