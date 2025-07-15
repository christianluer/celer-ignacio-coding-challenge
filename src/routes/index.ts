import { Router } from 'express';
import { getClientMonthlyResumeStatus, createDatabasesEntries } from '../controllers/challenge/challengeController';

const router = Router();

router.post('/challenge', getClientMonthlyResumeStatus);
router.get('/challenge/db/init', createDatabasesEntries);

export default router;
