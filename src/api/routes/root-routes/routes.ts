import { Router } from 'express';
import { getRoot } from '../../controllers/root';

const router = Router();

// Routes
router.get('/', getRoot);

export const indexRouter = router;
