import express from 'express';

import { addSession, getSession} from '../controllers/sessionsController';

const router = express.Router();

router.get('/:id', getSession);
router.post('/',addSession);

export default router;