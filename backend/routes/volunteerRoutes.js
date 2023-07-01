import express from 'express';

import { addSession, getSession, getSessions} from '../controllers/sessionsController';

const router = express.Router();

router.post('/',addVolunteer);
// router.get('/:id', getSession);
// router.post('/',addSession);
// router.get('/all',getSessions);

export default router;